const gridContainer = document.getElementById('gridContainer');

// default grid dimension and color
let gridUnits = 20;
let colorState = 0;

createGrid();


// create grid

function createGrid() {
  gridContainer.style.gridTemplateColumns = `repeat(${gridUnits}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridUnits}, 1fr)';`

  for (let i = 0; i < (gridUnits ** 2); i++) {
    let newGrid = document.createElement('div');
    gridContainer.appendChild(newGrid).className = 'cell';
    newGrid.style.backgroundColor = 'white';
    newGrid.style.filter = "";
    newGrid.addEventListener("mouseover", changeColor);
  }

}


// reset button

const resetButton = document.getElementById('resetBtn');

resetButton.addEventListener('click', resetGrid);

function resetGrid() {
  gridContainer.innerHTML = "";
  createGrid();

}


// resize button

const resizeButton = document.getElementById('resizeBtn');
resizeButton.addEventListener('click', changeSize);

function changeSize() {
  gridUnits = prompt("Choose new grid dimension. The value must be between 1 and 99");
    if (gridUnits !== null && Number(gridUnits) >= 1 && Number(gridUnits) <= 99) {
      resetGrid();
      return;
    }
    // return to grid if "cancel" is clicked
    if (gridUnits == null) {
      return;
    }
    else {
      alert("Please only enter numbers higher than 1 and less than 100")
      changeSize();
      return;
    }
}


// changing colors

const colorBlack = document.getElementById('colorBlack');
const colorRainbow = document.getElementById('colorRainbow');
const lowerBrightness = document.getElementById('lowerBrightness');

function changeColor(e) {
  if (colorState == 0) {
    this.style.backgroundColor = "hsla(0, 0%, 0%, 1)";
    }

  if (colorState == 1) {
    this.style.backgroundColor = "hsla(" + Math.floor(Math.random() * 360) + ", 50%, 50%, 1)"
    this.style.filter = "";
  }

  else {
    if (this.style.filter == "") {
      this.style.filter = "brightness(90%)";
      return;
    }
    if (this.style.filter == "brightness(90%)") {
      this.style.filter = "brightness(80%)";
      return;
    }
    if (this.style.filter == "brightness(80%)") {
      this.style.filter = "brightness(70%)";
      return;
    }
    if (this.style.filter == "brightness(70%)") {
      this.style.filter = "brightness(60%)";
      return;
    }
    if (this.style.filter == "brightness(60%)") {
      this.style.filter = "brightness(50%)";
      return;
    }
    if (this.style.filter == "brightness(50%)") {
      this.style.filter = "brightness(40%)";
      return;
    }
    if (this.style.filter == "brightness(40%)") {
      this.style.filter = "brightness(30%)";
      return;
    }
    if (this.style.filter == "brightness(30%)") {
      this.style.filter = "brightness(20%)";
      return;
    }
    if (this.style.filter == "brightness(20%)") {
      this.style.filter = "brightness(10%)";
      return;
    }
    if (this.style.filter == "brightness(10%)") {
      this.style.filter = "brightness(0%)";
      return;
    }
  }

}