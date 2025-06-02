let clouds = [];

for (let i = GAME_LEFT_SCREEN_COUNT; i >= 1; i--) {
  clouds.push(
    new Cloud(-700 * i),
)
}

 clouds.push(
    new Cloud(0),
)

 for (let i = 1; i <= GAME_RIGHT_SCREEN_COUNT +2; i++){
      clouds.push(
        new Cloud(700 * i),
    )
 }

