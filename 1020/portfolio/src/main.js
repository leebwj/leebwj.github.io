import './style.scss';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import gsap from 'gsap';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { readingResponses } from './readings.js';

const canvas = document.querySelector('#experience-canvas');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('#project-modal');
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('#modal-description');
const modalLink = document.querySelector('#modal-link');
const closeModalButton = document.querySelector('#close-modal');
const resetCameraButton = document.querySelector('#reset-camera');
const loadingScreen = document.querySelector('.loading-screen');
const loadingProgress = document.querySelector('.loading-progress');
const loadingLabel = document.querySelector('.loading-label');

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const scene = new THREE.Scene();
scene.background = null;

const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(0, 2.5, 10);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setClearColor(0x000000, 0);

const pmremGenerator = new THREE.PMREMGenerator(renderer);
const envMap = pmremGenerator.fromScene(new RoomEnvironment(renderer)).texture;
scene.environment = envMap;
scene.environmentIntensity = 1.1;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;

const ambient = new THREE.AmbientLight(0xffffff, 0.9);
scene.add(ambient);
const dirLight = new THREE.DirectionalLight(0xffffff, 1.9);
dirLight.position.set(6, 10, 6);
scene.add(dirLight);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xb8c2cf, 0.45);
scene.add(hemiLight);

const rimLight = new THREE.DirectionalLight(0xfff0d0, 0.9);
rimLight.position.set(-6, -4, -6);
scene.add(rimLight);

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let hoveredObject = null;
let isModalOpen = false;

let BOUNDS = { x: 9, y: 4, z: 6 };
const RESTITUTION = 0.9;
const FRICTION = 0.998;
const BASE_SCALE = 1.28;
const objects = [];

const gltfLoader = new GLTFLoader();
const loadingPromises = [];
let loadedCount = 0;

function addGlb(url, dataOverrides = {}) {
  return new Promise((resolve) => {
    gltfLoader.load(
      url,
      (gltf) => {
        const root = gltf.scene;
        const meshes = [];
        root.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (!child.material) {
              child.material = new THREE.MeshStandardMaterial({
                color: '#9ca3af',
                roughness: 0.22,
                metalness: 0.06,
                envMapIntensity: 0.95,
              });
            }
            child.geometry.computeBoundingSphere();
            child.userData.rootRef = root;
            meshes.push(child);
          }
        });

        root.updateMatrixWorld(true);

        const box = new THREE.Box3().setFromObject(root);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const target = 1.5;
        const incomingScale = dataOverrides.scaleMul || 1;
        const scale = maxDim > 0 ? (target / maxDim) * incomingScale * BASE_SCALE : incomingScale * BASE_SCALE;
        root.scale.setScalar(scale);
        root.position.sub(center.multiplyScalar(scale));

        root.position.set(0, 0, 0);
        root.updateMatrixWorld(true);
        const finalBox = new THREE.Box3().setFromObject(root);
        const finalSize = finalBox.getSize(new THREE.Vector3());
        const radius = finalSize.length() > 0 ? finalSize.length() / 2 : 0.75;

        const baseScale = root.scale.clone();

        root.userData = {
          ...dataOverrides,
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.25,
            (Math.random() - 0.5) * 0.25,
            (Math.random() - 0.5) * 0.25
          ),
          angularVelocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.6,
            (Math.random() - 0.5) * 0.6,
            (Math.random() - 0.5) * 0.6
          ),
          radius,
          initialScale: baseScale,
        };

        objects.push(root);

        scene.add(root);
        resolve();
      },
      undefined,
      (err) => {
        console.error('Failed to load GLB', url, err);
        resolve();
      }
    );
  });
}

