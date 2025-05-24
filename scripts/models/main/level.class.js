class Level {
  endboss;
  enemies;
  clouds;
  backgrounds;
  healthStatusBars;
  gameStartPosition;
  gameEndPosition;

  constructor(endboss, enemies, clouds, backgrounds, healthStatusBars, gameStartPosition, gameEndPosition) {
    this.endboss = endboss;
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgrounds = backgrounds;
    this.healthStatusBars = healthStatusBars;
    this.gameStartPosition = gameStartPosition;
    this.gameEndPosition = gameEndPosition;
  }
}
