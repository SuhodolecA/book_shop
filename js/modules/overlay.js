import { createElement } from "./helperFunctions.js";

const createOverlay = () => {
  const overlay = createElement("div");
  overlay.classList.add("overlay");
  overlay.classList.add("hide");

  return overlay;
};

export { createOverlay };
