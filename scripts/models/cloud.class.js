class Cloud extends MovableObject {
  x = 300;
  y = 30;
  w = 450;
  h = 350;
  speed = 0.15;

  constructor() {
    super();
    this.loadImage("assets/img/5_background/layers/4_clouds/1.png");
    this.animate();
  }
// // Diese Funktion startet die Bewegung des Objekts nach links.
  animate() {
    this.moveLeft();
  }
}
