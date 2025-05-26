class World {
  ctx;
  canvas;
  camera = 0;
  keyboard;
  character = new Character();
  level = level1;

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.ctx = this.canvas.getContext("2d");
    this.setWorld();
    this.draw();
    this.checkCollisions();
  }

  setWorld() {
    this.character.setWorld(this);
    this.level.endboss.setWorld(this);
  }

  checkCollisions() {
    setInterval(() => {
      for (const enemy of this.level.enemies) {
        if (this.character.isColliding(enemy)) {
          this.character.hit();
          this.level.healthStatusBars.setPersentage(this.character.energy);
        }
      }

      for (const coin of this.level.coins) {
        if (this.character.isColliding(coin) && coin.checkCoinIsNotPicked()) {
          this.character.getCoin();
          coin.coinIsPick();
          this.level.coinStatusBars.setPersentage(this.character.coins);
        }
      }
    }, 200);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera, 0);

    this.addMultipleObjectToMap(this.level.backgrounds);
    this.addToMap(this.character);
    this.addToMap(this.level.endboss);
    this.addMultipleObjectToMap(this.level.enemies);
    this.addMultipleObjectToMap(this.level.clouds);

    // Coins
    this.addMultipleObjectToMap(this.level.coins);

    //  status bars

    this.addToMap(this.level.healthStatusBars);
    this.addToMap(this.level.coinStatusBars);
   
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
    mo.drawFrame(this.ctx);
    mo.drawFrameOffset(this.ctx);
    this.flipImageBack(mo);

    if (mo.fixInContext === true) {
       this.ctx.translate(this.camera, 0);;
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
