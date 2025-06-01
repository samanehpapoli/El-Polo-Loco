class Character extends MovableObject {
  x = 100;
  y = 100;
  w = 130;
  h = 220;
  world;
  speed = 8;
  energy = 100;
  coins = 0;
  bottles = 0;
  canThrowBottle = true;
  coinsToAdded = 0;
  bottlesToAdded = 0;
  energyToRemove = 5;
  reachedToDangerArea = false;

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
    this.coinsToAdded = 100 / this.world.level.coins.length;
    this.bottlesToAdded = 100 / this.world.level.bottles.length;
  }

  getCoin() {
    this.coins += this.coinsToAdded;
  }

  getBottle() {
    this.bottles += this.bottlesToAdded;
  }

  isMoving() {
    return this.world.keyboard.RIGHT === true || this.world.keyboard.LEFT === true;
  }

  isKillEnemy(mo) {
    const horizontalOverlap =
      this.x + this.w - this.offset.right > mo.x + mo.offset.left && this.x + this.offset.left < mo.x + mo.w - mo.offset.right;
    const heightDifferent = mo.y + mo.h - mo.offset.bottom - (this.y + this.h - this.offset.bottom);
    const isPushing = heightDifferent < 60 && heightDifferent > 30;
    return horizontalOverlap && isPushing && !this.world.keyboard.SPACE && mo.energy > 0;
  }

  reachToDangerArea() {
    if (this.x > this.world.level.gameDangerArea && !this.reachedToDangerArea ) {
      this.reachedToDangerArea = true;
      this.world.level.endboss.moving = true;
    }
  }

  // Spielt die passende Animation basierend auf Tasteneingabe und Position
  animate() {
    setInterval(() => {
      switch (true) {
        case this.isDead():
          this.playAnimation(this.IMAGES_DEAD, true);
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

      if (this.world.keyboard.ENTER === true && this.bottles > 0 && this.canThrowBottle) {
        this.canThrowBottle = false;
        const throwableObject = new ThrowableObject();
        throwableObject.throw(this.x + 50);
        this.world.level.throwableObjects.push(throwableObject);
        this.bottles -= this.bottlesToAdded;
        this.world.level.bottleStatusBar.setPersentage(this.bottles);
        setTimeout(() => {
          this.canThrowBottle = true;
        }, 1000);
      }

      if (this.isDead()) {
        setTimeout(() => {
          this.y += 10;
        }, 1000);
      }

      this.world.camera = -this.x + 100;
    }, 1000 / 60);
  }

  checkKillEnemy() {
    for (const enemy of this.world.level.enemies) {
      if (this.isKillEnemy(enemy)) {
        enemy.energy = 0;
      }
    }
  }
}
