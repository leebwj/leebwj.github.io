import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const TILE_SIZE = 40; // must match world.js
const ROAD_SPACING = 3;
const ROAD_WIDTH = 12;

const TRAFFIC_MAX = 10;
const TRAFFIC_SPAWN_INTERVAL = 3.2;
const TRAFFIC_RADIUS = 1.35;
const STOP_DURATION = 3;
const TRAFFIC_COLORS = [
  0xff6b6b,
  0x6bc5ff,
  0xffd86b,
  0xb96bff,
  0x6bffd3
];

const loader = new GLTFLoader();

function hasVerticalRoad(cx) {
  return cx % ROAD_SPACING === 0;
}

function hasHorizontalRoad(cz) {
  return cz % ROAD_SPACING === 0;
}

function snapToRoadChunk(chunk) {
  const remainder = ((chunk % ROAD_SPACING) + ROAD_SPACING) % ROAD_SPACING;
  return chunk - remainder;
}

const chooseRoadChunk = snapToRoadChunk;

function tintClone(root, color) {
  root.traverse((child) => {
    if (child.isMesh) {
      const mats = Array.isArray(child.material)
        ? child.material
        : [child.material];
      mats.forEach((mat, index) => {
        const cloned = mat.clone();
        cloned.color = cloned.color.clone();
        cloned.color.lerp(new THREE.Color(color), 0.9);
        cloned.flatShading = true;
        cloned.needsUpdate = true;
        if (Array.isArray(child.material)) {
          child.material[index] = cloned;
        } else {
          child.material = cloned;
        }
      });
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
}

function loadTrafficTemplate() {
  return new Promise((resolve, reject) => {
    loader.load(
      "./car.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(3, 3, 3);
        model.rotation.set(0, 0, 0);
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
        resolve(model);
      },
      undefined,
      (err) => reject(err)
    );
  });
}

function clampChunk(value) {
  return Math.round(value / TILE_SIZE);
}

function createTrafficState(group, axis, direction, speed, x, z) {
  return {
    group,
    axis,
    direction,
    speed,
    baseSpeed: speed,
    x,
    z,
    radius: TRAFFIC_RADIUS,
    stopTimer: 0
  };
}

export async function createTrafficManager(scene) {
  const template = await loadTrafficTemplate();
  const cars = [];

  let spawnTimer = 0;

  function spawnCar(playerState) {
    if (!playerState) return;
    if (cars.length >= TRAFFIC_MAX) return;

    const axis = Math.random() < 0.5 ? "vertical" : "horizontal";
    const baseChunk =
      axis === "vertical"
        ? clampChunk(playerState.x)
        : clampChunk(playerState.z);
    const roadChunk = chooseRoadChunk(baseChunk);

    if (
      (axis === "vertical" && !hasVerticalRoad(roadChunk)) ||
      (axis === "horizontal" && !hasHorizontalRoad(roadChunk))
    ) {
      return;
    }

    const group = new THREE.Group();
    const clone = template.clone(true);
    clone.rotation.set(0, 0, 0);
    tintClone(
      clone,
      TRAFFIC_COLORS[Math.floor(Math.random() * TRAFFIC_COLORS.length)]
    );
    group.add(clone);
    scene.add(group);

    const laneOffset = (Math.random() - 0.5) * (ROAD_WIDTH * 0.6);
    const direction = Math.random() < 0.5 ? 1 : -1;
    const spawnDistance = 70 + Math.random() * 80;
    const speed = 6 + Math.random() * 4;

    let x = 0;
    let z = 0;
    if (axis === "vertical") {
      const roadX = roadChunk * TILE_SIZE;
      x = roadX + laneOffset;
      z = playerState.z - direction * spawnDistance;
    } else {
      const roadZ = roadChunk * TILE_SIZE;
      z = roadZ + laneOffset;
      x = playerState.x - direction * spawnDistance;
    }

    group.position.set(x, 0.5, z);

    cars.push(
      createTrafficState(group, axis, direction, speed, x, z)
    );
  }

  function slowCar(car) {
    car.speed = 0;
    car.stopTimer = STOP_DURATION;
  }

  function resolveCollision(car, target) {
    const dx = car.x - target.x;
    const dz = car.z - target.z;
    const minDist = car.radius + target.radius;
    const distSq = dx * dx + dz * dz;
    if (distSq > minDist * minDist || distSq <= 1e-6) return false;

    const dist = Math.sqrt(distSq);
      const overlap = minDist - dist + 0.02;
    const nx = dx / dist;
    const nz = dz / dist;

    car.x += nx * overlap;
    car.z += nz * overlap;

    return true;
  }

  function updateCars(dt, playerState, worldObstacles, policeColliders) {
    for (let i = cars.length - 1; i >= 0; i--) {
      const car = cars[i];

      if (car.stopTimer > 0) {
        car.stopTimer -= dt;
        if (car.stopTimer <= 0) {
          car.speed = car.baseSpeed * 0.6;
        }
      } else if (car.speed < car.baseSpeed) {
        car.speed += (car.baseSpeed - car.speed) * Math.min(dt * 2, 1);
      }

      if (car.axis === "vertical") {
        car.z += car.direction * car.speed * dt;
      } else {
        car.x += car.direction * car.speed * dt;
      }

      const vx = car.axis === "horizontal" ? car.direction : 0;
      const vz = car.axis === "vertical" ? car.direction : 0;
      car.group.rotation.y = Math.atan2(vx, vz);

      let collided = false;
      if (worldObstacles && worldObstacles.length) {
        for (const ob of worldObstacles) {
          if (resolveCollision(car, ob)) {
            collided = true;
          }
        }
      }

      if (playerState) {
        const playerCollider = {
          x: playerState.x,
          z: playerState.z,
          radius: 1.6
        };
        if (resolveCollision(car, playerCollider)) {
          collided = true;
        }
      }

      if (policeColliders && policeColliders.length) {
        for (const cop of policeColliders) {
          if (resolveCollision(car, cop)) {
            collided = true;
          }
        }
      }

      if (collided) {
        slowCar(car);
      }

      car.group.position.set(car.x, 0.5, car.z);

      const dx = car.x - playerState.x;
      const dz = car.z - playerState.z;
      const distSq = dx * dx + dz * dz;
      if (distSq > 400 * 400) {
        scene.remove(car.group);
        cars.splice(i, 1);
      }
    }
  }

  return {
    update(dt, playerState, worldObstacles, policeColliders) {
      if (!playerState) return;
      spawnTimer += dt;
      if (spawnTimer > TRAFFIC_SPAWN_INTERVAL) {
        spawnCar(playerState);
        spawnTimer = 0;
      }

      updateCars(dt, playerState, worldObstacles, policeColliders);
    },
    getObstacles() {
      return cars.map((car) => ({
        x: car.x,
        z: car.z,
        radius: car.radius
      }));
    },
    dispose() {
      for (const car of cars) {
        scene.remove(car.group);
      }
      cars.length = 0;
    }
  };
}
