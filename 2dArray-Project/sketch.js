// 2d Array Project
// Saabir Yousuf
// Oct 31st, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 10;
const COLUMNS = 10;
let grid;
let cellWidth;
let cellHeight;
let current;
let visited;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2dArray();
  cellWidth = width/COLUMNS;
  cellHeight = height/ROWS;
  current = grid[0][0];
  console.log(current);
}

function draw() {
  background(220);
  displayGrid();
}


function displayGrid() {
  walls = [true, true, true, true];
  
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (walls[0]){
        line(x*cellWidth, y*cellHeight, x*cellWidth + cellWidth, y*cellHeight);
      }
      if (walls[1]){
        line(x*cellWidth + cellWidth, y*cellHeight, x*cellWidth + cellWidth, y*cellHeight + cellHeight);
      }
      if (walls[2]){
        line(x*cellWidth + cellWidth, y*cellHeight + cellHeight, x*cellWidth, y*cellHeight + cellHeight);
      }
      if (walls[3]){
        line(x*cellWidth, y*cellHeight + cellHeight, x*cellWidth, y*cellHeight);
      }
      if (grid[y][x] === current) {
        fill("red");
        rect(x*windowWidth, y*windowHeight, windowWidth, windowHeight);
      }
    }
  }
  
}

function createRandom2dArray() {
  let emptyArray = [];
  for (let y = 0; y < ROWS; y++) {
    emptyArray.push([]);
    for (let x = 0; x < COLUMNS; x++) {
      emptyArray[y].push(x);
    }
  }
  return emptyArray;
}
  
