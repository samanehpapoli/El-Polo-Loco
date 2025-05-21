class Character extends MovableObject {
  x = 100;
  y = 200;
  w = 130;
  h = 220;
  world;
  speed = 8;

  IMAGES_IDLE = [
    "assets/img/2_character_pepe/1_idle/idle/I-1.png",
    "assets/img/2_character_pepe/1_idle/idle/I-2.png",
    "assets/img/2_character_pepe/1_idle/idle/I-3.png",
    "assets/img/2_character_pepe/1_idle/idle/I-4.png",
    "assets/img/2_character_pepe/1_idle/idle/I-5.png",
    "assets/img/2_character_pepe/1_idle/idle/I-6.png",
    "assets/img/2_character_pepe/1_idle/idle/I-7.png",
    "assets/img/2_character_pepe/1_idle/idle/I-8.png",
    "assets/img/2_character_pepe/1_idle/idle/I-9.png",
    "assets/img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  IMAGES_WALK = [
    "assets/img/2_character_pepe/2_walk/W-21.png",
    "assets/img/2_character_pepe/2_walk/W-22.png",
    "assets/img/2_character_pepe/2_walk/W-23.png",
    "assets/img/2_character_pepe/2_walk/W-24.png",
    "assets/img/2_character_pepe/2_walk/W-25.png",
    "assets/img/2_character_pepe/2_walk/W-26.png",
  ];

  constructor() {
    super();
    this.loadImage("assets/img/2_character_pepe/1_idle/idle/I-1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_WALK);
    this.animate();
    this.move();
  }

  setWorld(world) {
    this.world = world;
  }

  // Diese Funktion wechselt das Bild je nach Tasteneingabe zwischen Stand- und Geh-Animation alle 100 ms.
  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT === true || this.world.keyboard.LEFT === true) {
        this.playAnimation(this.IMAGES_WALK);
      } else {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 1000 / 10);
  }

  move() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT === true && this.x < this.world.level.gameEndPosition) {
        this.x += this.speed;
        this.otherDirection = false;
      }

      if (this.world.keyboard.LEFT === true && this.x > this.world.level.gameStartPosition) {
        this.x -= this.speed;
        this.otherDirection = true;
      }

      this.world.camera = -this.x + 100;
    }, 1000 / 60);
  }
}
