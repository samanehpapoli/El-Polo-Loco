class Chicken extends MovableObject{
     constructor() {
    super();
   const randomInt = 200 + Math.random()*500;
    this.x = randomInt;
    this.y = 340;
    this.w = 50;
    this.h = 80;

    this.loadImage("assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");

  }
}