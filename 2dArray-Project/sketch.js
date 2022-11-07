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

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2dArray();
  cellWidth = width/COLUMNS;
  cellHeight = height/ROWS;
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
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

function createRandom2dArray() {
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
