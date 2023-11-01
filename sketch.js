let circleX, circleY, circleSize;
let circle2X, circle2Y;

function setup() {
  createCanvas(500, 500);
  circleSize = 50;
  circleX = circleSize / 2;
  circleY = height / 6;
  circle2X = circleSize / 2;
  circle2Y = height / 1.25;
}

function draw() {
  background(220);
  circle(circleX, circleY, circleSize); 
  circle(circle2X, circle2Y, circleSize);
}
