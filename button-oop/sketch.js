// Button OOP
// Saabir Yousuf
// Nov. 21st, 2022

let button1;
let button2;
let backgroundColor = "lightgray";

class Button {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 50;
    this.color = color;
    this.hoverColor = "gray";
  }

  display() {
    if (this.isInside(mouseX, mouseY)) {
      fill(this.hoverColor);
    }

    else {
      fill(this.color);
    }
    
    rect(this.x, this.y, this.width, this.height);
  }

  isInside(x, y) {
    let leftSide = this.x;
    let rightSide = this.x + this.width;
    let topSide = this.y;
    let bottomSide = this.y + this.height;

    return x > leftSide && x < rightSide && y > topSide && y < bottomSide;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  button1 = new Button(windowWidth/2, windowHeight*0.3, "red");
  button2 = new Button(windowWidth/2, windowHeight*0.6, "blue");

}

function draw() {
  background(backgroundColor);
  button1.display();
  button2.display();
}

function mousePressed() {
  if(button1.isInside(mouseX, mouseY)) {
    backgroundColor = "red";
  }
  if (button2.isInside(mouseX, mouseY)) {
    backgroundColor = "blue";
  }
}

