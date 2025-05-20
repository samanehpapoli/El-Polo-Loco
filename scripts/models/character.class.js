class Character extends MovableObject {
  x = 100;
  y = 200;
  w = 130;
  h = 220;
  world;

  IMAGES_IDLE = [
    "assets/img/2_character_pepe/1_idle/idle/I-1.png",
    "assets/img/2_character_pepe/1_idle/idle/I-2.png",
    "assets/img/2_character_pepe/1_idle/idle/I-3.png",
    "assets/img/2_character_pepe/1_idle/idle/I-4.png",
    "assets/img/2_character_pepe/1_idle/idle/I-5.png",
    "assets/img/2_character_pepe/1_idle/idle/I-6.png",
    "assets/img/2_character_pepe/1_idle/idle/I-7.png",
    "assets/img/2_character_pepe/1_idle/idle/I-8.png",
    "assets/img/2_character_pepe/1_idle/idle/I-9.png",
    "assets/img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  IMAGES_WALK = [
    "assets/img/2_character_pepe/2_walk/W-21.png",
    "assets/img/2_character_pepe/2_walk/W-22.png",
    "assets/img/2_character_pepe/2_walk/W-23.png",
    "assets/img/2_character_pepe/2_walk/W-24.png",
    "assets/img/2_character_pepe/2_walk/W-25.png",
    "assets/img/2_character_pepe/2_walk/W-26.png",
  ];

  currentImage = 0;

  constructor() {
    super();
    this.loadImage("assets/img/2_character_pepe/1_idle/idle/I-1.png");

    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_WALK);
    this.animate();
  }
 // Diese Funktion wechselt das Bild je nach Tasteneingabe zwischen Stand- und Geh-Animation alle 100 ms.
  animate() {
    setInterval(() => {
      let imagesArray = this.IMAGES_IDLE;

      if (this.world.keyboard.RIGHT === true || this.world.keyboard.LEFT === true ) {
        imagesArray = this.IMAGES_WALK
      }

      let i = this.currentImage % imagesArray.length;
      let path = imagesArray[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000 / 10);
  }
}
