import * as THREE from "three";
import { createCar, updateCar } from "./control.js";
import { keys, setupInputListeners } from "./input.js";
import { createWorldManager } from "./world.js";
import { createPoliceManager } from "./police.js";
import { createTrafficManager } from "./traffic.js";

const SCORE_PER_SECOND = 12;
const SPEED_DISPLAY_FACTOR = 120;
const CATCH_THRESHOLD = 3;

function selectHudElements() {
  return {
    score: document.getElementById("scoreValue"),
    speed: document.getElementById("speedValue"),
    pauseButton: document.getElementById("pauseButton"),
    gameOverScreen: document.getElementById("gameOverScreen"),
    finalScore: document.getElementById("finalScore"),
    retryButton: document.getElementById("retryButton"),
    helpButton: document.getElementById("helpButton"),
    instructionsScreen: document.getElementById("instructionScreen"),
    startButton: document.getElementById("startButton"),
    wantedLevel: document.getElementById("wantedLevel"),
    wantedStars: Array.from(document.querySelectorAll(".wanted-star")),
    sirenOverlay: document.getElementById("sirenOverlay"),
  };
}

function updateHud(hud, score, speed) {
  if (hud.score) hud.score.textContent = Math.floor(score);
  if (hud.speed) hud.speed.textContent = Math.max(0, Math.round(speed));
}

function updateWantedLevel(hud, catchTimer) {
  const visible = catchTimer > 0;
  hud.wantedLevel?.classList.toggle("visible", visible);
  hud.sirenOverlay?.classList.toggle("active", visible);
  if (hud.wantedStars) {
    const active = visible ? Math.ceil((catchTimer / CATCH_THRESHOLD) * hud.wantedStars.length) : 0;
    hud.wantedStars.forEach((star, i) => star.classList.toggle("active", i < active));
  }
}

async function init() {
  setupInputListeners();

  const container = document.getElementById("game-container");
  const hud = selectHudElements();
  updateHud(hud, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  renderer.shadowMap.enabled = false;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const FOG_COLOR = 0xd4f0ff;
  scene.background = new THREE.Color(FOG_COLOR);
  scene.fog = new THREE.Fog(FOG_COLOR, 70, 200);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 350);
  camera.position.set(20, 25, 30);
  camera.lookAt(0, 0, 0);

  scene.add(new THREE.AmbientLight(0xfff7ec, 0.8));
  scene.add(new THREE.HemisphereLight(0xfffbdd, 0x83e0a6, 0.6));

  const sunLight = new THREE.DirectionalLight(0xfff0c9, 1.35);
  sunLight.position.set(50, 80, 30);
  sunLight.castShadow = false;
  scene.add(sunLight);

  const rimLight = new THREE.DirectionalLight(0xa7d8ff, 0.6);
  rimLight.position.set(-45, 60, -20);
  scene.add(rimLight);

  const peachGlow = new THREE.PointLight(0xffc6b3, 0.7, 180);
  peachGlow.position.set(0, 45, 0);
  scene.add(peachGlow);

  const mintGlow = new THREE.PointLight(0xc4ffea, 0.5, 200);
  mintGlow.position.set(-30, 35, 60);
  scene.add(mintGlow);

  const listener = new THREE.AudioListener();
  camera.add(listener);
  const bgm = new THREE.Audio(listener);

  const audioLoader = new THREE.AudioLoader();
  let bgmBuffer = null;

  const tryPlayBgm = () => {
    if (!bgmBuffer) return;
    const resume = listener.context.resume?.();
    const play = () => { if (!bgm.isPlaying) bgm.play(); };
    if (resume && typeof resume.then === "function") resume.then(play).catch(() => {});
    else play();
  };

  document.addEventListener("click", tryPlayBgm, { once: true });

  audioLoader.load("./assets/audio/High-Speed Getaway.mp3", (buffer) => {
    bgmBuffer = buffer;
    bgm.setBuffer(buffer);
    bgm.setLoop(true);
    bgm.setVolume(0.32);
    tryPlayBgm();
  });

  const worldManager = await createWorldManager(scene);
  const policeManager = await createPoliceManager(scene);
  const trafficManager = await createTrafficManager(scene);
  const { car, carState } = await createCar(scene);
  worldManager.update(carState.x, carState.z);

  let isPaused = true;
  let isGameOver = false;
  let score = 0;
  let catchTimer = 0;
  let hasStarted = false;
  let lastCopColliders = [];

  function togglePause(forcedState, options = {}) {
    if (isGameOver && !options.ignoreGameOver) return;
    isPaused = typeof forcedState === "boolean" ? forcedState : !isPaused;
    if (hud.pauseButton) hud.pauseButton.textContent = isPaused ? "▶" : "⏸";
  }

  function showInstructions(resume = false) {
    if (!hud.instructionsScreen) return;
    hud.instructionsScreen.classList.remove("hidden");
    if (hud.startButton) hud.startButton.textContent = resume || hasStarted ? "Resume" : "Start";
    togglePause(true, { ignoreGameOver: true });
  }

  function hideInstructions() {
    if (!hud.instructionsScreen) return;
    hud.instructionsScreen.classList.add("hidden");
    hasStarted = true;
    togglePause(false);
    tryPlayBgm();
  }

  function triggerGameOver() {
    if (isGameOver) return;
    isGameOver = true;
    hud.gameOverScreen?.classList.remove("hidden");
    if (hud.finalScore) hud.finalScore.textContent = Math.floor(score);
  }

  hud.pauseButton?.addEventListener("click", () => togglePause());
  hud.retryButton?.addEventListener("click", () => window.location.reload());
  hud.helpButton?.addEventListener("click", () => { if (!isGameOver) showInstructions(true); });
  hud.startButton?.addEventListener("click", () => hideInstructions());

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  let lastTime = performance.now();

  function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    if (!isPaused && !isGameOver) {
      worldManager.update(carState.x, carState.z);
      const worldObstacles = worldManager.getObstacles();

      trafficManager.update(dt, carState, worldObstacles, lastCopColliders);
      const obstacles = worldObstacles.concat(trafficManager.getObstacles());

      updateCar(car, carState, keys, camera, obstacles);

      const touchingPlayer = policeManager.update(dt, car, obstacles, carState);
      lastCopColliders = policeManager.getColliders();

      score += dt * SCORE_PER_SECOND;
      updateHud(hud, score, Math.abs(carState.speed) * SPEED_DISPLAY_FACTOR);

      if (touchingPlayer) {
        catchTimer += dt;
        if (catchTimer >= CATCH_THRESHOLD) triggerGameOver();
      } else {
        catchTimer = 0;
      }

      updateWantedLevel(hud, catchTimer);
    }

    renderer.render(scene, camera);
  }

  showInstructions(false);
  animate();
}

init().catch((err) => console.error("Init error:", err));
