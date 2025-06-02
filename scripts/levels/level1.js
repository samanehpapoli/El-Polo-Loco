const endboss = new Endboss();

let enemies=[];
for (let i = 1; i <= HENS_COUNT; i++) {
  enemies.push(new Hen());
}
for (let i = 1; i <= CHICKS_COUNT; i++) {
  enemies.push(new Chick());
}

let coins = [];

for (let i = 1; i <= COINS_COUNT; i++) {
  coins.push(new Coin());
}

let bottles = [];

for (let i = 1; i <= BOTTLE_COUNT; i++) {
  bottles.push(new Bottle());
}

const throwableObjects = [];

const healthStatusBar = new HealthStatusBar();
const coinStatusBar = new CoinStatusBar();
const bottleStatusBar = new BottleStatusBar();
const endbossStatusBar = new EndbossStatusBar();

level1 = new Level(
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
  endbossStatusBar,
  GAME_LEFT_SCREEN_COUNT * -719 + 110,
  GAME_RIGHT_SCREEN_COUNT * 719,
  GAME_RIGHT_SCREEN_COUNT - 1 * 719
);
