var img, x, y;
function preload() {
img = loadImage("Cat.jpg");
}

function setup() {
createCanvas (windowWidth, windowHeight);
background(0);
noStroke();
}


function draw() {
background(0);
x = mouseX;
y = mouseY;
image( img, 0, 0);
var c = get(x, y);
fill(c);
 triangle(x, y, x + 100, y, x + 100, y - 100);
}