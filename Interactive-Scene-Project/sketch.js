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
  }
}

function openScreen () {
  image(palace, 0, 0, windowWidth, windowHeight);
  fill (200, 100, 200, 150);
  strokeWeight(4);
  rect(windowWidth/2, windowHeight*0.75, windowWidth/2, windowHeight*0.15, 20);
  fill("black");
  textSize( (windowHeight+windowWidth)/40);
  textStyle(BOLD);
  text("New Monarch!", windowWidth/2, windowHeight*0.75);

}