class Level {
  endboss;
  enemies;
  clouds;
  backgrounds;
  coins;
  bottles;
  throwableObjects;
  healthStatusBar;
  coinStatusBar;
  bottleStatusBar;
  gameStartPosition;
  gameEndPosition;

  constructor(
    endboss,
    enemies,
    clouds,
    backgrounds,
    coins,
    bottles,
    throwableObjects,
    healthStatusBar,
    coinStatusBar,
    bottleStatusBar,
    gameStartPosition,
    gameEndPosition
  ) {
    this.endboss = endboss;
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgrounds = backgrounds;
    this.coins = coins;
    this.bottles = bottles;
    this.throwableObjects = throwableObjects;
    this.healthStatusBar = healthStatusBar;
    this.coinStatusBar = coinStatusBar;
    this.bottleStatusBar = bottleStatusBar;
    this.gameStartPosition = gameStartPosition;
    this.gameEndPosition = gameEndPosition;
  }
}
