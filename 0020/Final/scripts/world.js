import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();
const MODEL_PATH = "./assets/models/";

const TILE_SIZE = 40;
const ACTIVE_RADIUS = 2;
const ROCKS_PER_CHUNK = 1;
const TREES_PER_CHUNK = 2;
const BUILDINGS_PER_CHUNK = 1;
const BUILDING_SPAWN_CHANCE = 0.45;

const ROAD_SPACING = 3;
const ROAD_WIDTH = 12;
const ROAD_COLOR = 0x47515d;
const ROAD_Y = 0.02;
const BUILDING_MARGIN = 15;
const BUILDING_PALETTES = [
  { body: 0xededed, trim: 0xdedede, accent: 0x4f4f4f },
  { body: 0xe1e1e1, trim: 0xcfcfcf, accent: 0x3a3a3a },
  { body: 0xf5f5f5, trim: 0xe8e8e8, accent: 0x5d5d5d }
];

function loadModel(file, { scale = 1, radiusScale = 0.35 } = {}) {
  return new Promise((resolve, reject) => {
    loader.load(
      `${MODEL_PATH}${file}`,
      (gltf) => {
        const root = gltf.scene;
        root.scale.set(scale, scale, scale);

        root.traverse((child) => {
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

        const box = new THREE.Box3().setFromObject(root);
        const minY = box.min.y;
        const size = new THREE.Vector3();
        box.getSize(size);

        root.userData.yOffset = -minY + 0.01;
        root.userData.baseRadius = Math.max(size.x, size.z) * radiusScale;

        resolve(root);
      },
      undefined,
      reject
    );
  });
}

export async function createWorldManager(scene) {
  const worldRoot = new THREE.Group();
  scene.add(worldRoot);

  const groundMat = new THREE.MeshStandardMaterial({
    color: 0xb3f7cf,
    roughness: 0.9,
    metalness: 0,
    flatShading: true,
    emissive: new THREE.Color(0x193e2c),
    emissiveIntensity: 0.07
  });

  const roadMat = new THREE.MeshStandardMaterial({
    color: ROAD_COLOR,
    roughness: 0.95,
    metalness: 0,
    flatShading: true
  });

  const [rockTemplate, treeTemplate, buildingOne, buildingTwo] =
    await Promise.all([
      loadModel("rock2.glb", { scale: 2.4 }),
      loadModel("tree.glb", { scale: 5.5 }),
      loadModel("buildingOne.glb", { scale: 6.8, radiusScale: 0.5 }),
      loadModel("buildingTwo.glb", { scale: 6.8, radiusScale: 0.5 })
    ]);

  const buildingTemplates = [buildingOne, buildingTwo];
  const chunks = new Map();

  const hasVerticalRoad = (cx) => cx % ROAD_SPACING === 0;
  const hasHorizontalRoad = (cz) => cz % ROAD_SPACING === 0;

  function isPointNearRoad(x, z, padding = 0) {
    const cx = Math.floor(x / TILE_SIZE);
    const cz = Math.floor(z / TILE_SIZE);
    const centerX = cx * TILE_SIZE;
    const centerZ = cz * TILE_SIZE;
    const localX = x - centerX;
    const localZ = z - centerZ;
    const halfRoad = ROAD_WIDTH / 2 + padding;
    const onVertical = hasVerticalRoad(cx) && Math.abs(localX) <= halfRoad;
    const onHorizontal = hasHorizontalRoad(cz) && Math.abs(localZ) <= halfRoad;
    return onVertical || onHorizontal;
  }

  function isSpotFree(x, z, radius, obstacles = []) {
    for (const ob of obstacles) {
      const minDist = radius + ob.radius + 0.5;
      const dx = x - ob.x;
      const dz = z - ob.z;
      if (dx * dx + dz * dz < minDist * minDist) return false;
    }
    return true;
  }

  function samplePropPosition(cx, cz, radius, obstacles = []) {
    const centerX = cx * TILE_SIZE;
    const centerZ = cz * TILE_SIZE;
    const half = TILE_SIZE / 2 - radius - 0.5;
    const roadBuffer = ROAD_WIDTH / 2 + radius + 3;

    for (let i = 0; i < 120; i++) {
      const localX = hasVerticalRoad(cx)
        ? (() => {
            const span = Math.max(0, half - roadBuffer);
            const offset = roadBuffer + Math.random() * span;
            return Math.random() < 0.5 ? -offset : offset;
          })()
        : (Math.random() * 2 - 1) * half;

      const localZ = hasHorizontalRoad(cz)
        ? (() => {
            const span = Math.max(0, half - roadBuffer);
            const offset = roadBuffer + Math.random() * span;
            return Math.random() < 0.5 ? -offset : offset;
          })()
        : (Math.random() * 2 - 1) * half;

      if (Math.abs(localX) >= half || Math.abs(localZ) >= half) continue;

      const worldX = centerX + localX;
      const worldZ = centerZ + localZ;
      if (
        !isPointNearRoad(worldX, worldZ, radius + BUILDING_MARGIN * 0.4) &&
        isSpotFree(worldX, worldZ, radius, obstacles)
      ) {
        return { x: worldX, z: worldZ };
      }
    }

    for (let i = 0; i < 60; i++) {
      const worldX = centerX + (Math.random() * 2 - 1) * half;
      const worldZ = centerZ + (Math.random() * 2 - 1) * half;
      if (
        !isPointNearRoad(worldX, worldZ, radius + 1) &&
        isSpotFree(worldX, worldZ, radius, obstacles)
      ) {
        return { x: worldX, z: worldZ };
      }
    }

    return null;
  }

  function clampToChunk(center, value, radius) {
    const half = TILE_SIZE / 2 - radius - 0.5;
    return THREE.MathUtils.clamp(value, center - half, center + half);
  }

  function adjustAwayFromRoad(cx, cz, pos, radius, obstacles = []) {
    if (!pos) return null;
    const centerX = cx * TILE_SIZE;
    const centerZ = cz * TILE_SIZE;
    const safeOffset = ROAD_WIDTH / 2 + radius + BUILDING_MARGIN;
    const adjusted = { ...pos };

    if (hasVerticalRoad(cx)) {
      let dir = Math.sign(adjusted.x - centerX);
      if (dir === 0) dir = Math.random() < 0.5 ? -1 : 1;
      if (Math.abs(adjusted.x - centerX) < safeOffset) {
        adjusted.x = centerX + dir * safeOffset;
      }
    }

    if (hasHorizontalRoad(cz)) {
      let dir = Math.sign(adjusted.z - centerZ);
      if (dir === 0) dir = Math.random() < 0.5 ? -1 : 1;
      if (Math.abs(adjusted.z - centerZ) < safeOffset) {
        adjusted.z = centerZ + dir * safeOffset;
      }
    }

    adjusted.x = clampToChunk(centerX, adjusted.x, radius);
    adjusted.z = clampToChunk(centerZ, adjusted.z, radius);

    if (isPointNearRoad(adjusted.x, adjusted.z, radius + BUILDING_MARGIN * 0.6))
      return null;
    if (!isSpotFree(adjusted.x, adjusted.z, radius, obstacles)) return null;
    return adjusted;
  }

  function tintBuildingClone(clone, palette) {
    let meshIndex = 0;
    clone.traverse((child) => {
      if (!child.isMesh) return;
      const colors = [palette.body, palette.trim, palette.accent];
      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];
      const tinted = materials.map((mat, index) => {
        const next = mat.clone();
        const chosen = colors[Math.min(colors.length - 1, (meshIndex + index) % colors.length)];
        next.color = new THREE.Color(chosen);
        next.flatShading = true;
        next.needsUpdate = true;
        return next;
      });
      child.material = Array.isArray(child.material) ? tinted : tinted[0];
      meshIndex++;
    });
  }

  function addBuildingToChunk(chunkGroup, template, palette, x, z, rotation) {
    const clone = template.clone(true);
    tintBuildingClone(clone, palette);
    const yOffset = template.userData.yOffset || 0;
    clone.position.set(x, yOffset, z);
    clone.rotation.y = rotation;
    clone.castShadow = true;
    clone.receiveShadow = true;
    chunkGroup.add(clone);
    return { x, z, radius: (template.userData.baseRadius || 3) * 0.8 };
  }

  function addRoadsToChunk(chunkGroup, cx, cz) {
    const centerX = cx * TILE_SIZE;
    const centerZ = cz * TILE_SIZE;

    if (hasVerticalRoad(cx)) {
      const geo = new THREE.PlaneGeometry(ROAD_WIDTH, TILE_SIZE + 0.1);
      const road = new THREE.Mesh(geo, roadMat);
      road.rotation.x = -Math.PI / 2;
      road.position.set(centerX, ROAD_Y, centerZ);
      road.receiveShadow = true;
      chunkGroup.add(road);
    }

    if (hasHorizontalRoad(cz)) {
      const geo = new THREE.PlaneGeometry(TILE_SIZE + 0.1, ROAD_WIDTH);
      const road = new THREE.Mesh(geo, roadMat);
      road.rotation.x = -Math.PI / 2;
      road.position.set(centerX, ROAD_Y, centerZ);
      road.receiveShadow = true;
      chunkGroup.add(road);
    }
  }

  function addCloneToChunk(group, template, x, z, options = {}) {
    const clone = template.clone(true);
    const yOffset = template.userData.yOffset || 0;
    clone.position.set(x, yOffset, z);

    if (options.randomRotateY !== false) {
      clone.rotation.y = Math.random() * Math.PI * 2;
    }

    let radius = template.userData.baseRadius || 1;
    let scaleMult = 1;

    if (options.variationScale) {
      const s = 1 + (Math.random() - 0.5) * options.variationScale;
      clone.scale.multiplyScalar(s);
      scaleMult = s;
    }

    radius *= scaleMult;

    group.add(clone);
    return { x, z, radius };
  }

  function createChunk(cx, cz) {
    const key = `${cx},${cz}`;
    if (chunks.has(key)) return;

    const chunkGroup = new THREE.Group();
    chunkGroup.name = `Chunk_${key}`;
    worldRoot.add(chunkGroup);

    const obstacles = [];

    const groundGeo = new THREE.PlaneGeometry(TILE_SIZE, TILE_SIZE);
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(cx * TILE_SIZE, 0, cz * TILE_SIZE);
    ground.receiveShadow = true;
    chunkGroup.add(ground);

    addRoadsToChunk(chunkGroup, cx, cz);

    for (let i = 0; i < BUILDINGS_PER_CHUNK; i++) {
      if (Math.random() > BUILDING_SPAWN_CHANCE) continue;
      const template =
        buildingTemplates[Math.floor(Math.random() * buildingTemplates.length)];
      const palette =
        BUILDING_PALETTES[Math.floor(Math.random() * BUILDING_PALETTES.length)];
      const radius = (template.userData.baseRadius || 3) * 0.8;
      const initialSpot = samplePropPosition(cx, cz, radius, obstacles);
      const spot = adjustAwayFromRoad(cx, cz, initialSpot, radius, obstacles);
      if (!spot) continue;
      const centerX = cx * TILE_SIZE;
      const centerZ = cz * TILE_SIZE;
      const dx = Math.abs(spot.x - centerX);
      const dz = Math.abs(spot.z - centerZ);
      const rotation = dx >= dz ? 0 : Math.PI / 2;
      const buildingObstacle = addBuildingToChunk(
        chunkGroup,
        template,
        palette,
        spot.x,
        spot.z,
        rotation
      );
      obstacles.push(buildingObstacle);
    }

    for (let i = 0; i < ROCKS_PER_CHUNK; i++) {
      const approxRadius = (rockTemplate.userData.baseRadius || 1) * 1.25;
      const spot = samplePropPosition(cx, cz, approxRadius, obstacles);
      if (!spot) continue;
      const ob = addCloneToChunk(chunkGroup, rockTemplate, spot.x, spot.z, {
        variationScale: 0.4
      });
      obstacles.push(ob);
    }

    for (let i = 0; i < TREES_PER_CHUNK; i++) {
      const approxRadius = (treeTemplate.userData.baseRadius || 1) * 1.2;
      const spot = samplePropPosition(cx, cz, approxRadius, obstacles);
      if (!spot) continue;
      const ob = addCloneToChunk(chunkGroup, treeTemplate, spot.x, spot.z, {
        variationScale: 0.3
      });
      obstacles.push(ob);
    }

    chunks.set(key, { group: chunkGroup, obstacles });
  }

  function updateChunksAround(cx, cz) {
    for (let dx = -ACTIVE_RADIUS; dx <= ACTIVE_RADIUS; dx++) {
      for (let dz = -ACTIVE_RADIUS; dz <= ACTIVE_RADIUS; dz++) {
        createChunk(cx + dx, cz + dz);
      }
    }

    for (const [key, chunk] of chunks.entries()) {
      const [xStr, zStr] = key.split(",");
      const cX = parseInt(xStr, 10);
      const cZ = parseInt(zStr, 10);

      if (
        Math.abs(cX - cx) > ACTIVE_RADIUS + 1 ||
        Math.abs(cZ - cz) > ACTIVE_RADIUS + 1
      ) {
        worldRoot.remove(chunk.group);
        chunk.group.traverse((obj) => {
          if (!obj.isMesh) return;
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        });
        chunks.delete(key);
      }
    }
  }

  function getObstacles() {
    const all = [];
    for (const { obstacles } of chunks.values()) {
      all.push(...obstacles);
    }
    return all;
  }

  return {
    update(x, z) {
      const cx = Math.floor(x / TILE_SIZE);
      const cz = Math.floor(z / TILE_SIZE);
      updateChunksAround(cx, cz);
    },
    getObstacles
  };
}
