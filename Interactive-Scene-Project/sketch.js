// Interactive Scene
// Saabir Yousuf
// Sept. 21st, 2022
//
// Extra for Experts:
// - Experimenting with sounds and playing them during events

// setting up all variables
let palace, sandringham, westminister, interior, windsor, balmoral, q1, q2, q3, q4, corgie, place, queen, r, g, b, parts, pos, passedTime, countedTime, someTime, corgiex, corgiey, bark, anthem;
let state = "menu";
let scalar = 0.75;
let imgSpeed = 7;
let corgieXArray = [];
let corgieYArray = [];
let y =0;
let dropCorgie = false;
let hit = false;
let score = 0;

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
  corgie = loadImage("qcorgs.png");
  bark = loadSound("bark.mp3");
  anthem = loadSound("god-save-the-queen.mp3");
}


function setup() {
  countedTime = millis() - passedTime;
  someTime = random(200, 1500);
  pos = windowWidth/2;
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  anthem.setVolume(2);
  bounce.setVolume(1);
  anthem.loop();
}

function draw() {
  background(220);

  //changing states for game screens
  if (state === "menu") { 
    openScreen();
  }
  if (state === "game") {
    gameScreen();
    fallingCorgis();
    gameTimer();
    imageStates();
    catchCorgie();
    scoreCount();
  }
  if (state === "end") {
    endScreen();
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

  // button highlights when mouse is over it
  if (mouseInButton(windowWidth/4, windowWidth*0.75, windowHeight*0.675, windowHeight*0.825)){ 
    fill (200, 100, 200,);
  }
  else {
    fill (200, 100, 200, 150);
  }
  strokeWeight(4);
  rect(windowWidth/2, windowHeight*0.75, windowWidth/2, windowHeight*0.15, 20);


  // changine text color when mouse hovers
  if (mouseInButton(windowWidth/4, windowWidth*0.75, windowHeight*0.675, windowHeight*0.825)){ 
    fill ("gold");
  }
  else {
    fill (105, 85, 20);
  }
  textSize( (windowHeight+windowWidth)/40);
  textStyle(BOLD);
  text("New Monarch!", windowWidth/2, windowHeight*0.75);


  // screen title
  fill (265, 185, 20); 
  textSize(windowWidth/15);
  text("The Queen's Corgis", windowWidth/2, windowHeight/4);

  // counting the millis past for game screen timer
  passedTime = millis(); 
  return passedTime;
}


function gameTimer() { // making the age counter/timer for the game screen
  // timer box
  rectMode(CORNER);
  textAlign(LEFT, BOTTOM);
  stroke(255, 204, 0);
  fill(200, 100, 200);
  rect(0, 0, windowWidth/8, windowHeight/10);

  // printing time/age elapsed after game starts
  fill("black");
  countedTime = millis() - passedTime;
  textSize(windowWidth/35);
  text("Age: " + int(countedTime/1000), windowWidth*0.01, windowHeight/12);
}

function scoreCount(){
  // score box
  fill(200, 100, 200);
  stroke(255, 204, 0);
  rect(windowWidth*0.8, 0, windowWidth*0.8, windowHeight/10);
  
  // printing score
  fill("black");
  textSize(windowWidth/35);
  text("Corgies: " + score, windowWidth*0.82, windowHeight/12);
}


function imageStates() { //backround and charater images change after certain age/time
  
  if (int(countedTime/1000) <= 25){
    queen = q1;
    place = sandringham;
    r = 140;
    g = 190;
    b = 90;
    return [queen, place, r, g, b];
  }
  else if (int(countedTime/1000) <= 50){
    queen = q2;
    place = westminister;
    r = 180;
    g = 170;
    b = 100;
    return [queen, place, r, g, b]; 
  }
  else if (int(countedTime/1000) <= 75){
    queen = q3;
    place = interior;
    r = 140;
    g = 20;
    b = 20;
    return [queen, place, r, g, b];
  }
  else{
    queen = q4;
    place = windsor;
    r = 130;
    g = 140;
    b = 150;
    return [queen, place, r, g, b];
  }
}


function gameScreen() {
  //calling funtions
  parts = imageStates();
  gameTimer();
  movingKeys();

  //displaying images
  image(parts[1], 0, 0, windowWidth, windowHeight);
  image(parts[0], pos, windowHeight*0.9 - q1.height*scalar, q1.width*scalar, q1.height*scalar);
  fill(0,0);
  noStroke();
  rect(pos, windowHeight*0.9 - q1.height*scalar, q1.width*scalar, q1.height*scalar);

  //game floor
  rectMode(CORNER);
  stroke(65,65,40);
  fill (parts[2], parts[3], parts[4]);
  rect(0, windowHeight*0.9, windowWidth, windowHeight*0.1);

  //corgis falling after some random time
  if (countedTime > someTime){
    randomCorgie();
    someTime = countedTime + random(200, 1500);
  }

  // ending game after death age
  if (countedTime/1000 >= 97){
    state = "end";
  }
 
}

function movingKeys() { //character moving with keys
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


function fallingCorgis() { // CREDIT TO BEN S., modified by me, makes the corgis fall
  y+=5;
  for (let i = corgieXArray.length; i > 0; i --){
    corgiex = corgieXArray[i-1];
    corgiey = y-corgieYArray[i-1]-100;
    fill(0,0);
    noStroke();
    rect(corgiex, corgiey, 75, 75);
    image(corgie,corgiex,corgiey,75,75);
    if (y-corgieYArray[i-1]-100> windowHeight*0.8){
      corgieXArray=corgieXArray.slice(1);
      corgieYArray=corgieYArray.slice(1);
    }
 
  }
}

function randomCorgie() { // CREDIT TO BEN S., creates corgis in the array
  corgieXArray.push(random(0,windowWidth));
  corgieYArray.push(y-40); 
}

function catchCorgie(){ //gets rid of corgie, adds score, plays bark
  hit = collideRectRect(corgiex, corgiey, 75, 75, pos, windowHeight*0.9 - q1.height*scalar, q1.width*scalar, q1.height*scalar);
  
  if (hit){
    corgieXArray=corgieXArray.slice(1);
    corgieYArray=corgieYArray.slice(1);
    score++;
    bark.play();
  }
}

function endScreen() { // end screen page
  textAlign(CENTER, CENTER);
  image(balmoral, 0, 0, windowWidth, windowHeight);
  fill(0, 200);
  rect(windowWidth/8, windowHeight/6, windowWidth/8*6, windowHeight/6*4 );
  fill(0);
  textSize(50);
  text("The Queen is dead! Long live the King!", windowWidth/2, windowHeight/3);
  fill("red");
  textSize(30);
  text("You have collected " + score + " Corgies!", windowWidth/2, windowHeight/2);
  text("Refresh the page to try again.", windowWidth/2, windowHeight*0.66);
}
