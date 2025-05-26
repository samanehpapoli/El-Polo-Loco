class Bottle extends DrawableObject {
  x = 400 + Math.random() * 1200;
  y = 360;
  w = 60;
  h = 60;

  offset = {
    right: 20,
    left: 30,
    top: 0,
    bottom: 0,
  };

  pick = false;

  IMAGES = ["assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", "assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png"];

  constructor() {
    super();
    let randomImageIndex = Math.floor(Math.random() * 2);
    this.loadImage(this.IMAGES[0]);
    this.loadImages(this.IMAGES);
  }

  bottleIsPick() {
    this.pick = true;
    setInterval(() => {
      this.y -= 2;
      setTimeout(() => {
        this.w = 0;
        this.h = 0;
      }, 70);
    }, 1);
  }

  checkBottleIsNotPicked() {
    return this.pick === false;
  }
}
