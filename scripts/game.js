let world;
let canvas;
let keyboard;
let startIconsElement;
let startScreenElement;

function init() {
  canvas = document.getElementById("canvas");
  startIconsElement = document.getElementById("start-icons");
  startScreenElement = document.getElementById("start-screen");
  keyboard = new Keyboard();
}

function startNewGame() {
  startIconsElement.classList.add("d-none");
  startScreenElement.classList.remove("d-none");

  setTimeout(() => {
     startScreenElement.classList.add("d-none");
    canvas.classList.remove("d-none");
    world = new World(canvas, keyboard);
  }, 2000);
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
