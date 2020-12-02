import {gsap} from 'gsap';

export default class Cursor {
  constructor() {
    this._cursor = document.querySelector(`.cursor`);
    this._aura = document.querySelector(`.aura`);
    this._links = document.querySelectorAll(`a`);

    this._auraDelayer = 5;

    this._mouseX = 0;
    this._mouseY = 0;
    this._posX = 0;
    this._posY = 0;

    this._mouseMoveHandler = this._mouseMoveHandler.bind(this);
    this._onAnimationRepeat = this._onAnimationRepeat.bind(this);
    this._hideCursor = this._hideCursor.bind(this);
    this._showCursor = this._showCursor.bind(this);
    this._handleLinksMouseOver = this._handleLinksMouseOver.bind(this);
    this._handleLinksMouseOut = this._handleLinksMouseOut.bind(this);
  }

  init() {
    document.body.addEventListener(`mousemove`, this._mouseMoveHandler);
    document.body.addEventListener(`mouseout`, this._hideCursor);

    gsap.to({}, {
      repeat: -1,
      duration: 0.01,
      onRepeat: this._onAnimationRepeat
    });

    this._links.forEach((link) => {
      link.addEventListener(`mouseover`, this._handleLinksMouseOver);
      link.addEventListener(`mouseout`, this._handleLinksMouseOut);
    });
  }

  _mouseMoveHandler(evt) {
    this._mouseX = evt.pageX;
    this._mouseY = evt.pageY;

    this._showCursor();
  }

  _onAnimationRepeat() {
    this._posX += (this._mouseX - this._posX) / this._auraDelayer;
    this._posY += (this._mouseY - this._posY) / this._auraDelayer;

    gsap.set(this._cursor, {
      css: {
        top: this._mouseY,
        left: this._mouseX,
      }
    });

    gsap.set(this._aura, {
      css: {
        top: this._posY - 19,
        left: this._posX - 19,
      }
    });
  }

  _hideCursor() {
    this._cursor.classList.add(`hidden`);
    this._aura.classList.add(`hidden`);
  }

  _showCursor() {
    this._cursor.classList.remove(`hidden`);
    this._aura.classList.remove(`hidden`);
  }

  _handleLinksMouseOver() {
    this._cursor.classList.add(`active`);
    this._aura.classList.add(`active`);
  }

  _handleLinksMouseOut() {
    this._cursor.classList.remove(`active`);
    this._aura.classList.remove(`active`);
  }
}
