class Endboss extends MovableObject {
  y = 90;
  w = 300;
  h = 350;
  energy = 100;
  speed = 2;
  energyToRemove = 0;
  moving = false;
  lastAttack;
  movingDirection = "left";

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

  IMAGES_ATTACK = [
    "  assets/img/4_enemie_boss_chicken/3_attack/G13.png",
    "  assets/img/4_enemie_boss_chicken/3_attack/G14.png",
    "  assets/img/4_enemie_boss_chicken/3_attack/G15.png",
    "  assets/img/4_enemie_boss_chicken/3_attack/G16.png",
    "  assets/img/4_enemie_boss_chicken/3_attack/G17.png",
    "  assets/img/4_enemie_boss_chicken/3_attack/G18.png",
    "  assets/img/4_enemie_boss_chicken/3_attack/G19.png",
    "  assets/img/4_enemie_boss_chicken/3_attack/G20.png",
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

  // Constructor: initialize the endboss with images, animation, and movement
  constructor() {
    super();
    this.loadImage(this.IMAGES_ALERT[0]);
    this.loadAllImages();
    this.animate();
    this.move();
  }

  // Preload all relevant images for the endboss
  loadAllImages() {
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
  }

  // Set the game world reference and initial position
  // @param {Object} world - The game world object
  setWorld(world) {
    this.world = world;
    this.x = this.world.level.gameEndPosition + 300;
    this.energyToRemove = 100 / (this.world.level.bottles.length - 2);
  }

  // Check if the endboss is currently moving
  // @return {boolean} true if moving
  isMoving() {
    return this.moving;
  }

  // Record the time of the last attack
  attack() {
    this.lastAttack = new Date().getTime();
  }

  // Check if the endboss is attacking within the last 1 second
  // @return {boolean} true if attacking
  isAttacking() {
    let timePassed = new Date().getTime() - this.lastAttack; //In miliseconds
    timePassed = timePassed / 1000; //In seconds
    return timePassed < 1;
  }

  // Check if the endboss is dead and trigger game win after delay
  checkEndBossIsDead() {
    if (this.isDead()) {
      setTimeout(() => {
        this.world.gameWin = true;
      }, 2000);
    }
  }

  // Play the dead animation and stop movement
  playDeadAnimation() {
    this.playAnimation(this.IMAGES_DEAD);
    this.moving = false;
    this.y += 40;
  }

  // Play the hurt animation and temporarily stop movement
  playHurtAnimation() {
    this.moving = false;
    this.playAnimation(this.IMAGES_HURT);
    setInterval(() => {
      this.moving = true;
    }, 500);
  }

  // Play the attack animation and temporarily stop movement
  playAttackAnimation() {
    this.moving = false;
    this.playAnimation(this.IMAGES_ATTACK);
    setInterval(() => {
      this.moving = true;
    }, 1000);
  }

  // Animate the endboss based on its state
  animate() {
    this.intervals.push(
      setInterval(() => {
        switch (true) {
          case this.isDead():
            this.playDeadAnimation();
            break;
          case this.isHurt():
            this.playHurtAnimation();
            break;
          case this.isAttacking():
            this.playAttackAnimation();
            break;
          case this.isMoving():
            this.playAnimation(this.IMAGES_WALK);
            break;
          default:
            this.playAnimation(this.IMAGES_ALERT);
            break;
        }
      }, 1000 / 6)
    );
  }

  // Decide if the endboss should move left towards the player
  checkShouldMoveLeft() {
    if (this.world.character.x + this.world.character.w < this.x) {
      this.movingDirection = "left";
    }
  }

  // Decide if the endboss should move right towards the player
  checkShouldMoveRight() {
    if (this.x + this.w < this.world.character.x) {
      this.movingDirection = "right";
    }
  }

  // Move the endboss in the determined direction
  handleMovingRightOrLeft() {
    if (this.movingDirection === "right") {
      this.moveRight();
      this.otherDirection = true;
    } else {
      this.moveLeft();
      this.otherDirection = false;
    }
  }

  // Start movement loop for the endboss
  move() {
    this.intervals.push(
      setInterval(() => {
        if (this.isMoving()) {
          this.checkShouldMoveLeft();
          this.checkShouldMoveRight();
          this.handleMovingRightOrLeft();
        }
      }, 1000 / 60)
    );
  }

  // Clear all active intervals and reset interval array
  clearAllInterval() {
    this.intervals.forEach((id) => clearInterval(id));
    this.intervals = [];
  }
}
