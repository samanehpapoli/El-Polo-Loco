class MovableObject {
  x;
  y;
  w;
  h;
  img;


  loadImage(path){
   this.img = new Image();
   this.img.src= path;

  }
}
