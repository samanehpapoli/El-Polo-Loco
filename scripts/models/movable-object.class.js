class MovableObject {
  x;
  y;
  w;
  h;
  img;
  speed =1;
  
  imageCache = {}


  loadImage(path){
   this.img = new Image();
   this.img.src= path;

  }

  loadImages(imagesPath){
    for (const imagePath of imagesPath) {
         let image = new Image();
         image.src= imagePath;
         this.imageCache [imagePath]=image
    }
  }
// // Diese Funktion bewegt das Objekt 60 Mal pro Sekunde nach links basierend auf seiner Geschwindigkeit.

  moveLeft(){
    setInterval(() => {
      this.x -= this.speed;
    }, 1000/60);
   
  }
}
