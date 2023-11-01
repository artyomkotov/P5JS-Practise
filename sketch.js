let circleX, circleY, circleSize;
let circle2X, circle2Y;
let direction = 3;
let direction2 = -1;

function setup() {
  createCanvas(500, 500);
  circleSize = 50;
  circleX = circleSize / 2;
  circleY = height / 6;
  circle2X = width - circleSize / 2;
  circle2Y = height / 1.25;
}

function draw() {
  background(220);
  circle(circleX, circleY, circleSize); 
  circle(circle2X, circle2Y, circleSize);
  
  circleX += 2 * direction;
    if (circleX >= width - circleSize / 2) {
    direction = -3;
  }
    if (circleX <= circleSize / 2) {
    direction = 3;
  }

  circle2X += 2 * direction2;
  if (circle2X >= width - circleSize / 2) {
    direction2 = -1;
  }
  if (circle2X <= circleSize / 2) {
    direction2 = 1;
  }
  }

