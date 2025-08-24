class Coin extends MovableObject {
  y = 140;
  w = 100;
  h = 100;

  offset = {
    right: 30,
    left: 30,
    top: 30,
    bottom: 30,
  };

  pick = false;

  IMAGES = ["assets/img/8_coin/coin_1.png", "assets/img/8_coin/coin_2.png"];

  COIN_PICKUP_SOUND;

  // Constructor: initialize coin with images, animation, and sounds
  constructor() {
    super();
    this.loadImage(this.IMAGES[0]);
    this.loadImages(this.IMAGES);
    this.animate();
    this.setSounds();
  }

  // Set the game world reference and random X position for the coin
  // @param {Object} world - The game world object
  setWorld(world) {
    this.world = world;
    let maximumPosition = this.world.level.gameEndPosition - this.world.level.endboss.w;
    this.x = 400 + Math.random() * maximumPosition;
  }

  // Initialize the coin pickup sound
  setSounds() {
    this.COIN_PICKUP_SOUND = new Audio("assets/sounds/coin-pickup.mp3");
    this.COIN_PICKUP_SOUND.volume = 0.1;
  }

  // Animate the coin by looping through its images
  animate() {
    this.intervals.push(
      setInterval(() => {
        this.playAnimation(this.IMAGES);
      }, 1000 / 5)
    );
  }

  // Play the coin pickup sound if the game is not muted
  playPickupSound() {
    if (this.world.isMute === false) {
      this.COIN_PICKUP_SOUND.play();
    }
  }

  // Handle coin being picked: mark as picked, play sound, and animate disappearance
  coinIsPick() {
    this.pick = true;
    this.playPickupSound();
    this.intervals.push(
      setInterval(() => {
        if (this.w > 0) {
          this.y--;
          this.w--;
          this.h--;
        }
      }, 0.5)
    );
  }

  // Check if the coin has not been picked yet
  // @return {boolean} true if coin is not picked
  checkCoinIsNotPicked() {
    return this.pick === false;
  }
}
