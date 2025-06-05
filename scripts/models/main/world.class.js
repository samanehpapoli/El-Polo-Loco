class World {
  ctx;
  canvas;
  camera = 0;
  keyboard;
  character = new Character();
  level = level1;
  intervals = [];

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.ctx = this.canvas.getContext("2d");
    this.setWorld();
    this.draw();
    this.checkCollisions();
    this.gameInterval();
  }

  setWorld() {
    this.character.setWorld(this);
    this.level.endboss.setWorld(this);
    for (const enemy of this.level.enemies) {
      enemy.setWorld(this);
    }
    for (const bottle of this.level.bottles) {
      bottle.setWorld(this);
    }
    for (const coin of this.level.coins) {
      coin.setWorld(this);
    }
    for (const cloud of this.level.clouds) {
      cloud.setWorld(this);
    }
  }

  checkCollisions() {
    this.intervals.push(
      setInterval(() => {
        if (this.character.isColliding(this.level.endboss) && this.level.endboss.energy > 0 && !this.character.isDead()) {
          this.character.hit();
          this.level.endboss.attack();
          this.level.healthStatusBar.setPersentage(this.character.energy);
        }

        for (const enemy of this.level.enemies) {
          if (this.character.isColliding(enemy) && enemy.energy > 0 && !this.character.isDead()) {
            this.character.hit();
            this.level.healthStatusBar.setPersentage(this.character.energy);
          }
        }

        for (const coin of this.level.coins) {
          if (this.character.isColliding(coin) && coin.checkCoinIsNotPicked()) {
            this.character.getCoin();
            coin.coinIsPick();
            this.level.coinStatusBar.setPersentage(this.character.coins);
          }
        }

        for (const bottle of this.level.bottles) {
          if (this.character.isColliding(bottle) && bottle.checkBottleIsNotPicked()) {
            this.character.getBottle();
            bottle.bottleIsPick();
            this.level.bottleStatusBar.setPersentage(this.character.bottles);
          }
        }

        for (const throwableObject of this.level.throwableObjects) {
          if (this.level.endboss.isColliding(throwableObject) && throwableObject.isSplash === false) {
            throwableObject.splash();
            this.level.endboss.hit();
            this.level.endbossStatusBar.setPersentage(this.level.endboss.energy);
          }
        }
      }, 200)
    );
  }

  gameInterval() {
    this.intervals.push(
      setInterval(() => {
        this.character.checkKillEnemy();
        this.character.reachToDangerArea();
      }, 10)
    );
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera, 0);

    this.addMultipleObjectToMap(this.level.backgrounds);

    // Coins
    this.addMultipleObjectToMap(this.level.coins);

    // Bottle
    this.addMultipleObjectToMap(this.level.bottles);

    this.addMultipleObjectToMap(this.level.enemies);
    this.addMultipleObjectToMap(this.level.clouds);
    this.addToMap(this.level.endboss);
    this.addToMap(this.character);

    // Throwable
    this.addMultipleObjectToMap(this.level.throwableObjects);

    //  status bars
    this.addToMap(this.level.healthStatusBar);
    this.addToMap(this.level.coinStatusBar);
    this.addToMap(this.level.bottleStatusBar);
    this.addToMap(this.level.endbossStatusBar);

    this.ctx.translate(-this.camera, 0);

    requestAnimationFrame(() => {
      this.draw();
    });
  }

  addMultipleObjectToMap(objects) {
    for (const object of objects) {
      this.addToMap(object);
    }
  }

  addToMap(mo) {
    if (mo.fixInContext === true) {
      this.ctx.translate(-this.camera, 0);
    }

    this.flipImage(mo);
    mo.drawImage(this.ctx);
    // mo.drawFrame(this.ctx);
    // mo.drawFrameOffset(this.ctx);
    this.flipImageBack(mo);

    if (mo.fixInContext === true) {
      this.ctx.translate(this.camera, 0);
    }
  }

  flipImage(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.w, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }
  }

  flipImageBack(mo) {
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }
}
