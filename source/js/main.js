import Tilt from './animation.js';
import Cursor from './cursor.js';

const tiltAnimation = new Tilt();
const customCursor = new Cursor();
const MIN_DESKTOP_WIDTH = 1150;

window.addEventListener(`DOMContentLoaded`, () => {
  if (window.innerWidth > MIN_DESKTOP_WIDTH) {
    tiltAnimation.init();
  }

  customCursor.init();
});
