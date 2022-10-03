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
}

function draw() {
  background(220);
  if (state === "menu") {
    openScreen();
  }
}

function openScreen () {
  image(palace, 0, 0, windowWidth, windowHeight);
  fill ("black");
  rect(400, 600, width - 400, height - 200);
}