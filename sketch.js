let player1X, player2X;
let speedX, speedY;
let player1scr, player2scr;
circleX = 350;
circleY = 250;
player1Y = 200;
player2Y = 200;
point1 = 0;
point2 = 0;

function setup() {
  createCanvas(700, 500);

  speedX = random([-5, 5]);
  speedY = random([-5, 5]);

  player2X = width - 25;
  player1X = 15;
  
}

function draw() {
  background(0);
  fill( 109, 4, 137);
  circle(circleX, circleY, 50);
  circleX = circleX + speedX;
  circleY = circleY + speedY;

function resetBall() {
  circleX = 350
  circleY = 250

  speedX = random([-5, 5]);
  speedY = random([-5, 5]);
}


  if (circleX > width + 25) {
    point1 = point1 + 1;
    resetBall();
  }

  if (circleX < -25) {
    point2 = point2 + 1;
    resetBall();
  }

  fill(255, 255, 255);
  textSize(32);
  text(point2, width/2 + 100, 50);  
  text(point1, width/2 - 100, 50);

  if (circleY < 25) {
      speedY = speedY * (-1);
      }
  
  if (circleY + 25 > height) {
      speedY = speedY * (-1);
      }
  fill(255, 0, 0);
  rect(player1X, player1Y, 10, 100);
  
  if (keyIsDown(83)) {
    player1Y = player1Y + 10;
  }
  
  if (keyIsDown(87)) {
    player1Y = player1Y - 10;
  }
fill(0, 0, 255);
  rect(player2X, player2Y, 10, 100)
  
  if (keyIsDown(DOWN_ARROW)) {
    player2Y = player2Y + 10;
  }
  
  if (keyIsDown(UP_ARROW)) {
    player2Y = player2Y - 10;
  }

  // constrain the paddle's movement to the canvas
  player1Y = constrain(player1Y, 0, height - 100);
  player2Y = constrain(player2Y, 0, height - 100);

  // check if the ball hits the right paddle
  if (circleX + 25 > player2X ) {
    if (circleY > player2Y && circleY < player2Y + 100) {
      speedX = (speedX + 0.25) * (-1);
      circleX = player2X - 30;
    }
  }  

  // check if the ball hits the left paddle
  if (circleX - 25 < player1X + 10) {
    if (circleY > player1Y && circleY < player1Y + 100) {
      speedX = (speedX - 0.25) * (-1);
      circleX = player1X + 30;
    }
  }
}
