// Interactive Scene
// Saabir Yousuf
// Sept. 21st, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let palace;

function preLoad() {
  palace = loadImage("Buckingham.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  openScreen();
}

function draw() {
  background(220);
}

function openScreen () {
  Image (palace, windowWidth, windowHeight);
}