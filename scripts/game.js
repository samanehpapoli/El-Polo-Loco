let world;
let canvas;
let gameContainerElement;
let startIconsElement;
let startScreenElement;
let helpScreenElement;
let imprintScreenElement;
let gameScreenElement;
let gameOverScreenElement;
let gameWinScreenElement;
let keyboard;

// ----- Initialization -----
function init() {
  canvas = document.getElementById("canvas");
  gameContainerElement = document.getElementById("game-container");
  startIconsElement = document.getElementById("start-icons");
  startScreenElement = document.getElementById("start-screen");
  helpScreenElement = document.getElementById("help-screen");
  imprintScreenElement = document.getElementById("imprint-screen");
  gameScreenElement = document.getElementById("game-screen");
  gameOverScreenElement = document.getElementById("gameover-screen");
  gameWinScreenElement = document.getElementById("gamewin-screen");
  keyboard = new Keyboard();
}

// ----- Game Start / Restart -----
function startNewGame(delay = 100, restart = false) {
  if (!restart) {
    prepareStartScreen();
  }

  initializeWorld();
  checkMuteStatus();
  updateTouchButtons();

  showGameScreenAfterDelay(delay);
}

// Prepare the start screen UI
function prepareStartScreen() {
  gameContainerElement.classList.add("m-width");
  startIconsElement.classList.add("d-none");
  startScreenElement.classList.remove("d-none");
}

// Prepare the back to menu screen UI
function preparebackToMenuScreen() {
  gameScreenElement.classList.add("d-none");
  startIconsElement.classList.remove("d-none");
  gameContainerElement.classList.add("m-width");
}

// Initialize the world/game
function initializeWorld() {
  world = new World(canvas, keyboard);
}

// Show game screen after a delay
function showGameScreenAfterDelay(delay) {
  setTimeout(() => {
    startScreenElement.classList.add("d-none");
    gameScreenElement.classList.remove("d-none");
    gameContainerElement.classList.remove("m-width");
  }, delay);
}

// Go back to the main menu
function backToMenu() {
  hideGameOverScreen();
  hideGameWinScreen();
  world.resetGameOverAndWinStatus();
  preparebackToMenuScreen();
}

// Restart the game immediately
function restartGame() {
  hideGameOverScreen();
  hideGameWinScreen();
  world.resetGameOverAndWinStatus();
  startNewGame(10, true);
}

// ----- Sound Management -----
function checkMuteStatus() {
  const isMuted = getMuteStatusFromStorage();

  if (isMuted) muteBackgroundSound();
  else playBackgroundSound();

  updateSoundIcon();
}

// Toggle mute sound
function toggleMuteSound() {
  world.toggleBackgroundSound();
  updateSoundIcon();
  updateMuteStatusInStorage();
}

// Get mute status from localStorage
function getMuteStatusFromStorage() {
  return JSON.parse(localStorage.getItem("epl-mute")) === true;
}

// Mute background sound
function muteBackgroundSound() {
  world.muteBackgroundSound();
}

// Play background sound
function playBackgroundSound() {
  world.playBackgroundSound();
}

// Update sound icon in UI
function updateSoundIcon() {
  const soundIcon = world.isMute ? 'mute.png' : 'sound.png';
  document.getElementById('sound-img').setAttribute('src', `./assets/icon/${soundIcon}`);
}

// Update localStorage for mute status
function updateMuteStatusInStorage() {
  const currentMute = JSON.parse(localStorage.getItem("epl-mute")) || false;
  localStorage.setItem("epl-mute", !currentMute);
}

// ----- Screen Display Helpers -----
function showHelpPage() { helpScreenElement.classList.remove("d-none"); }
function hideHelpPage() { helpScreenElement.classList.add("d-none"); }

function showImprintPage() { imprintScreenElement.classList.remove("d-none"); }
function hideImprintPage() { imprintScreenElement.classList.add("d-none"); }

function showGameOverScreen() { gameOverScreenElement.classList.remove("d-none"); }
function hideGameOverScreen() { gameOverScreenElement.classList.add("d-none"); }

function showGameWinScreen() { gameWinScreenElement.classList.remove("d-none"); }
function hideGameWinScreen() { gameWinScreenElement.classList.add("d-none"); }

// Show or hide touch buttons depending on device
function updateTouchButtons() {
  const touchButtons = document.getElementById("touch-buttons");
  if (!touchButtons) return;

  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  touchButtons.style.display = isTouch ? "flex" : "none";
}

// ----- Event Listeners -----
window.addEventListener("resize", updateTouchButtons);
window.addEventListener("orientationchange", updateTouchButtons);