let circles = [];
let circleSize = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);  
  
  for (let i = 0; i < circles.length; i++) {
    let d = dist(mouseX, mouseY, circles[i].x, circles[i].y);

    if (d < circleSize / 2) {
      circles[i].color = color(255, 0, 0);
    } else {
      circles[i].color = color(255);
    }

    fill(circles[i].color);
    circle(circles[i].x, circles[i].y, circleSize);
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let newCircle = {
      x: mouseX,
      y: mouseY,
      color: color(255)
    };
    circles.push(newCircle);
  }
}
