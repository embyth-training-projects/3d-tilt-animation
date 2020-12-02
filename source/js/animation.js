import {gsap} from 'gsap';

export default class Tilt {
  constructor() {
    this._clientX = null;
    this._clientY = null;

    this._mouseMoveHandler = this._mouseMoveHandler.bind(this);
    this._updateRequestAnimation = this._updateRequestAnimation.bind(this);
    this._handleCardAppearance = this._handleCardAppearance.bind(this);
  }

  init() {
    document.body.addEventListener(`mousemove`, this._mouseMoveHandler);
    this._handleCardAppearance();
  }

  _mouseMoveHandler(evt) {
    this._clientX = evt.pageX;
    this._clientY = evt.pageY;

    window.requestAnimationFrame(this._updateRequestAnimation);
  }

  _updateRequestAnimation() {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = this._clientX - cx;
    const dy = this._clientY - cy;
    const tiltX = dy / cy;
    const tiltY = dx / cx;
    const radius = Math.sqrt(Math.pow(tiltX, 2) + Math.pow(tiltY, 2));
    const degree = radius * 18;
    gsap.to(`.page-header__content`, 1, {
      transform: `rotate3d(${tiltX}, ${tiltY}, 0, ${degree}deg)`
    });
  }

  _handleCardAppearance() {
    gsap.to(`.card--animation`, {zoom: 1});
    gsap.to(`.card-layer--top`, {opacity: 1, duration: 0.1});
    gsap.to(`.card-layer--between`, {top: 10, left: -10, opacity: 1, duration: 0.25, delay: 0.25});
    gsap.to(`.card-layer--bottom`, {top: 20, left: -20, opacity: 1, duration: 0.25, delay: 0.25});
    gsap.to(`.card-map`, {opacity: 0.07, duration: 0.1});
    gsap.to(`.card-logo`, {opacity: 1, duration: 0.225});
    gsap.to(`.card-chip`, {opacity: 1, duration: 0.225});
    gsap.to(`.card-holder`, {zoom: 1, opacity: 1, duration: 0.1, delay: 0.25});
    gsap.to(`.card-date`, {opacity: 1, zoom: 1, duration: 0.1, delay: 0.25});
  }
}
