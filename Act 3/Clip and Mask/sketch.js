let img;
function preload(){
  img=loadImage("Cat.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50, 205, 50);
  
  img.resize(200,200);
  let cnv7 = createGraphics(200,200);
  cnv7.canvas.getContext("2d").clip();
  cnv7.image(img,0,0);
  image(cnv7,500,225);
  

  img.resize(200,200);
  let cnv5 = createGraphics(200,200);
  cnv5.triangle(0,0,500,700,700,200);
  img.mask(cnv5);
  image(img,300,25);
  
}