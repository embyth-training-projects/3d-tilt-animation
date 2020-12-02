import Tilt from './animation.js';

const tiltAnimation = new Tilt();
const MIN_DESKTOP_WIDTH = 1150;

window.addEventListener(`DOMContentLoaded`, () => {
  if (window.innerWidth > MIN_DESKTOP_WIDTH) {
    tiltAnimation.init();
  }
});
