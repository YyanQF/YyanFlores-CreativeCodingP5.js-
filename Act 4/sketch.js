function setup() {
  createCanvas(windowWidth, windowHeight); 
  noLoop(); // Prevent the draw function from looping continuously
}

function draw() {
  background(0); 
  drawPattern(); // This will call on the function to draw the pattern
}

function drawPattern() {
  let cols = 17; // This is the umber of columns in the grid
  let rows = 20; // This is the number of rows in the grid
  let spacingX = width / cols; 
  let spacingY = height / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * spacingX + spacingX / 2;
      let y = j * spacingY + spacingY / 2; 
      let r = random(10, 40); 
      let red = random(255); //this will randomize the color
      let green = random(255);
      let blue = random(255); 
      
      fill(red, green, blue); // this will randomly set the rectangle this colors
      colorMode(HSB);
      noStroke(); 
      rect(x, y, r, r); 
    }
  }
}

function mousePressed() {
  redraw();
}

