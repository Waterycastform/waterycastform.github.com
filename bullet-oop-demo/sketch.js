// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Bullet {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.dx = 10;
    this.radius = 4;
    this.color = color(0);
    this.image = img;
  }

  move() {
    this.x += this.dx;
  }

  display() {
    image(this.image, this.x, this.y, this.image.width*0.1, this.image.height*0.1);
  }

  isDead() {
    return this.x >= width;
  }
}

function preload() {
  shot = loadImage("bullet.png");
}

let bullets = [];
let shot;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let newBullet of bullets) {
    newBullet.display();
    newBullet.move();
  }

  for (let i = bullets.length-1; i >= 0; i--) {
    if(bullets[i].isDead()) {
      bullets.splice(i, 1);
    }
  }
}

function mousePressed() {
  let newBullet = new Bullet(mouseX, mouseY, shot); 
  bullets.push(newBullet);
}