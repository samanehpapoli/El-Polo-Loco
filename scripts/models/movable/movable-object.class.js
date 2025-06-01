class MovableObject extends DrawableObject {
  speed = 1;
  speedY = 0;
  acceleration = 2;
  otherDirection = false;
  lastHit;
  dead = false;

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

  hit() {
    this.energy -= this.energyToRemove;

    if (this.energy < 0) {
      this.dead = true;
      this.energy = 0;
      this.currentImage =0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit; //In miliseconds
    timePassed = timePassed / 1000; //In seconds
    return timePassed < 1;
  }

  isDead() {
    return this.dead;
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

  playAnimation(images, oneTime = false) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    if (!oneTime) {
      this.currentImage++;
    } else {
      if (this.currentImage !== images.length -1) {
        this.currentImage++;
      }
    }
  }
}
