class Bottle extends DrawableObject {
  y = 360;
  w = 60;
  h = 60;
  world;

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

  setWorld(world) {
    this.world = world;
    let maximumPosition = this.world.level.gameEndPosition - this.world.level.endboss.w;
    this.x = 400 + Math.random() * maximumPosition;
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
