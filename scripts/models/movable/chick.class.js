class Chick extends Chicken {
  y = 385;
  w = 30;
  h = 30;
  IMAGES_WALK = [
    "assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png"];

  constructor() {
    super();
    this.loadImage(this.IMAGES_WALK[0]);
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_DEAD);
  }
}
