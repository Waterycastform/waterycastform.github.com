// Interactive Scene
// Saabir Yousuf
// Sept. 21st, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let palace, sandringham, westminister, interior, windsor, balmoral, q1, q2, q3, q4, corgie, place, queen, parts;
let state = "menu";
let scalar = 0.75;
let imgSpeed = 5;
let pos = 500;
let corgieXArray = [];
let corgieYArray = [];
let y ;
let passedTime;
let countedTime;
// let hit = false;
// let theColor;

function preload() { // loading images
  palace = loadImage("Buckingham.jpg");
  sandringham = loadImage("sandringham-s1.webp");
  westminister = loadImage("westminister-s2.jpg");
  interior = loadImage("palaceinside-s3.png");
  windsor = loadImage("windsor-s4.jpg");
  balmoral = loadImage("balmoral-s5.jpg");
  q1 = loadImage("earlyq-1.png");
  q2 = loadImage("qcoron-2.png");
  q3 = loadImage("qjub-3.png");
  q4 = loadImage("qscot-4.png");
  corgie = loadImage("qcorgs.png")
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
    fallingCorgis();
    gameTimer();
    imageStates();
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
    fill ("gold");
  }
  else {
    fill (105, 85, 20);
  }
  textSize( (windowHeight+windowWidth)/40);
  textStyle(BOLD);
  text("New Monarch!", windowWidth/2, windowHeight*0.75);
  fill (265, 185, 20);
  textSize(windowWidth/15);
  text("The Queen's Corgis", windowWidth/2, windowHeight/4);
  passedTime = millis();
  return passedTime;
}

function gameTimer() { 
  rectMode(CORNER);
  textAlign(LEFT, BOTTOM);
  stroke(255, 204, 0);
  fill(200, 100, 200,);
  rect(0, 0, windowWidth/8, windowHeight/10);
  currentTime = millis() - passedTime;
  fill("black");
  textSize(windowWidth/35)
  text("Age : " + int(currentTime/1000), 0, windowHeight/12);
}

function imageStates() {
  currentTime = millis() - passedTime;
  if (int(currentTime/1000) <= 25){
    queen = q1;
    place = sandringham;
    return [queen, place];
  }
  else if (int(currentTime/1000) <= 50){
    queen = q2;
    place = westminister;
    return [queen, place]; 
  }
  else if (int(currentTime/1000) <= 75){
    queen = q3;
    place = interior;
    return [queen, place];
  }
  else{
    queen = q4;
    place = windsor;
    return [queen, place];ad
  }
}

function gameScreen() {
  parts = imageStates();
  gameTimer();
  movingKeys();
  image(parts[1], 0, 0, windowWidth, windowHeight);
  rectMode(CORNER);
  stroke(65,65,40);
  fill (165,165,140);
  rect(0, windowHeight*0.9, windowWidth, windowHeight*0.1);
  image(parts[0], pos, windowHeight*0.9 - q1.height*scalar, q1.width*scalar, q1.height*scalar);
  if (millis()/1000 >= 97){
    state = "end";
  }
 
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

function movingKeys() { //character moving
  if (keyIsDown(68)) {
    if (pos+q1.width <=  windowWidth) {
      pos += imgSpeed;
    }
  }
  if (keyIsDown(65)) {
    if (pos >= 0) {
      pos -= imgSpeed;
    }
  }
}

function mouseClicked(){
  randomCorgie;
}


function fallingCorgis() {
  y+=5;
  for (let i = corgieXArray.length; i > 0; i --){
    let corgiex = corgieXArray[i-1];
    let corgiey = y-corgieYArray[i-1]-100;
    image(corgie,corgiex,corgiey,50,50);
    if (y-corgieYArray[i-1]-100> windowHeight){
      corgieXArray=corgieXArray.slice(1);
      corgieYArray=corgieYArray.slice(1);
    }
 
  }
}

function randomCorgie() {
  corgieXArray.push(random(0,windowWidth));
  corgieYArray.push(y-40);
  console.log(y)
}
