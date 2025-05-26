class Coin extends MovableObject {
  x = 300 + Math.random() * 1200;
  y = 140;
  w = 100;
  h = 100;

  offset = {
    right: 30,
    left: 30,
    top: 30,
    bottom: 30,
  };

  pick = false;

  IMAGES = ["assets/img/8_coin/coin_1.png", "assets/img/8_coin/coin_2.png"];

  constructor() {
    super();
    this.loadImage(this.IMAGES[0]);
    this.loadImages(this.IMAGES);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES);
    }, 1000 / 5);
  }

  coinIsPick() {
    this.pick = true;

    setInterval(() => {
      if (this.w > 0) {
        this.y--;
        this.w--;
        this.h--;
      }
    }, 0.5);
  }

  checkCoinIsNotPicked() {
    return this.pick === false;
  }
}
