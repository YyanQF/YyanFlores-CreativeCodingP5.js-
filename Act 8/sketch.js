let song;
let amplitude;
let balls = [];

function preload() {
  song = loadSound('ceb96903-fabf-4af9-b0a6-a8b128e71f70.mp3');
}

function setup() {
  createCanvas(1200, 1200);
  amplitude = new p5.Amplitude();

  for (let i = 0; i < 200; i++) {
    let ball = {
      x: random(width),
      y: random(height),
      size: random(50, 200),
      pulseOffset: random(TWO_PI), // Random phase offset for pulsation
      color: color(random(255), random(0), random(0))
    };
    balls.push(ball);
  }
}

function draw() {
  background(30);
  
  // Analyze the amplitude of the sound
  let level = amplitude.getLevel();
  
  // Update and draw each ball
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    
    // Map the amplitude to the size of the ball
    let pulse = sin(frameCount * 0.050 + ball.pulseOffset) * 0.5 + 0.5; // Pulsating effect
    let ballSize = map(level, 0, 1, 10, 250) * pulse;
    
    // Draw the ball with gradient and pulsating effect
    let interpColor = lerpColor(ball.color, color(255), pulse); // Interpolated color
    fill(interpColor);
    stroke(193, 225, 193)
    ellipse(ball.x, ball.y, ballSize, ballSize);
  }
}

function mouseClicked() {
  // Play the song when the mouse is clicked
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  
  }
}
