import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const MODEL_PATH = "./assets/models/";
const PLAYER_RADIUS = 1.2;

export function createCar(scene) {
  const car = new THREE.Group();
  car.position.set(0, 0.5, 0);
  car.castShadow = true;
  car.receiveShadow = true;
  scene.add(car);

  const carState = {
    x: 0,
    z: 0,
    angle: 0,
    speed: 0,
    accel: 0.016,
    accelBoost: 0.045,
    brakeDecel: 0.035,
    friction: 0.972,
    maxSpeed: 0.2,
    maxSpeedBoost: 0.55,
    steerAngle: 0,
    steerSpeed: 0.045,
    maxSteer: 0.45,
    steerReturnSpeed: 0.06,
    wheelBase: 4.5,
    boostTilt: 0
  };

  const loader = new GLTFLoader();
  loader.load(
    `${MODEL_PATH}player.glb`,
    (gltf) => {
      const model = gltf.scene;
      model.scale.set(3, 3, 3);
      model.rotation.y = -Math.PI / 2;
      model.traverse((child) => {
        if (!child.isMesh) return;
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];
        const shaded = materials.map((mat) => {
          const next = mat.clone();
          next.flatShading = true;
          next.needsUpdate = true;
          return next;
        });
        child.material = Array.isArray(child.material) ? shaded : shaded[0];
        child.castShadow = true;
        child.receiveShadow = true;
      });
      car.add(model);
    },
    undefined,
    (err) => console.error("Error loading player model", err)
  );

  return { car, carState };
}

export function resolveCarVsObstacles(state, carRadius, obstacles) {
  if (!obstacles || !obstacles.length) return;

  for (const ob of obstacles) {
    const dx = state.x - ob.x;
    const dz = state.z - ob.z;
    const sumR = carRadius + ob.radius;
    const distSq = dx * dx + dz * dz;

    if (distSq <= 1e-6 || distSq >= sumR * sumR) continue;

    const dist = Math.sqrt(distSq);
    const penetration = sumR - dist;
    const nx = dx / dist;
    const nz = dz / dist;

    state.x += nx * penetration;
    state.z += nz * penetration;

    const fx = Math.sin(state.angle);
    const fz = Math.cos(state.angle);
    const alignment = fx * nx + fz * nz;

    if (alignment > 0) {
      const normalComponent = alignment * state.speed;
      state.speed -= normalComponent * 1.1;
    }

    state.speed *= 0.9;
  }
}

export function updateCar(car, carState, keys, camera, obstacles = []) {
  const forward = keys["w"] || keys["arrowup"];
  const backward = keys["s"] || keys["arrowdown"];
  const left = keys["a"] || keys["arrowleft"];
  const right = keys["d"] || keys["arrowright"];
  const boost = keys["shift"] && forward;

  if (forward) {
    const accel = boost ? carState.accelBoost : carState.accel;
    carState.speed += accel;
  } else if (backward) {
    carState.speed -= carState.brakeDecel;
  } else {
    carState.speed *= carState.friction;
  }

  const maxLimit = carState.maxSpeedBoost;
  carState.speed = Math.min(maxLimit, carState.speed);
  carState.speed = Math.max(-carState.maxSpeed, carState.speed);

  if (!boost && carState.speed > carState.maxSpeed) {
    carState.speed *= 0.97;
  }

  if (left) carState.steerAngle += carState.steerSpeed;
  if (right) carState.steerAngle -= carState.steerSpeed;

  carState.steerAngle = Math.max(
    -carState.maxSteer,
    Math.min(carState.maxSteer, carState.steerAngle)
  );

  if (!left && !right) {
    carState.steerAngle = THREE.MathUtils.lerp(
      carState.steerAngle,
      0,
      carState.steerReturnSpeed
    );
  }

  if (Math.abs(carState.speed) > 0.0001 && Math.abs(carState.steerAngle) > 0.0001) {
    const turnRate =
      (carState.speed / carState.wheelBase) * Math.tan(carState.steerAngle);
    carState.angle += turnRate;
  }

  carState.x += Math.sin(carState.angle) * carState.speed;
  carState.z += Math.cos(carState.angle) * carState.speed;

  if (obstacles && obstacles.length) {
    resolveCarVsObstacles(carState, PLAYER_RADIUS, obstacles);
  }

  car.position.set(carState.x, 0.5, carState.z);
  car.rotation.y = carState.angle;

  const baseRoll = -carState.steerAngle * 0.15;
  let targetBoostTilt = 0;
  if (boost && carState.speed > 0) targetBoostTilt = -0.1;

  carState.boostTilt = THREE.MathUtils.lerp(
    carState.boostTilt,
    targetBoostTilt,
    0.12
  );

  const basePitch = -carState.speed * 0.18 + carState.boostTilt;
  car.rotation.z = baseRoll;
  car.rotation.x = basePitch;

  const camOffset = { x: 15, y: 20, z: 18 };
  camera.position.set(
    carState.x + camOffset.x,
    camOffset.y,
    carState.z + camOffset.z
  );
  camera.lookAt(car.position);
}