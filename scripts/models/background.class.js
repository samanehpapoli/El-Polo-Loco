class Background extends MovableObject {
  constructor(path) {
    super();
    this.x = 0;
    this.y = 0;
    this.w = 720;
    this.h = 480;
    this.loadImage(path);
  }
}
