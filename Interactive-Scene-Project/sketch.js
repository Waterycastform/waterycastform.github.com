// Interactive Scene
// Saabir Yousuf
// Sept. 21st, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let palace;
let state = "menu";

function preload() {
  palace = loadImage("Buckingham.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  
}

function draw() {
  background(220);
  if (state === "menu") {
    openScreen();
    openText();
  }
  if (state === "game") {
    gameScreen();
  }

}

function mousePressed(){
  if (state === "menu" && mouseInButton (width/4, width*0.75, height*0.675, height*0.825)){
    state = "game";
  }
}

function mouseInButton (left, right, top, bottom){
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function openScreen () {
  image(palace, 0, 0, width, height);
  if (mouseInButton(width/4, width*0.75, height*0.675, height*0.825)){
    fill (200, 100, 200,);
  }
  else {
    fill (200, 100, 200, 150);
  }
  strokeWeight(4);
  rect(width/2, height*0.75, width/2, height*0.15, 20);
  if (mouseInButton(width/4, width*0.75, height*0.675, height*0.825)){
    fill ("black");
  }
  else {
    fill (50, 50, 50);
  }
  textSize( (height+width)/40);
  textStyle(BOLD);
  text("New Monarch!", width/2, height*0.75);
}

// function gameScreen() {

//}