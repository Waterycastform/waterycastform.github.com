// Walker OOP Demo
// Saabir Yousuf
// Nov. 14th, 2022

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "red";
    this.speed = 5;
    this.radius = 4;
  }

  display() {
    stroke(this.color);
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      //up
      this.y -= this.speed;
    }
    else if (choice < 50) {
      //down
      this.y += this.speed;
    }
    else if (choice < 75) {
      //right
      this.x += this.speed;
    }
    else {
      //left
      this.x -= this.speed;
    }
  }
}


let walkerArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnWalker();
}

function draw() {
  for (let i = 0; i < walkerArray.length; i++) {
    walkerArray[i].display();
    walkerArray[i].move();
  }
}

function spawnWalker() {
  let micheal = new Walker(random(width), random(height));
  let someColor = color(random(255), random(255), random(255));
  micheal.color = someColor;

  walkerArray.push(micheal);
}

function keyPressed() {
  spawnWalker();
}