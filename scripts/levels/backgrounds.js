
let backgrounds = [];

for (let i = GAME_LEFT_SCREEN_COUNT; i >= 1; i--) {
  const IMAGE_NAME = i % 2 === 0 ? "1.png" : "2.png";
  addAirLayer(-719 * i);
  addLayers("3_third_layer", IMAGE_NAME, -719 * i);
  addLayers("2_second_layer", IMAGE_NAME, -719 * i);
  addLayers("1_first_layer", IMAGE_NAME, -719 * i);
}

addAirLayer(0);
addLayers("3_third_layer", "1.png", 0);
addLayers("2_second_layer", "1.png", 0);
addLayers("1_first_layer", "1.png", 0);

for (let i = 1; i <= GAME_RIGHT_SCREEN_COUNT; i++) {
  const IMAGE_NAME = i % 2 === 0 ? "1.png" : "2.png";
  addAirLayer(719 * i);
  addLayers("3_third_layer", IMAGE_NAME, 719 * i);
  addLayers("2_second_layer", IMAGE_NAME, 719 * i);
  addLayers("1_first_layer", IMAGE_NAME, 719 * i);
}
function addAirLayer(position) {
  backgrounds.push(new Background("assets/img/5_background/layers/air.png", position));
}

function addLayers(layer, imageName, position) {
  backgrounds.push(new Background(`assets/img/5_background/layers/${layer}/${imageName}`, position));
}


