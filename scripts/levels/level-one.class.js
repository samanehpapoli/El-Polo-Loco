class LevelOne extends Level {
  GAME_LEFT_SCREEN_COUNT = 2;
  GAME_RIGHT_SCREEN_COUNT = 5;
  COINS_COUNT = 20;
  HENS_COUNT = 10;
  CHICKS_COUNT = 10;
  BOTTLE_COUNT = 10;

  // Constructor: initialize the game by setting up all objects and positions
  constructor() {
    super();

    this.setEndboss();
    this.setEnemies();
    this.setCoins();
    this.setBottles();
    this.setClouds();
    this.setStatusBars()
    this.setBackgrounds();
    this.setGamePositions();
  }
}