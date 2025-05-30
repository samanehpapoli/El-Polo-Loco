class Endboss extends MovableObject {
  y = 90;
  w = 300;
  h = 350;
  world;

  offset = {
    right: 60,
    left: 60,
    top: 40,
    bottom: 0,
  };

  IMAGES_ALERT = [
    "assets/img/4_enemie_boss_chicken/2_alert/G5.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G6.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G7.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G8.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G9.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G10.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G11.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  constructor() {
    super();
    this.loadImage(this.IMAGES_ALERT[0]);
    this.loadImages(this.IMAGES_ALERT);
    this.animate();
  }

  setWorld(world) {
    this.world = world;
    this.x = this.world.level.gameEndPosition + 200;
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_ALERT);
    }, 1000 / 6);
  }
}
