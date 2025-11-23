import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const MODEL_PATH = "./assets/models/";
const MAX_POLICE = 3;
const SPAWN_INTERVAL = 6;

function resolveCarVsObstacles(state, carRadius, obstacles) {
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

const loader = new GLTFLoader();

const circleHit = (ax, az, ar, bx, bz, br) => {
  const dx = ax - bx;
  const dz = az - bz;
  const r = ar + br;
  return dx * dx + dz * dz < r * r;
};

function loadPoliceModel() {
  return new Promise((resolve, reject) => {
    loader.load(
      `${MODEL_PATH}police.glb`,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(3, 3, 3);
        model.rotation.y = -Math.PI / 2;

        model.traverse((child) => {
          if (!child.isMesh) return;
          const materials = Array.isArray(child.material)
            ? child.material
            : [child.material];

          const shaded = materials.map((m) => {
            const mat = m.clone();
            mat.flatShading = true;
            mat.needsUpdate = true;
            return mat;
          });

          child.material = Array.isArray(child.material) ? shaded : shaded[0];
          child.castShadow = true;
          child.receiveShadow = true;
        });

        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        box.getSize(size);

        const center = new THREE.Vector3();
        box.getCenter(center);
        model.position.sub(center);
        model.position.y += size.y * 0.5;

        model.userData.radius = Math.max(size.x, size.z) * 0.35;

        resolve(model);
      },
      undefined,
      reject
    );
  });
}

export async function createPoliceManager(scene) {
  const policeRoot = new THREE.Group();
  scene.add(policeRoot);

  const policeTemplate = await loadPoliceModel();

  const policeCars = [];
  let timeSinceLastSpawn = 0;
  let totalTime = 0;

  function spawnPoliceNear(playerCar) {
    if (!playerCar || policeCars.length >= MAX_POLICE) return;

    const playerPos = playerCar.position;
    const angle = Math.random() * Math.PI * 2;
    const dist = 25 + Math.random() * 10;
    const x = playerPos.x + Math.sin(angle) * dist;
    const z = playerPos.z + Math.cos(angle) * dist;

    const group = new THREE.Group();
    group.position.set(x, 0.5, z);
    policeRoot.add(group);

    const model = policeTemplate.clone(true);
    group.add(model);

    const state = {
      x,
      z,
      angle: angle + Math.PI,
      speed: 0,
      maxSpeed: 0.34,
      accel: 1.2,
      friction: 0.96,
      turnSpeed: 2.2,
      radius: policeTemplate.userData.radius || 2
    };

    policeCars.push({ group, state });
  }

  function updatePolice(dt, playerCar, obstacles, playerState, difficulty) {
    if (!playerCar) return false;

    const px = playerCar.position.x;
    const pz = playerCar.position.z;

    let playerTouching = false;

    for (const pc of policeCars) {
      const s = pc.state;

      const targetAngle = Math.atan2(px - s.x, pz - s.z);
      let delta = targetAngle - s.angle;
      delta = ((delta + Math.PI) % (2 * Math.PI)) - Math.PI;

      const maxTurn = s.turnSpeed * dt;
      if (delta > maxTurn) delta = maxTurn;
      if (delta < -maxTurn) delta = -maxTurn;
      s.angle += delta;

      const effectiveAccel = s.accel * difficulty;
      const effectiveMaxSpeed = s.maxSpeed * difficulty;

      s.speed += effectiveAccel * dt;
      if (s.speed > effectiveMaxSpeed) s.speed = effectiveMaxSpeed;
      s.speed *= s.friction;

      s.x += Math.sin(s.angle) * s.speed;
      s.z += Math.cos(s.angle) * s.speed;

      resolveCarVsObstacles(s, s.radius, obstacles);
    }

    for (let i = 0; i < policeCars.length; i++) {
      for (let j = i + 1; j < policeCars.length; j++) {
        const a = policeCars[i].state;
        const b = policeCars[j].state;

        const dx = a.x - b.x;
        const dz = a.z - b.z;
        const distSq = dx * dx + dz * dz;
        const minDist = a.radius + b.radius;

        if (distSq > 1e-6 && distSq < minDist * minDist) {
          const dist = Math.sqrt(distSq);
          const overlap = minDist - dist;

          if (overlap > minDist * 0.05) {
            const nx = dx / dist;
            const nz = dz / dist;
            const push = overlap * 0.5;

            a.x += nx * push;
            a.z += nz * push;
            b.x -= nx * push;
            b.z -= nz * push;

            a.speed *= 0.9;
            b.speed *= 0.9;
          }
        }
      }
    }

    if (playerState) {
      const playerRadius = 1.7;

      for (const pc of policeCars) {
        const s = pc.state;

        if (circleHit(s.x, s.z, s.radius, playerState.x, playerState.z, playerRadius)) {
          playerTouching = true;

          const dx = playerState.x - s.x;
          const dz = playerState.z - s.z;
          const distSq = dx * dx + dz * dz;

          if (distSq > 1e-6) {
            const dist = Math.sqrt(distSq);
            const nx = dx / dist;
            const nz = dz / dist;

            const minDist = s.radius + playerRadius;
            const overlap = minDist - dist;

            const pushPlayer = overlap * 0.7;
            const pushCop = overlap * 0.3;

            playerState.x += nx * pushPlayer;
            playerState.z += nz * pushPlayer;
            s.x -= nx * pushCop;
            s.z -= nz * pushCop;

            playerState.speed *= 0.5;
            s.speed *= 0.7;
          }
        }
      }
    }

    for (const pc of policeCars) {
      const s = pc.state;
      pc.group.position.set(s.x, 0.5, s.z);
      pc.group.rotation.y = s.angle;
    }

    return playerTouching;
  }

  return {
    update(dt, playerCar, obstacles, playerState) {
      totalTime += dt;
      const speedFactor = 1 + Math.min(totalTime / 60, 0.75);

      timeSinceLastSpawn += dt;
      if (timeSinceLastSpawn > SPAWN_INTERVAL) {
        spawnPoliceNear(playerCar);
        timeSinceLastSpawn = 0;
      }

      return updatePolice(dt, playerCar, obstacles, playerState, speedFactor);
    },

    spawnImmediate(playerCar) {
      spawnPoliceNear(playerCar);
    },

    getColliders() {
      return policeCars.map((pc) => ({
        x: pc.state.x,
        z: pc.state.z,
        radius: pc.state.radius
      }));
    }
  };
}
