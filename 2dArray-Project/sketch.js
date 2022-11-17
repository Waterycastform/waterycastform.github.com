// 2d Array Project
// Saabir Yousuf
// Oct 31st, 2022
//
// Extra for Experts:
// - Use of OOP to create individual cell objects
// - Using a maze alogrythm (depth first-search, recursive backtracking)


// global variables
let cols, rows;
let cellWidth = 25;
let mazeSize = 500;
let current;
let grid;
let neighbour;
let stack = [];
let mazeDone = false;
let endSound;

//loading sound for when maze is donw
function preload() {
  endSound = loadSound("bing.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // setting row and column values
  cols = floor(mazeSize/cellWidth);
  rows = floor(mazeSize/cellWidth);

  //Creates the 2d array which will be used to make the maze
  createMazeArray();

  // setting the current to the top left cell
  current = grid[0][0];
}

function draw() {
  background(220);
  titleText();

  // displays cells inside the 2d array
  displayGrid();

  //sets current cell as visited
  current.visited = true;

  // runs through maze algorythm to create the final maze
  goNextCell();
}


// creating Cell class
class Cell {
  constructor(i, j){
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;
  }

  // grid is displayed with individual lines ("walls") which can be removed based on how maze is formed
  show() {
    let x = width/2 - mazeSize/2 + this.i*cellWidth;
    let y = height/1.2 - mazeSize/1.2 + this.j*cellWidth;
    stroke("black");
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

    // turnes cell red if visited, just for visuals
    if (this.visited) {
      noStroke();
      fill(255, 0, 0, 50);
      rect(x, y, cellWidth, cellWidth,);
    }
  
  }

  checkNeighbours() {
    // local variables
    let neighbours = [];
    let top;
    let right;
    let bottom;
    let left;

    // checking top, right, bottom, left neighbours for current cell
    // if statments check for edge cases
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
  

    // pushing neighbours into neigbours array
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

    // choosing random neighbour for next move
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

  // displays each cell
  for (let j = 0; j < grid.length; j++) {
    for (let i = 0; i < grid[j].length; i++ ) {
      grid[j][i].show();
    }
  }
}

function createMazeArray() {

  // creates 2d array and returnes completed array
  grid = [];
  for (let j = 0; j < rows; j++) {
    grid.push([]);
    for (let i = 0; i < cols; i++){
      // pushing new cell into the inner array, same i/j values
      let cell = new Cell(j, i);
      grid[j].push(cell);
    }
  }
  return grid;
}

function goNextCell() {
  // setting neighbour to chosen neighbour
  chosenNeighbour = current.checkNeighbours();
  if (chosenNeighbour) {
    // setting neighbour to next current, removing walls between current and neighbour
    chosenNeighbour.visited = true;
    // pushing neighbour onto stack for back tracking
    stack.push(current);
    removeWalls(current, chosenNeighbour);
    current = chosenNeighbour;
  }

  // if no neighbours, go back through stack until a cell is found with unvisited neighbours
  else if (stack.length > 0) {
    current = stack.pop();
  }

  // when maze is done
  else {
    mazeDone = true;
  }
}

function removeWalls(current, next) {

  // x/y value determines where the next cell is
  let x = current.i - next.i;
  let y = current.j - next.j; 

  // if statements decide which walls need to be removed based on where the neighbour is
  if (x === 1) {
    current.walls[3] = false;
    next.walls[1] = false;
  }

  else if (x === -1) {
    current.walls[1] = false;
    next.walls[3] = false;
  }

  if (y === 1) {
    current.walls[0] = false;
    next.walls[2] = false;
  }

  else if (y === -1) {
    current.walls[2] = false;
    next.walls[0] = false;
  }

}

function titleText() {
  if  (!mazeDone) {
    // Title
    textAlign(CENTER, CENTER);
    textSize(50);
    fill("black");
    text("Random Maze Generator", windowWidth/2, windowHeight/5); 
  }
  
  else if (mazeDone) {
    // Maze finished notification
    textSize(70);
    fill("green");
    text("Done!", windowWidth/2, windowHeight/5);
    if (!endSound.isPlaying()) {
      endSound.play();
    }
  }
}