class Chicken extends MovableObject {
  offset = {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  };

  energy = 100;
  DEAD_SOUND;

  // Constructor: initializes the enemy with animation, movement, and random speed
  constructor() {
    super();
    this.animate();
    this.move();
    this.speed = 0.2 + Math.random() * 0.25;
  }

  // Set the game world reference and random X position for the enemy
  // @param {Object} world - The game world object
  setWorld(world) {
    this.world = world;
    let maximumPosition = this.world.level.gameEndPosition - this.world.level.endboss.w;
    this.x = 500 + Math.random() * maximumPosition;
  }

  // Play the dead sound if it exists and the game is not muted
  playDeadSound() {
    if (this.DEAD_SOUND && this.world.isMute === false) {
      this.DEAD_SOUND.play();
    }
  }

  // Play the dead animation and remove the enemy after 1.5 seconds
  playDeadAnimation() {
    this.playAnimation(this.IMAGES_DEAD);
    setTimeout(() => {
      this.w = 0;
      this.h = 0;
    }, 1500);
  }

  // Animate the enemy based on its energy (walk or dead)
  animate() {
    this.intervals.push(
      setInterval(() => {
        if (this.energy === 0) {
          this.playDeadAnimation();
        } else {
          this.playAnimation(this.IMAGES_WALK);
        }
      }, 1000 / 6)
    );
  }

  // Move the enemy left if it still has energy
  move() {
    this.intervals.push(
      setInterval(() => {
        if (this.energy > 0) {
          this.moveLeft();
        }
      }, 1000 / 60)
    );
  }
}
