class Level {
  endboss;
  enemies;
  clouds;
  backgrounds;
  gameStartPosition;
  gameEndPosition;

  constructor(endboss,enemies, clouds, backgrounds, gameStartPosition, gameEndPosition) {
    this.endboss = endboss;
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgrounds = backgrounds;
    this.gameStartPosition = gameStartPosition;
    this.gameEndPosition = gameEndPosition;
    
  }
}
