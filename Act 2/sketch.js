function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  drawUFO(350, 250);
}

function drawUFO(x, y) {
  // the UFO body
  fill(150);
  ellipse(x, y + 50, 200, 50);
  
  // the ufo window
  fill(100, 100, 255, 150);
  ellipse(x, y, 100, 60);
  
  // green alien face
  fill(0, 255, 0);
  ellipse(x, y, 40, 50);
  
  // Alien cat ears
  fill(0, 255, 0);
  triangle(x - 20, y - 25, x - 10, y - 50, x, y - 25);
  triangle(x + 20, y - 25, x + 10, y - 50, x, y - 25);
  
  // Eyes
  fill(0);
  ellipse(x - 10, y - 10, 10, 15);
  ellipse(x + 10, y - 10, 10, 15);
  
  // Mouth
  stroke(0);
  strokeWeight(2);
  noFill();
  arc(x, y + 10, 20, 10, 0, PI);
  
  // Yellow lights
  fill(255, 255, 0);
  ellipse(x - 70, y + 50, 10, 10);
  ellipse(x - 30, y + 50, 10, 10);
  ellipse(x, y + 50, 10, 10);
  ellipse(x + 30, y + 50, 10, 10);
  ellipse(x + 60, y + 50, 10, 10);
}