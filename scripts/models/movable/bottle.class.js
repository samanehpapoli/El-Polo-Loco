class Bottle extends MovableObject {
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

  BOTTLE_PICKUP_SOUND;

  // Constructor: initializes images, sounds, and sets up the object
  constructor() {
    super();
    let imageIndex = this.getRandomImageIndex(2);
    this.loadImage(this.IMAGES[imageIndex]);
    this.loadImages(this.IMAGES);
    this.setSounds();
  }

  // Set up the sound effects for the bottle
  setSounds() {
    this.BOTTLE_PICKUP_SOUND = new Audio("assets/sounds/bottle-pickup.mp3");
    this.BOTTLE_PICKUP_SOUND.volume = 0.1;
  }

  // Assign the world reference and set a random X position
  setWorld(world) {
    this.world = world;
    let maximumPosition = this.world.level.gameEndPosition - this.world.level.endboss.w;
    this.x = 400 + Math.random() * maximumPosition;
  }

  // Play the pickup sound if the game is not muted
  playPickupSound() {
    if (this.world.isMute === false) {
      this.BOTTLE_PICKUP_SOUND.play();
    }
  }

  // Mark the bottle as picked and start its pickup animation
  bottleIsPick() {
    this.pick = true;
    this.playPickupSound();

    this.intervals.push(
      setInterval(() => {
        this.y -= 2;
        setTimeout(() => {
          this.w = 0;
          this.h = 0;
        }, 70);
      }, 1)
    );
  }

  // Check if the bottle has not been picked up yet
  checkBottleIsNotPicked() {
    return this.pick === false;
  }
}
