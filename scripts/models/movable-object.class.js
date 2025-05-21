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
  // // Diese Funktion bewegt das Objekt 60 Mal pro Sekunde nach links basierend auf seiner Geschwindigkeit.

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
