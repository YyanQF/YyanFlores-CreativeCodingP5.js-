let mouse_trail = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); 
}

function draw() {
  background(193, 225, 193); 

  for (let i = 0; i < mouse_trail.length; i++) {
    let pos = mouse_trail[i];
    fill(205,198,255); 
    stroke(195,181,255)
    rect(pos.x, pos.y, 100, 20); 
  }


  if (mouse_trail.length > 30) {
    mouse_trail.shift();
  }
}

function mouseMoved() {
  mouse_trail.push({ x: mouseX, y: mouseY });
}
