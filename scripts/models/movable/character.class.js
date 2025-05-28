class Character extends MovableObject {
  x = 100;
  y = 100;
  w = 130;
  h = 220;
  world;
  speed = 8;
  speedY = 0;
  acceleration = 2;
  energy = 100;
  coins = 0;
  bottles = 0;
  lastHit;

  offset = {
    right: 20,
    left: 20,
    top: 70,
    bottom: 10,
  };

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

  IMAGES_HURT = [
    "assets/img/2_character_pepe/4_hurt/H-41.png",
    "assets/img/2_character_pepe/4_hurt/H-42.png",
    "assets/img/2_character_pepe/4_hurt/H-43.png",
  ];

  IMAGES_DEAD = [
    "assets/img/2_character_pepe/5_dead/D-51.png",
    "assets/img/2_character_pepe/5_dead/D-52.png",
    "assets/img/2_character_pepe/5_dead/D-53.png",
    "assets/img/2_character_pepe/5_dead/D-54.png",
    "assets/img/2_character_pepe/5_dead/D-55.png",
    "assets/img/2_character_pepe/5_dead/D-56.png",
    "assets/img/2_character_pepe/5_dead/D-57.png",
  ];

  constructor() {
    super();
    this.loadImage(this.IMAGES_IDLE[0]);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_JUMP);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
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

  getCoin(coinsToAdded) {
    this.coins += coinsToAdded;
  }

  getBottle(bottlesToAdded) {
    this.bottles += bottlesToAdded;
  }

  isAboveGround() {
    return this.y < 200;
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit; //In miliseconds
    timePassed = timePassed / 1000; //In seconds
    return timePassed < 1;
  }

  isDead() {
    return this.energy === 0;
  }

  isMoving() {
    return this.world.keyboard.RIGHT === true || this.world.keyboard.LEFT === true;
  }

  // Spielt die passende Animation basierend auf Tasteneingabe und Position
  animate() {
    setInterval(() => {
      switch (true) {
        case this.isDead():
          this.playAnimation(this.IMAGES_DEAD);
          break;
        case this.isHurt():
          this.playAnimation(this.IMAGES_HURT);
          break;
        case this.isAboveGround():
          this.playAnimation(this.IMAGES_JUMP);
          break;
        case this.isMoving():
          this.playAnimation(this.IMAGES_WALK);
          break;
        default:
          this.playAnimation(this.IMAGES_IDLE);
          break;
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
