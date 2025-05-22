class MovableObject {
  x;
  y;
  w;
  h;
  img;
  speed = 1;
  otherDirection = false;
  currentImage = 0;

  imageCache = {};

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(imagesPath) {
    for (const imagePath of imagesPath) {
      let image = new Image();
      image.src = imagePath;
      this.imageCache[imagePath] = image;
    }
  }

  drawImage(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  drawFrame(ctx) {
    if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "green";
      ctx.rect(this.x, this.y, this.w, this.h);
      ctx.stroke();
    }
  }

  drawFrameOffset(ctx) {
    if (this instanceof Character) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "red";
      ctx.rect(this.offset.x, this.offset.y, this.offset.w, this.offset.h);
      ctx.stroke();
    }
  }

  isColliding(mo) {
    return (
      this.x + this.w - this.offset.right > mo.x &&
      this.y + this.h - this.offset.bottom > mo.y &&
      this.x -this.offset.left < mo.x  &&
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
