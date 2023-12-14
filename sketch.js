let player1X, player2X;
let speedX, speedY;
let player1scr, player2scr;
circleX = 350;
circleY = 250;
player1Y = 50;
player2Y = 50;


function setup() {
  createCanvas(700, 500);

  speedX = random(-5, 5);
  speedY = random(-5, 5);

  player2X = width - 25;
  player1X = 15;
  
}

function draw() {
  background(100);
  circle(circleX, circleY, 50);
  circleX = circleX + speedX;
  circleY = circleY + speedY;

  if (circleY < 25) {
      speedY = speedY * (-1);
      }
  
  if (circleY + 25 > height) {
      speedY = speedY * (-1);
      }
  
  rect(player1X, player1Y, 10, 100);
  
  if (keyIsDown(83)) {
    player1Y = player1Y + 10;
  }
  
  if (keyIsDown(87)) {
    player1Y = player1Y - 10;
  }

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
      speedX = speedX * (-1);
    }
  }  

  // check if the ball hits the left paddle
  if (circleX - 25 < player1X + 10) {
    if (circleY > player1Y && circleY < player1Y + 100) {
      speedX = speedX * (-1);
    }
  }
}
