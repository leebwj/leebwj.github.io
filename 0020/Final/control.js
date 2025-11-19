// control.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// ---------------------------------------------------------
// Car creation
// ---------------------------------------------------------
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

    // movement tuning (slower normal, relatively stronger boost)
    accel: 0.016,
    accelBoost: 0.045,
    brakeDecel: 0.035,
    friction: 0.972,

    maxSpeed: 0.20,
    maxSpeedBoost: 0.55,

    // steering
    steerAngle: 0,
    steerSpeed: 0.045,
    maxSteer: 0.45,
    steerReturnSpeed: 0.06,

    wheelBase: 4.5,

    // visual smoothing for boost tilt
    boostTilt: 0
  };

  const loader = new GLTFLoader();
  loader.load(
    "./player.glb",
    (gltf) => {
      console.log("player.glb loaded");

      const model = gltf.scene;

      model.scale.set(3, 3, 3);
      model.position.set(0, 0, 0);
      // align forward with +Z
      model.rotation.y = -Math.PI / 2;

      model.traverse((child) => {
        if (child.isMesh) {
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => {
              m.flatShading = true;
              m.needsUpdate = true;
            });
          } else {
            child.material.flatShading = true;
            child.material.needsUpdate = true;
          }
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      car.add(model);
    },
    undefined,
    (err) => {
      console.error("Error loading player.glb:", err);
    }
  );

  return { car, carState };
}

// ---------------------------------------------------------
// Collision helper: non-sticky sliding vs circular obstacles
// ---------------------------------------------------------
// state: { x, z, angle, speed }
// carRadius: collision radius of the car
export function resolveCarVsObstacles(state, carRadius, obstacles) {
  if (!obstacles || !obstacles.length) return;

  for (const ob of obstacles) {
    const dx = state.x - ob.x;
    const dz = state.z - ob.z;
    const sumR = carRadius + ob.radius;
    const distSq = dx * dx + dz * dz;

    if (distSq > 1e-6 && distSq < sumR * sumR) {
      const dist = Math.sqrt(distSq);
      const penetration = sumR - dist;

      // normal from obstacle â†’ car
      const nx = dx / dist;
      const nz = dz / dist;

      // push car just out of the obstacle
      state.x += nx * penetration;
      state.z += nz * penetration;

      // damp speed mostly along the collision normal, keep tangential so it can slide
      const fx = Math.sin(state.angle);
      const fz = Math.cos(state.angle);

      const alignment = fx * nx + fz * nz; // cos(theta) in [-1, 1]

      if (alignment > 0) {
        // moving partially into the obstacle
        const normalComponent = alignment * state.speed;
        state.speed -= normalComponent * 1.1;
      }

      // global damping so we don't bounce forever
      state.speed *= 0.9;
    }
  }
}

// ---------------------------------------------------------
// Per-frame update: input, physics, collisions, camera
// ---------------------------------------------------------
export function updateCar(car, carState, keys, camera, obstacles = []) {
  const forward  = keys["w"] || keys["arrowup"];
  const backward = keys["s"] || keys["arrowdown"];
  const left     = keys["a"] || keys["arrowleft"];
  const right    = keys["d"] || keys["arrowright"];
  const boost    = keys["shift"] && forward;

  // ----- Throttle / brake -----
  if (forward) {
    const accel = boost ? carState.accelBoost : carState.accel;
    carState.speed += accel;
  } else if (backward) {
    carState.speed -= carState.brakeDecel;
  } else {
    carState.speed *= carState.friction;
  }

  // ----- Speed clamp -----
  const maxLimit = carState.maxSpeedBoost;

  // absolute safety clamp
  if (carState.speed > maxLimit) {
    carState.speed = maxLimit;
  }
  if (carState.speed < -carState.maxSpeed) {
    carState.speed = -carState.maxSpeed;
  }

  // bleed off excess boost speed back to normal top speed
  if (!boost && carState.speed > carState.maxSpeed) {
    carState.speed *= 0.97;
  }

  // ----- Steering (bicycle model) -----
  if (left) {
    carState.steerAngle += carState.steerSpeed;
  }
  if (right) {
    carState.steerAngle -= carState.steerSpeed;
  }

  carState.steerAngle = Math.max(
    -carState.maxSteer,
    Math.min(carState.maxSteer, carState.steerAngle)
  );

  // auto-center steering
  if (!left && !right) {
    carState.steerAngle = THREE.MathUtils.lerp(
      carState.steerAngle,
      0,
      carState.steerReturnSpeed
    );
  }

  // turn only when moving and actually steering
  if (Math.abs(carState.speed) > 0.0001 && Math.abs(carState.steerAngle) > 0.0001) {
    const turnRate =
      (carState.speed / carState.wheelBase) * Math.tan(carState.steerAngle);
    carState.angle += turnRate;
  }

  // ----- Integrate position -----
  carState.x += Math.sin(carState.angle) * carState.speed;
  carState.z += Math.cos(carState.angle) * carState.speed;

  // ----- World collisions (non-sticky) -----
  if (obstacles && obstacles.length) {
    const PLAYER_RADIUS = 1.2; // tweak if you want â€œfatterâ€ or â€œthinnerâ€ car
    resolveCarVsObstacles(carState, PLAYER_RADIUS, obstacles);
  }

  // ----- Apply to car transform -----
  car.position.set(carState.x, 0.5, carState.z);
  car.rotation.y = carState.angle;

  // ----- Visual body tilt -----
  const baseRoll = -carState.steerAngle * 0.15;

  // target extra tilt when boosting
  let targetBoostTilt = 0;
  if (boost && carState.speed > 0) {
    targetBoostTilt = -0.10; // nose-down when boosting
  }

  // smooth boost tilt
  carState.boostTilt = THREE.MathUtils.lerp(
    carState.boostTilt,
    targetBoostTilt,
    0.12
  );

  const basePitch = -carState.speed * 0.18 + carState.boostTilt;

  car.rotation.z = baseRoll;
  car.rotation.x = basePitch;

  // ----- Camera follow -----
  const camOffset = { x: 15, y: 20, z: 18 };
  camera.position.set(
    carState.x + camOffset.x,
    camOffset.y,
    carState.z + camOffset.z
  );
  camera.lookAt(car.position);
}



