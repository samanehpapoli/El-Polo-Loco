class Chicken extends MovableObject {
  x = 200 + Math.random() * 500;
  y = 355;
  w = 60;
  h = 60;

  IMAGES_WALK = [
    "assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  constructor() {
    super();
    this.loadImage("assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALK);
    this.animate();
    this.speed = 0.2 + Math.random() * 0.25;
  }


  // ChatGPT:
  // Diese Funktion bewegt das Objekt nach links und ändert alle 200 Millisekunden das Gehbild.
  animate() {
    this.moveLeft();
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALK);
    }, 1000 / 5);
  }
}
