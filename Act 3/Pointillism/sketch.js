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
x = random(width);
y = random(height);
var c = img.get(x, y);
fill(c[0], c[1], c[2], 20);
triangle(x, y, x+50, y, x+25, y-50);
}