const modelList = [
  {
    file: 'book.glb',
    name: 'Reading Responses',
    description: readingResponses,
    url: '#',
  },
  
  {
    file: 'cat.glb',
    name: '6. Tame the Cat',
    description:
      'Performance-style “cat taming” game: scripted functions with chance elements, documented as a playable web experience.',
    url: 'https://leebwj.github.io/1020/S3P1/start.html',
  },
  {
    file: 'clock.glb',
    name: '5. p5.js Clock',
    description:
      'System-clock-driven p5.js clock sketch: seconds/minutes/hours each drive their own looping visuals, from sketch to prototype.',
    url: 'https://editor.p5js.org/leebwj/full/H0GIyhJEJ',
    scaleMul: 1.3,
  },
  {
    file: 'cube.glb',
    name: '8. QuadTree Painter',
    description:
      'Generative p5.js “Mondrian” quadtree painter. Randomized splits, de Stijl palette, and user-interactive elements.',
    url: 'https://leebwj.github.io/1020/S3P3/index',
  },
  {
    file: 'globe.glb',
    name: '4. Data Footprints',
    description:
      'Single-page interactive site with hover/selector-driven responses, responsive media queries, and optimized imagery. Explore the web-world demo.',
    url: 'https://leebwj.github.io/1020/S2P2/',
  },
  {
    file: 'heart.glb',
    name: '2. CSS Still Life',
    description:
      '800x600 CSS still life from classroom objects. Used div layout, gradients, layering, animation. CodePen demo.',
    url: 'https://codepen.io/Brian-Lee-the-styleful/pen/ByoGepb',
  },
  {
    file: 'present.glb',
    name: '7. API Tool Pitch',
    description:
      'Team project: IFTTT-linked assistive tool, built via VS Code Live Share; single-page site pitching the concept and documenting the prototype.',
    url: 'https://artofthewebfall2025.github.io/s3a2/',
  },
  {
    file: 'tape.glb',
    name: '3. Blue Mixtape',
    description:
      'Multi-page personal music zine with nav flow and flex/grid layout; no page over 5MB. Explore my blue mixtape.',
    url: 'https://leebwj.github.io/1020/S1FP/start.html',
  },
  {
    file: 'wheel.glb',
    name: '1. F1 Race',
    description:
      'F1 ASCII animation that races back and forth. CodePen demo for the binary/ASCII project.',
    url: 'https://codepen.io/Brian-Lee-the-styleful/pen/vENzaBO',
  },
];

modelList.forEach((m) => {
  let scaleMul = 1;
  if (m.name === 'Clock' || m.name === 'Tape') scaleMul = 1.25;
  if (m.name === 'Cube' || m.file === 'cube.glb') scaleMul = 0.8;
  if (typeof m.scaleMul === 'number') scaleMul = m.scaleMul;
  const p = addGlb(`./models/${m.file}`, {
    name: m.name,
    description: m.description,
    url: m.url,
    scaleMul,
  }).then(() => {
    loadedCount += 1;
    const pct = Math.min(1, loadedCount / modelList.length) * 100;
    loadingProgress.style.width = `${pct}%`;
    if (loadingLabel) loadingLabel.textContent = `Loading ${loadedCount}/${modelList.length}`;
  });
  loadingPromises.push(p);
});

Promise.all(loadingPromises).then(() => {
  loadingProgress.style.width = '100%';
  setTimeout(() => {
    document.body.classList.add('app-ready');
    overlay.classList.remove('visible');
    modal.classList.remove('visible');
    loadingScreen.classList.add('hidden');
  }, 400);
});

function showModal(data) {
  modalTitle.textContent = data.name;
  const descText = data.description || '';
  const html = descText
    .replace(/(^|\n)(Week\s+\d+[^\n]*)/g, '$1<strong>$2</strong>')
    .replace(/\n/g, '<br>');
  modalDescription.innerHTML = html;

  const isReading = data.name === 'Reading Responses';
  modal.classList.toggle('wide', isReading);
  modalDescription.classList.toggle('long-text', isReading);

  if (data.url && data.url !== '#') {
    modalLink.href = data.url;
    modalLink.textContent = 'Open project';
    modalLink.style.display = 'inline-block';
  } else {
    modalLink.style.display = 'none';
  }

  overlay.classList.add('visible');
  modal.classList.add('visible');
  isModalOpen = true;
  gsap.fromTo(
    '.modal-card',
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(1.7)' }
  );
}

function hideModal() {
  overlay.classList.remove('visible');
  modal.classList.remove('visible');
  isModalOpen = false;
  hoveredObject = null;
  document.body.style.cursor = 'default';
}

overlay.addEventListener('click', hideModal);
closeModalButton.addEventListener('click', hideModal);

resetCameraButton.addEventListener('click', () => {
  gsap.to(camera.position, {
    x: 0,
    y: 2.5,
    z: 10,
    duration: 0.8,
    ease: 'power2.out',
    onUpdate: () => controls.update(),
  });
  gsap.to(controls.target, { x: 0, y: 0, z: 0, duration: 0.8, ease: 'power2.out' });
});

function onPointerMove(event) {
  pointer.x = (event.clientX / sizes.width) * 2 - 1;
  pointer.y = -(event.clientY / sizes.height) * 2 + 1;
}

function onClick() {
  if (isModalOpen || !hoveredObject) return;
  const data = hoveredObject.userData;
  if (data?.url) {
    showModal(data);
  }
}

window.addEventListener('mousemove', onPointerMove);
window.addEventListener('click', onClick);

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const aspect = sizes.width / sizes.height;
  BOUNDS = {
    x: 9 * Math.max(1, aspect * 0.65),
    y: 4 * Math.max(1, 1 / aspect * 0.6),
    z: 6,
  };
});

