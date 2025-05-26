class Level {
  endboss;
  enemies;
  clouds;
  backgrounds;
  coins;
  bottles;
  healthStatusBars;
  coinStatusBars;
  gameStartPosition;
  gameEndPosition;

  constructor(endboss, enemies, clouds, backgrounds,coins,bottles, healthStatusBars,coinStatusBars, gameStartPosition, gameEndPosition) {
    this.endboss = endboss;
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgrounds = backgrounds;
    this.coins = coins;
    this.bottles = bottles;
    this.healthStatusBars = healthStatusBars;
    this.coinStatusBars = coinStatusBars;
    this.gameStartPosition = gameStartPosition;
    this.gameEndPosition = gameEndPosition;
  }
}
