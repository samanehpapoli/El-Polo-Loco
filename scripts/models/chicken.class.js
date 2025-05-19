class Chicken extends MovableObject {
  x = 200 + Math.random() * 500;
  y = 355;
  w = 40;
  h = 60;

  constructor() {
    super();
    this.loadImage("assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
  }
}
