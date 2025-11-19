// input.js
// Simple global keys map + setup function

export const keys = {};

export function setupInputListeners(target = window) {
  target.addEventListener("keydown", (e) => {
    keys[e.key.toLowerCase()] = true;
  });

  target.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
  });
}
