class Cloud extends MovableObject {
  x = 300;
  y = 30;
  w = 450;
  h = 350;

  constructor() {
    super();
    this.loadImage("assets/img/5_background/layers/4_clouds/1.png");
   this.animate();
  }

  animate(){
    setInterval(() => {
      this.x -= 0.15;
    }, 1000/60);
   
  }

}
