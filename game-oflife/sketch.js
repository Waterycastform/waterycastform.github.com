// Randomized 2D grid
// Saabir Yousuf
// Oct. 26th, 2022

let ROWS = 10;
let COLUMNS = 10;
let grid;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2dArray(COLUMNS, ROWS);
  cellWidth = width/COLUMNS;
  cellHeight = height/ROWS;
}

function draw() {
  background(220);
  displayGrid(grid);
}

function displayGrid(grid) {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLUMNS; x++) {
      if (grid[y][x] === 0) {
        fill ("white");
      }
      else if (grid[y][x] === 1){
        fill ("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createRandom2dArray(COLUMNS, ROWS) {
  let emptyArray = [];
  for (let y = 0; y < ROWS; y++) {
    emptyArray.push([]);
    for (let x = 0; x < COLUMNS; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function mousePressed() {
  let xP = Math.floor(mouseX/cellWidth);
  let yP = Math.floor(mouseY/cellHeight);

  if (grid[yP][xP] === 1) {
    grid[yP][xP] = 0;
  }
  else if (grid[yP][xP] === 0) {
    grid[yP][xP] = 1;
  }
  
} 
