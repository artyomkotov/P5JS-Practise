let circles = [];
let circleSize = 50;
let isDrawing = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);  
  
  for (let i = 0; i < circles.length; i++) {
    let d = dist(mouseX, mouseY, circles[i].x, circles[i].y);

    if (d < circleSize / 2) {
      circles[i].color = color(255, 0, 0,);
    } else {
      // Add a flowing RGB effect to the circles when they are not hovered over
      let r = sin(frameCount * 0.05 + i * 0.1) * 127 + 128;
      let g = sin(frameCount * 0.05 + i * 0.2) * 127 + 128;
      let b = sin(frameCount * 0.05 + i * 0.3) * 127 + 128;
      circles[i].color = color(r, g, b);
    }

    fill(circles[i].color);
    circle(circles[i].x, circles[i].y, circleSize);
  }
  
  if (isDrawing) {
    let newCircle = {
      x: mouseX,
      y: mouseY,
      color: color(255)
    };
    circles.push(newCircle);
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    isDrawing = true;
  }
}

function mouseReleased() {
  isDrawing = false;
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeCircleColor() {
  for (let i = 0; i < circles.length; i++) {
    circles[i].color = color(getRandomColor());
  }
}

setInterval(changeCircleColor, 1000);
