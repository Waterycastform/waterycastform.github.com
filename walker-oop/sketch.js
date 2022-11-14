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

let micheal;
let katharine;
let nuha;

function setup() {
  createCanvas(windowWidth, windowHeight);
  micheal = new Walker(width/2, height/2);

  katharine = new Walker(200, 300);
  katharine.color = "blue";

  nuha = new Walker(1200, 600);
  nuha.color = "green";
}

function draw() {
  micheal.display();
  katharine.display();
  nuha.display();

  micheal.move();
  katharine.move();
  nuha.move();

}
