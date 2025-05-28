class Chicken extends MovableObject {


  offset = {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  };

  world;

  energy = 100;

  constructor() {
    super();
    this.animate();
    this.move();
    this.speed = 0.2 + Math.random() * 0.25;
  }

  setWorld(world) {
    this.world = world;
    let maximumPosition = this.world.level.gameEndPosition - this.world.level.endboss.w;
    this.x = 500 + Math.random() * maximumPosition;
  }

  // ChatGPT:
  // Diese Funktion bewegt das Objekt nach links und ändert alle 200 Millisekunden das Gehbild.
  animate() {
    setInterval(() => {
      if (this.energy === 0) {
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
          this.w = 0;
          this.h = 0;
        }, 1500);
      } else {
        this.playAnimation(this.IMAGES_WALK);
      }
    }, 1000 / 6);
  }

  move() {
    setInterval(() => {
      if (this.energy > 0) {
        this.moveLeft();
      }
    }, 1000 / 60);
  }
}
