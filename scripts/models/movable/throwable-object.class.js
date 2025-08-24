class ThrowableObject extends MovableObject {
  x = 400;
  y = 330;
  w = 60;
  h = 60;

  offset = {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  };

  isSplash = false;

  IMAGES_ROTATE = [
    "assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  IMAGES_SPLASH = [
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  // Constructor: initialize the throwable object with rotation and splash images, and start animation
  constructor() {
    super();
    this.loadImage(this.IMAGES_ROTATE[0]);
    this.loadImages(this.IMAGES_ROTATE);
    this.loadImages(this.IMAGES_SPLASH);
    this.animate();
  }

  // Set the game world reference
  // @param {Object} world - The game world object
  setWorld(world) {
    this.world = world;
  }


  // Animate the throwable object (rotate or splash based on state)
  animate() {
    this.intervals.push(
      setInterval(() => {
        if (this.isSplash) {
          this.playAnimation(this.IMAGES_SPLASH);
        } else {
          this.playAnimation(this.IMAGES_ROTATE);
        }
      }, 1000 / 20)
    );
  }

  // Throw the object from a specific X position and apply gravity
  // @param {number} x - Starting X position of the throw
  throw(x) {
    this.x = x;
    this.speedY = 30;
    this.applyGravity();
    this.intervals.push(
      setInterval(() => {
        if (this.isSplash === false) {
          if (this.world.level.endboss.movingDirection === "left") {
            this.x += 6;
          } else {
            this.x -= 6;
          }
        }
      }, 20)
    );
  }

  // Trigger the splash animation
  splash() {
    this.isSplash = true;
  }
}
