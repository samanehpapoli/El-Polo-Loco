class Background extends DrawableObject {
  w = 720;
  h = 480;
  y = 0;

  // Constructor: initialize the background object with an image and X position
  // @param {string} path - Path to the background image
  // @param {number} positionX - Initial X position
  constructor(path, positionX) {
    super();
    this.x = positionX;
    this.loadImage(path);
  }
}
