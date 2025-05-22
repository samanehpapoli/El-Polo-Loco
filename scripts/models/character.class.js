class Character extends MovableObject {
  x = 100;
  y = 100;
  w = 130;
  h = 220;
  world;
  speed = 8;
  speedY = 0;
  acceleration = 2;

  offset = {
    right: 20,
    left: 20,
    top: 70,
    bottom: 10,
  }

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

  IMAGES_JUMP = [
    "assets/img/2_character_pepe/3_jump/J-31.png",
    "assets/img/2_character_pepe/3_jump/J-32.png",
    "assets/img/2_character_pepe/3_jump/J-33.png",
    "assets/img/2_character_pepe/3_jump/J-34.png",
    "assets/img/2_character_pepe/3_jump/J-35.png",
    "assets/img/2_character_pepe/3_jump/J-36.png",
    "assets/img/2_character_pepe/3_jump/J-37.png",
    "assets/img/2_character_pepe/3_jump/J-38.png",
    "assets/img/2_character_pepe/3_jump/J-39.png",
  ];

  constructor() {
    super();
    this.loadImage(this.IMAGES_IDLE[0]);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_JUMP);
    this.animate();
    this.move();
    this.applyGravity();
  }

  setWorld(world) {
    this.world = world;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 200;
  }

  // Spielt die passende Animation basierend auf Tasteneingabe und Position
  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT === true || this.world.keyboard.LEFT === true) {
        this.playAnimation(this.IMAGES_WALK);
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMP);
      } else {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 1000 / 10);
  }

  move() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT === true && this.x < this.world.level.gameEndPosition) {
        this.moveRight();
        this.otherDirection = false;
      }

      if (this.world.keyboard.LEFT === true && this.x > this.world.level.gameStartPosition) {
        this.moveLeft();
        this.otherDirection = true;
      }

      if (this.world.keyboard.SPACE === true && !this.isAboveGround()) {
        this.jump();
      }

      this.world.camera = -this.x + 100;
    }, 1000 / 60);
  }
}
