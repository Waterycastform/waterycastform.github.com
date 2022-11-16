// 2d Array Project
// Saabir Yousuf
// Oct 31st, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cols, rows;
let cellWidth = 25;
let mazeSize = 500
let current;
let grid;
let neighbour;
let stack = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(mazeSize/cellWidth);
  rows = floor(mazeSize/cellWidth);

  createMazeGrid();

  current = grid[0][0];
}

function draw() {
  background(220);
  displayGrid();

  current.visited = true;

  goNextCell();
  
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
    let x = (width/2) - (mazeSize/2) + (this.i*cellWidth);
    let y = 200 + (this.j*cellWidth);

    // top wall
    if (this.walls[0]){
      line(x, y, x+cellWidth, y);
    }

    //right wall
    if (this.walls[1]){
      line(x+cellWidth, y, x+cellWidth, y+cellWidth);
    }

    //bottom wall
    if (this.walls[2]){
      line(x+cellWidth, y+cellWidth, x, y+cellWidth);
    }

    //left wall
    if (this.walls[3]){
      line(x, y+cellWidth, x, y);
    }
    
  }

checkNeighbours() {
  let neighbours = [];
  let top;
  let right;
  let bottom;
  let left;

  if (this.j - 1 >= 0) {
    top = grid[this.i][this.j-1];
  }
  
  if (this.i + 1 <= cols - 1) {
    right = grid[this.i+1][this.j];
  }
  
  if (this.j + 1 <= rows - 1) {
    bottom = grid[this.i][this.j+1];
  }
  
  if (this.i - 1 >= 0) {
    left = grid[this.i-1][this.j];
  }
  

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

  if (neighbours.length > 0) {
    let nextMove = floor(random(0, neighbours.length));
    return neighbours[nextMove];
  }

  else {
    return undefined;
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
  grid = []
  for (let j = 0; j < rows; j++) {
    grid.push([]);
    for (let i = 0; i < cols; i++){
      let cell = new Cell(j, i);
      grid[j].push(cell);
    }
  }
  return grid;
}

function goNextCell() {
  neighbour = current.checkNeighbours();
  if (neighbour) {
    neighbour.visited = true;
    stack.push(current);
    removeWalls(current, neighbour);
    current = neighbour;

  }

  else if (stack.length > 0) {
    current = stack.pop();
  }
}

function removeWalls(a, b) {
  let x = a.i - b.i;
  let y = a.j - b.j; 

  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  }

  else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  }

  else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }

}