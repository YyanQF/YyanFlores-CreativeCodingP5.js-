function setup() {
  createCanvas(windowWidth, windowHeight);
  background(119, 221, 119);
  cnv4 = createGraphics(width, height);
  ctx2 = cnv4.canvas.getContext("2d");
  cnv4.rect(15, 15, 600, 600);
  ctx2.clip();
  image(cnv4, 0, 0);
  

  cnv3 = createGraphics(width, height);
  cnv3.fill(31, 78, 47);  
  cnv3.rect(15,15 ,600, 600); 
  cnv3.erase();
  cnv3.textSize(50);
  cnv3.text('Hello, if you are reading', 20, 100);
  cnv3.text(' this... I am a cat', 10, 150);
  cnv3.noErase();
  image(cnv3, 0, 0);
}