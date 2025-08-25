/**
 * Class representing a small enemy chicken (Chick).
 * Extends Chicken.
 */
class Chick extends Chicken {
  /** Y position of the chick */
  y = 385;
  /** Width of the chick */
  w = 30;
  /** Height of the chick */
  h = 30;

  /** Walking animation images */
  IMAGES_WALK = [
    "assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  /** Dead animation image */
  IMAGES_DEAD = ["assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png"];

  /** Sound effect for death */
  DEAD_SOUND;

  /**
   * Create a Chick instance.
   * Initializes images, animations, and sounds.
   */
  constructor() {
    super();
    this.loadImage(this.IMAGES_WALK[0]);
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_DEAD);
    this.setSounds();
  }

  /**
   * Load and configure the sound effect for the chick's death.
   * @returns {void}
   */
  setSounds() {
    this.DEAD_SOUND = new Audio("assets/sounds/chick-squeak.ogg");
    this.DEAD_SOUND.volume = 0.1;
    this.DEAD_SOUND.currentTime = 0.5;
  }
}
