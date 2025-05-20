class World {
  ctx;
  canvas;
  keyboard;
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken(), new Chicken()];
  clouds = [new Cloud()];
  backgrounds = [
    new Background("assets/img/5_background/layers/air.png", 0),
    new Background("assets/img/5_background/layers/3_third_layer/1.png", 0),
    new Background("assets/img/5_background/layers/2_second_layer/1.png", 0),
    new Background("assets/img/5_background/layers/1_first_layer/1.png", 0),
  ];

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.ctx = this.canvas.getContext("2d");
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addMultipleObjectToMap(this.backgrounds);
    this.addToMap(this.character);
    this.addMultipleObjectToMap(this.enemies);
    this.addMultipleObjectToMap(this.clouds);

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
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.w, mo.h);
  }
}
