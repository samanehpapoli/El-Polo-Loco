class Endboss extends MovableObject {
  y = 90;
  w = 300;
  h = 350;
  world;
  energy = 100;
  energyToRemove = 0;
  moving = false;

  offset = {
    right: 60,
    left: 60,
    top: 40,
    bottom: 0,
  };

  IMAGES_ALERT = [
    "assets/img/4_enemie_boss_chicken/2_alert/G5.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G6.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G7.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G8.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G9.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G10.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G11.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  IMAGES_HURT = [
    "assets/img/4_enemie_boss_chicken/4_hurt/G21.png",
    "assets/img/4_enemie_boss_chicken/4_hurt/G22.png",
    "assets/img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  IMAGES_DEAD = [
    "assets/img/4_enemie_boss_chicken/5_dead/G24.png",
    "assets/img/4_enemie_boss_chicken/5_dead/G25.png",
    "assets/img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  IMAGES_WALK = [
    "assets/img/4_enemie_boss_chicken/1_walk/G1.png",
    "assets/img/4_enemie_boss_chicken/1_walk/G2.png",
    "assets/img/4_enemie_boss_chicken/1_walk/G3.png",
    "assets/img/4_enemie_boss_chicken/1_walk/G4.png",
  ];
  constructor() {
    super();
    this.loadImage(this.IMAGES_ALERT[0]);
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
    this.move();
  }

  setWorld(world) {
    this.world = world;
    this.x = this.world.level.gameEndPosition + 300;
    this.energyToRemove = 100 / (this.world.level.bottles.length - 2);
  }

  isMoving() {
    return this.moving;
  }

  animate() {
    setInterval(() => {
      switch (true) {
        case this.isDead():
          this.playAnimation(this.IMAGES_DEAD);
          this.moving = false;
          this.y += 40;
          break;

        case this.isHurt():
          this.moving = false;
          this.playAnimation(this.IMAGES_HURT);
          setInterval(() => {
            this.moving = true;
          }, 500);
          break;

        case this.isMoving():
          this.playAnimation(this.IMAGES_WALK);
          break;

        default:
          this.playAnimation(this.IMAGES_ALERT);
          break;
      }
    }, 1000 / 6);
  }
  move() {
    setInterval(() => {
      if (this.isMoving()) {
        if (this.world.character.x - (this.x + this.w)>200) {
          this.moveRight();
          this.otherDirection = false;
        } else {
          this.moveLeft();
           this.otherDirection = false;
        }
      }
    }, 1000 / 60);
  }
}
