// 2d Array Project
// Saabir Yousuf
// Oct 31st, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 50;
const COLUMNS = 50;
let grid;
let cellWidth;
let cellHeight;
let playerX = 0;
let playerY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2dArray();
  cellWidth = width/COLUMNS;
  cellHeight = height/ROWS;
  grid[playerX][playerY] = 2;
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (grid[playerY][playerX+1] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerX++;

      //set new player location
      grid[playerY][playerX] = 2;
    }
  }

  if (keyCode === LEFT_ARROW) {
    if (grid[playerY][playerX-1] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerX--;

      //set new player location
      grid[playerY][playerX] = 2;
    }
  }

  if (keyCode === UP_ARROW) {
    if (grid[playerY-1][playerX] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerY--;

      //set new player location
      grid[playerY][playerX] = 2;
    }
  }

  if (keyCode === DOWN_ARROW) {
    if (grid[playerY+1][playerX] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerY++;

      //set new player location
      grid[playerY][playerX] = 2;
    }
  }
}

function displayGrid() {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLUMNS; x++) {
      if (grid[y][x] === 0) {
        fill ("white");
      }
      else if (grid[y][x] === 2){
        fill ("red");
      }
      noStroke();
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createRandom2dArray() {
  let emptyArray = [];
  for (let y = 0; y < ROWS; y++) {
    emptyArray.push([]);
    for (let x = 0; x < COLUMNS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}
  
