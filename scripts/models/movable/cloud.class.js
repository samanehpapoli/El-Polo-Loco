class Cloud extends MovableObject {
  y = 30;
  w = 450;
  h = 350;
  speed = 0.15;

  IMAGES = ["assets/img/5_background/layers/4_clouds/1.png", "assets/img/5_background/layers/4_clouds/2.png"];

  constructor(x) {
    super();
    this.x = x;
    let randomImageIndex = Math.floor(Math.random() * 2);
    this.loadImage(this.IMAGES[randomImageIndex]);
    this.loadImages(this.IMAGES);
    this.move();
  }

  move() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}
