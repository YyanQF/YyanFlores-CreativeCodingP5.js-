let font;

function preload() {
  font = loadFont('ShadowsIntoLight.ttf'); 
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(60);
  textFont(font);
}

function draw() {
  background(173, 216, 230);
  fill(34, 38, 61);
  text("Welcome to Bath Spa", width / 2, height / 2);
}
