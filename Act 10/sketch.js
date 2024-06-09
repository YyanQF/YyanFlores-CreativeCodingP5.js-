let mode = 'title';
let marble;
let paddle1, paddle2;
let score1 = 0;
let score2 = 0;
const winningScore = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  marble = new Marble();
  paddle1 = new Paddle(true);  // Player 1 paddle at the bottom
  paddle2 = new Paddle(false); // Player 2 paddle at the top
}

function draw() {
  if (mode == "title") {
    titleScreen();
  }
  if (mode == "gameplay") {
    gameplayScreen();
  }
  if (mode == "gameover") {
    gameoverScreen();
  }
  if (mode == "gamewin") {
    gamewinScreen();
  }
}

function titleScreen() {
  background(200, 250, 180);
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(144, 238, 144);
  text('Teleportaball', width / 2, height / 2.3);
  textSize(35);
  text('Press ENTER to Start', width / 2, height / 1.5);
  fill(0);
  fill(250, 0, 0);

  if (keyIsPressed && keyCode === ENTER) {
    resetGame();
    mode = 'gameplay';
  }
}

function gameplayScreen() {
  background(200, 250, 180);
  paddle1.draw();
  paddle1.move();
  paddle2.draw();
  paddle2.move();
  marble.draw();
  marble.move();
  marble.collision();

  // Display scores in the middle
  textSize(24);
  fill(0);
  textAlign(CENTER, CENTER);
  text(`Player 1: ${score1}`, width / 2, height / 2 - 20);
  text(`Player 2: ${score2}`, width / 2, height / 2 + 20);

  if (score1 >= winningScore) {
    mode = 'gamewin';
    winningPlayer = 1;
  } else if (score2 >= winningScore) {
    mode = 'gamewin';
    winningPlayer = 2;
  }
}

function gameoverScreen() {
  background(255, 0, 0);
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(0);
  text('GAME OVER', width / 2, height / 4);
  textSize(35);
  textAlign(CENTER, CENTER);
  fill(0);
  text('Press BACKSPACE to return to menu', width / 2, height / 2);

  if (keyIsPressed && keyCode === BACKSPACE) {
    resetGame();
    mode = 'title';
  }
}

function gamewinScreen() {
  background(66, 203, 244);
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(0);
  text(`PLAYER ${winningPlayer} WINS`, width / 2, height / 4);
  textSize(35);
  textAlign(CENTER, CENTER);
  fill(0);
  text('Press BACKSPACE to return to menu', width / 2, height / 2);

  if (keyIsPressed && keyCode === BACKSPACE) {
    resetGame();
    mode = 'title';
  }
}

function resetGame() {
  marble.reset();
  score1 = 0;
  score2 = 0;
}

class Marble {
  constructor() {
    this.ballX = width / 2;
    this.ballY = height / 2;
    this.dirX = 6;
    this.dirY = 6;
    this.radius = 25;
    this.color = 200;
    this.teleportChance = 0.007;
  }

  draw() {
    fill(this.color);
    ellipse(this.ballX, this.ballY, this.radius);
  }

  move() {
    this.ballX += this.dirX;
    this.ballY += this.dirY;
  }

  collision() {
    if (this.ballX > width || this.ballX < 0) {
      this.dirX *= -1;
    }
    if (this.ballY < 0) {
      score1++;
      this.reset();
    }
    if (this.ballY > height) {
      score2++;
      this.reset();
    }

    // Paddle 1 collision (bottom paddle)
    if (this.ballY > paddle1.y - 20 && this.ballY < paddle1.y && this.ballX > paddle1.x - 5 && this.ballX < paddle1.x + paddle1.width) {
      this.dirY *= -1;
      this.ballY += this.dirY;
    }

    // Paddle 2 collision (top paddle)
    if (this.ballY < paddle2.y + 20 && this.ballY > paddle2.y && this.ballX > paddle2.x - 5 && this.ballX < paddle2.x + paddle2.width) {
      this.dirY *= -1;
      this.ballY += this.dirY;
    }

    if (random() < this.teleportChance) {
      this.teleport();
    }
  }

  reset() {
    this.ballX = width / 2;
    this.ballY = height / 2;
    this.dirX = random([-6, 6]);
    this.dirY = random([-6, 6]);
  }

  teleport() {
    this.ballX = random(width);
    this.ballY = random(height);
  }
}

class Paddle {
  constructor(isBottom) {
    this.width = 150;
    this.height = 20;
    this.color = 100;
    this.x = width / 2 - this.width / 2;
    this.y = isBottom ? height - 50 : 50;
    this.isBottom = isBottom;
  }

  draw() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height, 20);
  }

  move() {
    if (this.isBottom) {
      // Player 1 controls
      if (keyIsDown(LEFT_ARROW)) {
        this.x -= 10;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.x += 10;
      }
    } else {
      // Player 2 controls
      if (keyIsDown(65)) { // 'A' key
        this.x -= 10;
      }
      if (keyIsDown(68)) { // 'D' key
        this.x += 10;
      }
    }
    this.x = constrain(this.x, 0, width - this.width);
  }
}

