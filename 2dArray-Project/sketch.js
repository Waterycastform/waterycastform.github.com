// 2d Array Project
// Saabir Yousuf
// Oct 31st, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cols, rows;
let w = 40;
let grid = []
let current;


function setup() {
  createCanvas(400, 400);
  cols = floor(width/w);
  rows = floor(height/w);

  createMazeGrid();
  console.log(grid);

  current = grid[0][0];
}

function draw() {
  background(220);
  displayGrid();

  current.visited = true;
  current.checkNeighbours();
  console.log(neighbours);
}


// creating cell class
class Cell {
  constructor(i, j){
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;
  }

  show() {
    let x = this.i*w;
    let y = this.j*w;

    // top wall
    if (this.walls[0]){
      line(x, y, x+w, y);
    }

    //right wall
    if (this.walls[1]){
      line(x+w, y, x+w, y+w);
    }

    //bottom wall
    if (this.walls[2]){
      line(x+w, y+w, x, y+w);
    }

    //left wall
    if (this.walls[3]){
      line(x, y+w, x, y);
    }
    
    if (this.visited) {
      fill(255, 0, 0, 100);
      rect(x, y, w, w);
    }
  }

checkNeighbours() {
  let neighbours = [];

  let top = grid[i][j-1];
  let right = grid[i+1][j];
  let bottom = grid[i][j+1];
  let left = grid[i=1][j];

  if (top && !top.visited) {
    neighbours.push(top);
    } 
  if (right && !right.visited) {
    neighbours.push(right);
    } 
  if (bottom && !bottom.visited) {
    neighbours.push(bottom);
    } 
  if (left && !left.visited) {
    neighbours.push(left);
   } 

  }
}

function displayGrid() {
  for (let j = 0; j < grid.length; j++) {
    for (let i = 0; i < grid[j].length; i++ ) {
      grid[j][i].show();
    }
  }
}

function createMazeGrid() {
  for (let j = 0; j < rows; j++) {
    grid.push([]);
    for (let i = 0; i < cols; i++){
      let cell = new Cell(i, j);
      grid[j].push(cell);
    }
  }
}
