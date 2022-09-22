// Image Demo
// Saabir Yousuf
// Sept. 22nd, 2022

let ballImg;
let scalar = 1.0;

function preload() {
  ballImg = loadImage("ball.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(ballImg, mouseX, mouseY, ballImg.width*scalar, ballImg.height*scalar);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    scalar = scalar*1.25;
  }
  else if (keyCode === DOWN_ARROW) {
    scalar = scalar*0.75;
  }
}

