let cubeX, cubeY, cubeSize = 50;

function setup() {
  createCanvas(500, 500);
  cubeX = cubeSize / 2;
  cubeY = height / 2;
}

function draw() {
  background(220);
  rectMode(CENTER);
  rect(cubeX, cubeY, cubeSize);
  if (keyIsDown(LEFT_ARROW)) {
    if (cubeX > cubeSize / 2) {
      cubeX -= 5;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (cubeX < width - cubeSize / 2) {
      cubeX += 5;
    }
  }
  if (keyIsDown(UP_ARROW)) {
    if (cubeY > cubeSize / 2) {
      cubeY -= 5;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (cubeY < height - cubeSize / 2) {
      cubeY += 5;
    }
  }
}
