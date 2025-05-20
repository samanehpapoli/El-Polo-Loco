let world;
let keyboard  = new Keyboard();

function init() {
  let canvas = document.getElementById("canvas");

  world = new World(canvas,keyboard);
 
}

 // Diese Event-Listener setzen die Tastenstatus beim Drücken und Loslassen der Pfeil-, Leertaste- und Enter-Tasten. 
window.addEventListener("keydown", (event) => {
 

  if (event.keyCode === 39) {
    keyboard.RIGHT = true;
  }
  
  if (event.keyCode === 37) {
    keyboard.LEFT = true;
  }
   if (event.keyCode === 32) {
    keyboard.SPACE = true;
  }
  if (event.keyCode === 13) {
    keyboard.ENTER = true;
  }
  
});

window.addEventListener("keyup", (event) => {
 

  if (event.keyCode === 39) {
    keyboard.RIGHT = false;
  }
  
  if (event.keyCode === 37) {
    keyboard.LEFT = false;
  }
   if (event.keyCode === 32) {
    keyboard.SPACE = false;
  }
  if (event.keyCode === 13) {
    keyboard.ENTER = false;
  }
  
});
