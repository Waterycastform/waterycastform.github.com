// Interactive Scene
// Saabir Yousuf
// Sept. 21st, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let palace;
let sandringham;
let westminister;
let interior;
let windsor;
let balmoral;
let state = "menu";
// let hit = false;
// let theColor;

function preload() {
  palace = loadImage("Buckingham.jpg");
  sandringham = loadImage("sandringham-s1.webp");
  westminister = loadImage("westminister-s2.jpg");
  interior = loadImage("palaceinside-s3.png");
  windsor = loadImage("windsor-s4.jpg");
  balmoral = loadImage("balmoral-s5.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  
}

function draw() {
  background(220);
  if (state === "menu") { //changing states for game screens
    openScreen();
  }
  if (state === "game") {
    gameScreen();
  }

}

function mousePressed(){ // clicking mouse in button
  if (state === "menu" && mouseInButton (windowWidth/4, windowWidth*0.75, windowHeight*0.675, windowHeight*0.825)){
    state = "game";
  }
}

function mouseInButton (left, right, top, bottom){ //is mouse in button check
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function openScreen () { //start screen 
  image(palace, 0, 0, windowWidth, windowHeight);
  if (mouseInButton(windowWidth/4, windowWidth*0.75, windowHeight*0.675, windowHeight*0.825)){
    fill (200, 100, 200,);
  }
  else {
    fill (200, 100, 200, 150);
  }
  strokeWeight(4);
  rect(windowWidth/2, windowHeight*0.75, windowWidth/2, windowHeight*0.15, 20);
  if (mouseInButton(windowWidth/4, windowWidth*0.75, windowHeight*0.675, windowHeight*0.825)){
    fill ("black");
  }
  else {
    fill (50, 50, 50);
  }
  textSize( (windowHeight+windowWidth)/40);
  textStyle(BOLD);
  text("New Monarch!", windowWidth/2, windowHeight*0.75);


}

function gameScreen() {
  rectMode(CORNER);
  fill ("black");
  rect(0, windowHeight*0.9, windowWidth, windowHeight*0.1);
 
//   background(255);
//   rect(200, 200, 100, 150);
//   rect(mouseX, mouseY, 50, 75);

//   hit = collideRectRect(200, 200, 100, 150, mouseX, mouseY, 50, 75);

//   if (hit) {
//     theColor = "red";
//   }
//   else {
//     theColor = "black";
//   }
//   stroke(theColor);
//   print("colliding?", hit);
}
