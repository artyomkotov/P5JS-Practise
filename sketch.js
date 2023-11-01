let circleX, circleY;
let randomR, randomG, randomB, randomAlpha, randomStroke;

function setup() {
  createCanvas(600, 600);
  circleX = random(25, 575);
  circleY = random(25, 575);
  randomR = random(0, 255);
  randomG = random(0, 255);
  randomB = random(0, 255);
  randomAlpha = random(0, 255);
  randomStroke = random(0, 10);
}

function draw() {
  background(220);
  strokeWeight(randomStroke);
  fill(randomR, randomG, randomB, randomAlpha);
  circle(circleX, circleY, 50);
}
