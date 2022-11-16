// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 10;
    this.radius = 4;
    this.color = color(255);
  }

  move() {
    this.x += this.dx;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
