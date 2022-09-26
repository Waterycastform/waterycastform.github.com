// Square around edge
// Saabir Yousuf
// Spet. 26th, 2022

let x = 0;
let y = 0;
let h = 150;
let dx = 15;
let dy = 15;
let state = "right";


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawSquare();
  moveSquare(); 
}

function drawSquare() {
  fill ("black");
  square(x, y, h);
}

function moveSquare() {
  if (state === "right") {
    x += dx;
    if (x + h >= windowWidth) {
      state = "down";
    }
  }
  if (state === "down" ){
    y += dy;
    if (y + h >= windowHeight){
      state = "left";
    }
  }
  if (state === "left") {
    x -= dx;
    if (x === 0){
      state = "up";
    }
  }
  if (state === "up"){
    y -= dy;
    if (y === 0){
      state = "right";
    }
  }
}