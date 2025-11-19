// world.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

// ---------- World settings ----------
const TILE_SIZE      = 40;  // size of one chunk in world units
const ACTIVE_RADIUS  = 2;   // how many tiles to keep around player (2 => 5x5 area)
const ROCKS_PER_CHUNK = 4;
const TREES_PER_CHUNK = 4;
const BUILDINGS_PER_CHUNK = 1;

// ---------- Road layout ----------
const ROAD_SPACING = 3;          // every 3rd chunk in X/Z has a road
const ROAD_WIDTH   = 12;         // road strip width (world units)
const ROAD_COLOR   = 0x47515d;   // soft asphalt
const ROAD_Y       = 0.02;       // a tiny bit above ground to avoid z-fighting
const BUILDING_MARGIN = 15;
const BUILDING_PALETTES = [
  { body: 0xededed, trim: 0xdedede, accent: 0x4f4f4f },
  { body: 0xe1e1e1, trim: 0xcfcfcf, accent: 0x3a3a3a },
  { body: 0xf5f5f5, trim: 0xe8e8e8, accent: 0x5d5d5d }
];

// ---------- Model loader with auto radius ----------
function loadModel(path, { scale = 1, radiusScale = 0.35 } = {}) {
  return new Promise((resolve, reject) => {
    loader.load(
      path,
      (gltf) => {
        const root = gltf.scene;
        root.scale.set(scale, scale, scale);

        root.traverse((child) => {
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

        // compute bounds
        const box = new THREE.Box3().setFromObject(root);
        const minY = box.min.y;
        const size = new THREE.Vector3();
        box.getSize(size);

        // bottom on ground
        root.userData.yOffset = -minY + 0.01;

        // base collision radius from footprint (x,z)
        const maxHorizontal = Math.max(size.x, size.z);
        root.userData.baseRadius = maxHorizontal * radiusScale;

        resolve(root);
      },
      undefined,
      (err) => {
        console.error(`❌ Error loading ${path}`, err);
        reject(err);
      }
    );
  });
}

/**
 * WorldManager: handles infinite world via chunks.
 * - Call worldManager.update(carX, carZ) every frame
 * - Call worldManager.getObstacles() to get collision obstacles
 */
export async function createWorldManager(scene) {
  const worldRoot = new THREE.Group();
  worldRoot.name = "WorldRoot";
  scene.add(worldRoot);

  // shared ground material
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0xb3f7cf,   // pastel grass
    roughness: 0.9,
    metalness: 0,
    flatShading: true,
    emissive: new THREE.Color(0x193e2c),
    emissiveIntensity: 0.07
  });

  // shared road material
  const roadMat = new THREE.MeshStandardMaterial({
    color: ROAD_COLOR,
    roughness: 0.95,
    metalness: 0,
    flatShading: true
  });

  // Load templates once
  const [
    rock2Base,
    treeBase,
    buildingOneBase,
    buildingTwoBase
  ] = await Promise.all([
    loadModel("./rock2.glb", { scale: 2.4 }),
    loadModel("./tree.glb", { scale: 5.5 }),
    loadModel("./buildingOne.glb", { scale: 6.8, radiusScale: 0.5 }),
    loadModel("./buildingTwo.glb", { scale: 6.8, radiusScale: 0.5 })
  ]);

  const rockTemplates = [rock2Base];
  const buildingTemplates = [buildingOneBase, buildingTwoBase];

  // key: "cx,cz" => { group, obstacles }
  const chunks = new Map();

  function chunkKey(cx, cz) {
    return `${cx},${cz}`;
  }

  // random point inside a chunk (world coords)
  function randInChunk(cx, cz) {
    const baseX = cx * TILE_SIZE;
    const baseZ = cz * TILE_SIZE;

    const half = TILE_SIZE / 2;
    const x = baseX + (Math.random() * TILE_SIZE - half);
    const z = baseZ + (Math.random() * TILE_SIZE - half);
    return { x, z };
  }

  // ---- Road helpers ----
  function hasVerticalRoad(cx) {
    return cx % ROAD_SPACING === 0;
  }

  function hasHorizontalRoad(cz) {
    return cz % ROAD_SPACING === 0;
  }

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

  function isOnRoadWorld(x, z, cx, cz) {
    const centerX = cx * TILE_SIZE;
    const centerZ = cz * TILE_SIZE;

    const localX = x - centerX;
    const localZ = z - centerZ;

    const halfRoad = ROAD_WIDTH / 2;

    const onVertical =
      hasVerticalRoad(cx) && Math.abs(localX) < halfRoad;
    const onHorizontal =
      hasHorizontalRoad(cz) && Math.abs(localZ) < halfRoad;

    return onVertical || onHorizontal;
  }

  function isSpotFree(x, z, radius, obstacles = []) {
    for (const ob of obstacles) {
      const minDist = radius + ob.radius + 0.5;
      const dx = x - ob.x;
      const dz = z - ob.z;
      if (dx * dx + dz * dz < minDist * minDist) {
        return false;
      }
    }
    return true;
  }

  function samplePropPosition(cx, cz, radius, obstacles = []) {
    const centerX = cx * TILE_SIZE;
    const centerZ = cz * TILE_SIZE;
    const half = TILE_SIZE / 2 - radius - 0.5;
    const roadBuffer = ROAD_WIDTH / 2 + radius + 3;

    for (let i = 0; i < 120; i++) {
      let localX;
      if (hasVerticalRoad(cx)) {
        const span = Math.max(0, half - roadBuffer);
        const offset = roadBuffer + Math.random() * span;
        localX = Math.random() < 0.5 ? -offset : offset;
      } else {
        localX = (Math.random() * 2 - 1) * half;
      }

      let localZ;
      if (hasHorizontalRoad(cz)) {
        const span = Math.max(0, half - roadBuffer);
        const offset = roadBuffer + Math.random() * span;
        localZ = Math.random() < 0.5 ? -offset : offset;
      } else {
        localZ = (Math.random() * 2 - 1) * half;
      }

    if (Math.abs(localX) < half && Math.abs(localZ) < half) {
      const worldX = centerX + localX;
      const worldZ = centerZ + localZ;
      if (
        !isPointNearRoad(worldX, worldZ, radius + BUILDING_MARGIN * 0.4) &&
        isSpotFree(worldX, worldZ, radius, obstacles)
      ) {
        return { x: worldX, z: worldZ };
      }
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
    let adjusted = { ...pos };

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

    if (isPointNearRoad(adjusted.x, adjusted.z, radius + BUILDING_MARGIN * 0.6)) {
      return null;
    }
    if (!isSpotFree(adjusted.x, adjusted.z, radius, obstacles)) {
      return null;
    }
    return adjusted;
  }

  function tintBuildingClone(clone, palette) {
    let meshIndex = 0;
    clone.traverse((child) => {
      if (child.isMesh) {
        const mat = child.material.clone();
        const colors = [palette.body, palette.trim, palette.accent];
        const chosen = colors[Math.min(colors.length - 1, meshIndex % colors.length)];
        mat.color = new THREE.Color(chosen);
        mat.flatShading = true;
        mat.needsUpdate = true;
        child.material = mat;
        meshIndex++;
      }
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

function findBuildingSpotAlongRoad(cx, cz, orientation, radius, obstacles) {
  const centerX = cx * TILE_SIZE;
  const centerZ = cz * TILE_SIZE;
  const half = TILE_SIZE / 2 - radius - 0.5;
  const offset = ROAD_WIDTH / 2 + radius + BUILDING_MARGIN;

    for (let i = 0; i < 80; i++) {
      let x = centerX;
      let z = centerZ;
      let rotation = 0;

      if (orientation === "vertical") {
        const side = Math.random() < 0.5 ? -1 : 1;
        x += side * offset;
        const span = Math.max(half, 2);
        z += (Math.random() * 2 - 1) * (span - 1);
        rotation = side > 0 ? -Math.PI / 2 : Math.PI / 2;
      } else {
        const side = Math.random() < 0.5 ? -1 : 1;
        z += side * offset;
        const span = Math.max(half, 2);
        x += (Math.random() * 2 - 1) * (span - 1);
        rotation = side > 0 ? Math.PI : 0;
      }

      if (
        !isPointNearRoad(x, z, radius + BUILDING_MARGIN * 0.5) &&
        isSpotFree(x, z, radius, obstacles)
      ) {
        return { x, z, rotation };
      }
    }

    const fallback = samplePropPosition(cx, cz, radius, obstacles);
    if (!fallback) return null;
    return {
      x: fallback.x,
      z: fallback.z,
      rotation: orientation === "horizontal" ? 0 : Math.PI / 2
    };
  }

  // add road meshes to this chunk
  function addRoadsToChunk(chunkGroup, cx, cz) {
    const centerX = cx * TILE_SIZE;
    const centerZ = cz * TILE_SIZE;

    // vertical N–S road
    if (hasVerticalRoad(cx)) {
      const geo = new THREE.PlaneGeometry(ROAD_WIDTH, TILE_SIZE + 0.1);
      const road = new THREE.Mesh(geo, roadMat);
      road.rotation.x = -Math.PI / 2;
      road.position.set(centerX, ROAD_Y, centerZ);
      road.receiveShadow = true;
      chunkGroup.add(road);
    }

    // horizontal E–W road
    if (hasHorizontalRoad(cz)) {
      const geo = new THREE.PlaneGeometry(TILE_SIZE + 0.1, ROAD_WIDTH);
      const road = new THREE.Mesh(geo, roadMat);
      road.rotation.x = -Math.PI / 2;
      road.position.set(centerX, ROAD_Y, centerZ);
      road.receiveShadow = true;
      chunkGroup.add(road);
    }
  }

  // ---- Add a prop clone to chunk and record obstacle ----
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

  // ---- Ground + roads + props for a chunk ----
  function createChunk(cx, cz) {
    const key = chunkKey(cx, cz);
    if (chunks.has(key)) return; // already exists

    const chunkGroup = new THREE.Group();
    chunkGroup.name = `Chunk_${key}`;
    worldRoot.add(chunkGroup);

    const obstacles = [];

    // 0) ground tile for this chunk
    {
      const groundGeo = new THREE.PlaneGeometry(TILE_SIZE, TILE_SIZE);
      const ground = new THREE.Mesh(groundGeo, groundMat);
      ground.rotation.x = -Math.PI / 2;
      ground.position.set(cx * TILE_SIZE, 0, cz * TILE_SIZE);
      ground.receiveShadow = true;
      chunkGroup.add(ground);
    }

    // 1) Roads on top
    addRoadsToChunk(chunkGroup, cx, cz);

    // 2) Buildings (off-road but aligned)
    for (let i = 0; i < BUILDINGS_PER_CHUNK; i++) {
      const template =
        buildingTemplates[Math.floor(Math.random() * buildingTemplates.length)];
      const palette =
        BUILDING_PALETTES[Math.floor(Math.random() * BUILDING_PALETTES.length)];
      const radius = (template.userData.baseRadius || 3) * 0.8;
      let spot = samplePropPosition(cx, cz, radius, obstacles);
      spot = adjustAwayFromRoad(cx, cz, spot, radius, obstacles);
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

    // 3) Rocks (off-road)
    for (let i = 0; i < ROCKS_PER_CHUNK; i++) {
      const rockTemplate =
        rockTemplates[Math.floor(Math.random() * rockTemplates.length)];
      const approxRadius =
        (rockTemplate.userData.baseRadius || 1) * 1.25;
      const spot = samplePropPosition(cx, cz, approxRadius, obstacles);
      if (!spot) continue;
      const { x, z } = spot;
      const ob = addCloneToChunk(
        chunkGroup,
        rockTemplate,
        x,
        z,
        { variationScale: 0.4 }
      );
      obstacles.push(ob);
    }

    // 4) Trees (off-road)
    for (let i = 0; i < TREES_PER_CHUNK; i++) {
      const approxRadius = (treeBase.userData.baseRadius || 1) * 1.2;
      const spot = samplePropPosition(cx, cz, approxRadius, obstacles);
      if (!spot) continue;
      const { x, z } = spot;
      const ob = addCloneToChunk(
        chunkGroup,
        treeBase,
        x,
        z,
        { variationScale: 0.3 }
      );
      obstacles.push(ob);
    }

    chunks.set(key, { group: chunkGroup, obstacles });
  }

  // ---- Maintain active chunks around the player ----
  function updateChunksAround(cx, cz) {
    // ensure all needed chunks exist
    for (let dx = -ACTIVE_RADIUS; dx <= ACTIVE_RADIUS; dx++) {
      for (let dz = -ACTIVE_RADIUS; dz <= ACTIVE_RADIUS; dz++) {
        createChunk(cx + dx, cz + dz);
      }
    }

    // remove chunks too far away
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
          if (obj.isMesh) {
            obj.geometry.dispose();
            if (Array.isArray(obj.material)) {
              obj.material.forEach((m) => m.dispose());
            } else {
              obj.material.dispose();
            }
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

  // ---- Public API ----
  return {
    update(x, z) {
      const cx = Math.floor(x / TILE_SIZE);
      const cz = Math.floor(z / TILE_SIZE);
      updateChunksAround(cx, cz);
    },
    getObstacles
  };
}
