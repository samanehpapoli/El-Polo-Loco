class MovableObject extends DrawableObject {
  speed = 1;
  speedY = 0;
  acceleration = 2;
  otherDirection = false;

  isColliding(mo) {
    return (
      this.x + this.w - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.h - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.w - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.h - mo.offset.bottom
    );
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 200;
    }
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
