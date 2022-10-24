// Terrain Generation
// Saabir Yousuf
// Oct. 21t 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theHeights = [];
let startLocation = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theHeights = generateHeights(20000);
}

function draw() {
  background(220);
  for (let i = startLocation; i < startLocation + windowWidth; i++) {
    displayRect(i-startLocation, theHeights[i], 1);
  }

  if (keyIsPressed) {
    startLocation++;
  }
}

function displayRect(x, rectHeight, rectWidth) {
  let y = height - rectHeight;
  noStroke();
  fill("black");
  rect(x, y, rectWidth, rectHeight);
}

function generateHeights(howMany) {
  let tempArray =  [];
  let time = random(12000);
  for (let i = 0; i < howMany; i++) {
    tempArray.push(noise(time)*windowHeight);
    time += 0.0015;
  }
  return tempArray;
}