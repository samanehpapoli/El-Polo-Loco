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
  }

  setWorld() {
    this.character.setWorld(this);
    this.level.endboss.setWorld(this);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera, 0);
    this.addMultipleObjectToMap(this.level.backgrounds);
    this.addToMap(this.character);
    this.addToMap(this.level.endboss);
    this.addMultipleObjectToMap(this.level.enemies);
    this.addMultipleObjectToMap(this.level.clouds);

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
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.w, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }

    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.w, mo.h);

    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }
}
