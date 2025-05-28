const endboss = new Endboss();
const enemies = [new Chicken(), new Chicken(), new Chicken(), new Chicken()];
const clouds = [new Cloud()];
const backgrounds = [
  new Background("assets/img/5_background/layers/air.png", -719),
  new Background("assets/img/5_background/layers/3_third_layer/2.png", -719),
  new Background("assets/img/5_background/layers/2_second_layer/2.png", -719),
  new Background("assets/img/5_background/layers/1_first_layer/2.png", -719),

  new Background("assets/img/5_background/layers/air.png", 0),
  new Background("assets/img/5_background/layers/3_third_layer/1.png", 0),
  new Background("assets/img/5_background/layers/2_second_layer/1.png", 0),
  new Background("assets/img/5_background/layers/1_first_layer/1.png", 0),

  new Background("assets/img/5_background/layers/air.png", 719),
  new Background("assets/img/5_background/layers/3_third_layer/2.png", 719),
  new Background("assets/img/5_background/layers/2_second_layer/2.png", 719),
  new Background("assets/img/5_background/layers/1_first_layer/2.png", 719),

  new Background("assets/img/5_background/layers/air.png", 719 * 2),
  new Background("assets/img/5_background/layers/3_third_layer/1.png", 719 * 2),
  new Background("assets/img/5_background/layers/2_second_layer/1.png", 719 * 2),
  new Background("assets/img/5_background/layers/1_first_layer/1.png", 719 * 2),

  new Background("assets/img/5_background/layers/air.png", 719 * 3),
  new Background("assets/img/5_background/layers/3_third_layer/2.png", 719 * 3),
  new Background("assets/img/5_background/layers/2_second_layer/2.png", 719 * 3),
  new Background("assets/img/5_background/layers/1_first_layer/2.png", 719 * 3),
];

const coins = [
  new Coin(),
  new Coin(),
  new Coin(),
  new Coin(),
  new Coin(),
  new Coin(),
  new Coin(),
  new Coin(),
  new Coin(),
  new Coin(),
  new Coin(),
  new Coin(),
  new Coin(),
];

const bottles = [new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle()];

const healthStatusBar = new HealthStatusBar();
const coinStatusBar = new CoinStatusBar();
const bottleStatusBar = new BottleStatusBar();

level1 = new Level(
  endboss,
  enemies,
  clouds,
  backgrounds,
  coins,
  bottles,
  healthStatusBar,
  coinStatusBar,
  bottleStatusBar,
  1 * -719 + 100,
  3 * 719
);
