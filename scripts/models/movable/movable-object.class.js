class MovableObject extends DrawableObject {
  speed = 1;
  otherDirection = false;


  isColliding(mo) {
    return (
      this.x + this.w - this.offset.right > mo.x &&
      this.y + this.h - this.offset.bottom > mo.y &&
      this.x - this.offset.left < mo.x &&
      this.y + this.offset.top < mo.y + mo.h
    );
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY = 25;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
