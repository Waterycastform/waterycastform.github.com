// Randomized 2D grid
// Saabir Yousuf
// Oct. 26th, 2022

let ROWS = 40;
let COLUMNS = 40;
let grid;
let cellWidth;
let cellHeight;
let autoPlay = false;
let ggun;

function preload() {
  ggun = loadJSON("gosper.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2dArray(COLUMNS, ROWS);
  cellWidth = width/COLUMNS;
  cellHeight = height/ROWS;
}

function draw() {
  background(220);
  if (autoPlay && frameCount % 3 === 0) {
    grid = takeTurn(grid);
  } 
  displayGrid(grid);
}
 
  

function keyPressed() {
  if (key === "e") {
    grid = create2dArray(COLUMNS, ROWS);
  }
  if (key === " ") {
    grid = takeTurn(grid);
  }
  if (key === "a") {
    autoPlay = ! autoPlay;
  }
  if (key === "g") {
    grid = ggun;
  }
}

function takeTurn(grid) {
  let nextTurn = create2dArray(COLUMNS, ROWS);

  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLUMNS; x++) {
      let neighbours = 0;

      // look at all cells around this cell...
      for (let i = -1; i <= 1; i++) {
        for(let j = -1 ; j <= 1; j++) {
          //edge case check
          if(y + i >= 0 && y + i < ROWS && x + j >= 0 && x + j <= COLUMNS) {
            neighbours += grid[y + i][x + j];
          }
        }
      }

      // dont count self
      neighbours -=  grid[y][x];

      // apply rules
      if (grid[y][x] === 1) { // alive
        if (neighbours === 2 || neighbours === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }

      if (grid[y][x] === 0) { ///
        if (neighbours === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
    }
  }
  return nextTurn;
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

function create2dArray(COLUMNS, ROWS) {
  let emptyArray = [];
  for (let y = 0; y < ROWS; y++) {
    emptyArray.push([]);
    for (let x = 0; x < COLUMNS; x++) {
      emptyArray[y].push(0);
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
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