function updatePhysics(mesh, delta) {
  const velocity = mesh.userData.velocity;

  velocity.x += (Math.random() - 0.5) * 0.0006;
  velocity.y += (Math.random() - 0.5) * 0.0006;
  velocity.z += (Math.random() - 0.5) * 0.0006;

  const pos = mesh.position;
  const tangent = new THREE.Vector3(-pos.z, 0, pos.x);
  if (tangent.lengthSq() > 0.000001) {
    tangent.normalize().multiplyScalar(0.002);
    velocity.add(tangent);
  }

  const dt = Math.min(delta, 0.02);
  mesh.position.addScaledVector(velocity, dt * 30);

  const r = mesh.userData.radius || 0.7;
  if (mesh.position.x + r > BOUNDS.x) {
    mesh.position.x = BOUNDS.x - r;
    velocity.x *= -RESTITUTION;
  } else if (mesh.position.x - r < -BOUNDS.x) {
    mesh.position.x = -BOUNDS.x + r;
    velocity.x *= -RESTITUTION;
  }
  if (mesh.position.y + r > BOUNDS.y) {
    mesh.position.y = BOUNDS.y - r;
    velocity.y *= -RESTITUTION;
  } else if (mesh.position.y - r < -BOUNDS.y) {
    mesh.position.y = -BOUNDS.y + r;
    velocity.y *= -RESTITUTION;
  }
  if (mesh.position.z + r > BOUNDS.z) {
    mesh.position.z = BOUNDS.z - r;
    velocity.z *= -RESTITUTION;
  } else if (mesh.position.z - r < -BOUNDS.z) {
    mesh.position.z = -BOUNDS.z + r;
    velocity.z *= -RESTITUTION;
  }

  velocity.multiplyScalar(FRICTION);
  const maxSpeed = 0.04;
  if (velocity.lengthSq() > maxSpeed * maxSpeed) {
    velocity.setLength(maxSpeed);
  }
}

const COLLISION_PASSES = 1;

function resolveCollisions() {
  for (let pass = 0; pass < COLLISION_PASSES; pass++) {
    for (let i = 0; i < objects.length; i++) {
      for (let j = i + 1; j < objects.length; j++) {
        const a = objects[i];
        const b = objects[j];
        const posA = a.position;
        const posB = b.position;
        const delta = new THREE.Vector3().subVectors(posB, posA);
        const dist = delta.length();
        const rA = a.userData.radius || 0.7;
        const rB = b.userData.radius || 0.7;
        const minDist = rA + rB;
        if (dist > 0 && dist < minDist) {
          const overlap = (minDist - dist) * 0.5;
          delta.normalize();
          posA.addScaledVector(delta, -overlap);
          posB.addScaledVector(delta, overlap);

          const sep = overlap * 0.12;
          a.userData.velocity.addScaledVector(delta, -sep);
          b.userData.velocity.addScaledVector(delta, sep);
        }
      }
    }
  }
}

const clock = new THREE.Clock();

function animate() {
  const delta = clock.getDelta();
  controls.update();

  objects.forEach((mesh) => {
    updatePhysics(mesh, delta);

    if (!mesh.userData.angularVelocity) {
      mesh.userData.angularVelocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.6,
        (Math.random() - 0.5) * 0.6,
        (Math.random() - 0.5) * 0.6
      );
    }
    const av = mesh.userData.angularVelocity;
    av.multiplyScalar(0.999);
    const maxAv = 0.6;
    if (av.lengthSq() > maxAv * maxAv) av.setLength(maxAv);
    mesh.rotation.x += av.x * delta;
    mesh.rotation.y += av.y * delta;
    mesh.rotation.z += av.z * delta;
  });

  resolveCollisions();

  if (!isModalOpen) {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(objects, true);

    if (intersects.length > 0) {
      const hit = intersects[0];
      const target = hit.object.userData.rootRef || hit.object;
      if (target !== hoveredObject) {
        if (hoveredObject) {
          const base = hoveredObject.userData.initialScale || new THREE.Vector3(1, 1, 1);
          gsap.to(hoveredObject.scale, {
            x: base.x,
            y: base.y,
            z: base.z,
            duration: 0.2,
          });
        }
        hoveredObject = target;
        const base = target.userData.initialScale || new THREE.Vector3(1, 1, 1);
        gsap.to(target.scale, {
          x: base.x * 1.08,
          y: base.y * 1.08,
          z: base.z * 1.08,
          duration: 0.25,
          ease: 'back.out(2)',
        });
        document.body.style.cursor = 'pointer';
      }
    } else {
      if (hoveredObject) {
          const base = hoveredObject.userData.initialScale || new THREE.Vector3(1, 1, 1);
          gsap.to(hoveredObject.scale, {
            x: base.x,
            y: base.y,
            z: base.z,
            duration: 0.2,
          });
        hoveredObject = null;
      }
      document.body.style.cursor = 'default';
    }
  } else {
    document.body.style.cursor = 'default';
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
