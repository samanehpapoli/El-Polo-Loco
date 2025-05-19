class MovableObject {
  x;
  y;
  w;
  h;
  img;
  
  imageCache = {

  }


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
}
