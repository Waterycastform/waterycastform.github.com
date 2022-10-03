// Start Screen
// Schellenberg
// Oct 3, 2022

let state = "start";
let doricImg;

function preload(){
  doricImg = loadImage("doric order.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
  }
  if (state === "main"){
    image(doricImg, 0, 0, width, height);
  }
}

function mousePressed(){
  if (state === "start" && mouseInButton(400, 700, 400, 550)) {
    state = "main";
  }
}

function startScreen() {
  if (mouseInButton(400, 700, 400, 550)) {
    fill("gray");
  }
  else{
    fill("black");
  }
  rect(400, 400, 300, 150);
  fill("white");
  textSize(50);
  text("Archaic", 460, 490);

}

function mouseInButton(left, right, top, bottom){
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}