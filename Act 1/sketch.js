function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100, 100, 100);
  drawCar(200, 200);
}

function drawCar(x, y) {
  // Car body
  fill(255, 0, 0);
  rect(x, y, 200, 50);
  rect(x + 30, y - 30, 140, 30);
  
  // Car tinted windows
  fill(135, 206, 235);
  rect(x + 40, y - 25, 40, 25);
  rect(x + 120, y - 25, 40, 25);
  
  // Yellow car headlights
  fill(255, 255, 0);
  ellipse(x + 5, y + 25, 10, 10);
  ellipse(x + 195, y + 25, 10, 10);
  
  // Car wheels
  fill(0);
  ellipse(x + 50, y + 50, 40, 40);
  ellipse(x + 150, y + 50, 40, 40);
  
  // Car rims
  fill(255);
  ellipse(x + 50, y + 50, 10, 10);
  ellipse(x + 150, y + 50, 10, 10);
}
