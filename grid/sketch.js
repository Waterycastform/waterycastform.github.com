// Basic Grid Demo
// Saabir Yousuf
// Oct. 25th, 2022

let grid = [[0, 0, 1,], [1, 0, 1], [0, 1, 0]];
let cellHeight;
let cellWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width / grid[0].length;
  cellHeight =  height / grid.length;
}



function draw() {
  background(220);
  displayGrid(grid);
}

function mousePressed() {
  let x = Math.floor(mouseX/cellWidth);
  let y = Math.floor(mouseY/cellHeight);

  if (grid[y][x] === 0) {
    grid[y][x] = 1;
  }
  else if (grid[y][x] === 1) {
    grid[y][x] = 0;
  }
}

function displayGrid(grid) { 
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++ ) {
      if (grid[y][x] === 0) {
        fill ("white");
      }
      else if (grid[y][x] === 1) {
        fill ("black");
      }
      rect (x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

