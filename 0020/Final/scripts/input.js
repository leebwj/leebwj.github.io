export const keys = {};

export function setupInputListeners(target = window) {
  target.addEventListener("keydown", (event) => {
    keys[event.key.toLowerCase()] = true;
  });

  target.addEventListener("keyup", (event) => {
    keys[event.key.toLowerCase()] = false;
  });
}