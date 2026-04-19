export function resolveVsObstacles(state, radius, obstacles) {
  if (!obstacles || !obstacles.length) return;

  for (const ob of obstacles) {
    const dx = state.x - ob.x;
    const dz = state.z - ob.z;
    const sumR = radius + ob.radius;
    const distSq = dx * dx + dz * dz;

    if (distSq <= 1e-6 || distSq >= sumR * sumR) continue;

    const dist = Math.sqrt(distSq);
    const penetration = sumR - dist;
    const nx = dx / dist;
    const nz = dz / dist;

    state.x += nx * penetration;
    state.z += nz * penetration;

    const alignment = Math.sin(state.angle) * nx + Math.cos(state.angle) * nz;
    if (alignment > 0) state.speed -= alignment * state.speed * 1.1;
    state.speed *= 0.9;
  }
}

export function circleOverlap(ax, az, ar, bx, bz, br) {
  const dx = ax - bx;
  const dz = az - bz;
  const r = ar + br;
  return dx * dx + dz * dz < r * r;
}
