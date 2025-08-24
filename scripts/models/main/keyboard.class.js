class Keyboard {
  LEFT = false;
  RIGHT = false;
  SPACE = false;
  ENTER = false;

  // Constructor: initialize keyboard and touch controls
  constructor() {
    this.addKeydownMovement();
    this.addKeyupMovement();
    this.addTouchMovement();
    this.addTouchJump();
    this.addTouchThrow();
  }

  // Add event listeners for keydown events
  addKeydownMovement() {
    window.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        this.RIGHT = true;
      }
      if (event.keyCode === 37) {
        this.LEFT = true;
      }
      if (event.keyCode === 32) {
        this.SPACE = true;
      }
      if (event.keyCode === 13) {
        this.ENTER = true;
      }
    });
  }

  // Add event listeners for keyup events
  addKeyupMovement() {
    window.addEventListener("keyup", (event) => {
      if (event.keyCode === 39) {
        this.RIGHT = false;
      }
      if (event.keyCode === 37) {
        this.LEFT = false;
      }
      if (event.keyCode === 32) {
        this.SPACE = false;
      }
      if (event.keyCode === 13) {
        this.ENTER = false;
      }
    });
  }

  // Add touch controls for left/right movement
  addTouchMovement() {
    let leftKey = document.getElementById("left-key");
    let rightKey = document.getElementById("right-key");

    leftKey.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.LEFT = true;
    });
    leftKey.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.LEFT = false;
    });

    rightKey.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.RIGHT = true;
    });
    rightKey.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.RIGHT = false;
    });
  }

  // Add touch control for jump action
  addTouchJump() {
    let throwKey = document.getElementById("throw-key");

    throwKey.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.ENTER = true;
    });
    throwKey.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.ENTER = false;
    });
  }

  // Add touch control for throw action
  addTouchThrow() {
    let jumpKey = document.getElementById("jump-key");

    jumpKey.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.SPACE = true;
    });
    jumpKey.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.SPACE = false;
    });
  }
}
