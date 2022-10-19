// Perlin Noise Demo
// Saabir Yousuf
// Oct. 19th, 2022

let moreCircles = [];

function keyPressed() {
  let circles = {
    x: random(width),
    y: random(height),
    diameter: random(50, 100),
    time: random(5000),
  };

  moreCircles.push(circles);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill("black");
  for (let i = 0; i < moreCircles.length; i++){
    moreCircles[i].x = noise(moreCircles[i].time)*width;
    moreCircles[i].y = noise(moreCircles[i].time)*height;

    moreCircles[i].time = 0.01;
    circle(moreCircles[i].x, moreCircles[i].y, moreCircles[i].diameter);
  }
}
