const gridSizeInputField = document.querySelector("#input");
const gridContainer = document.querySelector("#grid-container");
const setGridSizeBtn = document.querySelector("#set-grid-size-btn");
const resetGridBtn = document.querySelector("#reset-grid-btn");
let gridDimensions = 0;

gridSizeInputField.addEventListener("input", () => {
  gridDimensions = gridSizeInputField.value;
});

setGridSizeBtn.addEventListener("click", () => {
  resetGrid();
  setGrid();
  onGridMouseOVer();
});

resetGridBtn.addEventListener("click", () => resetGrid());

const setGrid = () => {
  if (gridDimensions > 100 || gridDimensions <= 0) {
    alert("Please provide a number between 1 to 100 only");
    resetGrid();
    return;
  }
  const gridDimensionsSquared = gridDimensions ** 2;

  let i = 1;
  while (i <= gridDimensionsSquared) {
    const individualBox = document.createElement("div");
    individualBox.setAttribute("class", "box");
    individualBox.style.width = `calc(600px / ${Math.sqrt(gridDimensionsSquared)})`;
    individualBox.style.height = `calc(600px / ${Math.sqrt(gridDimensionsSquared)})`;
    const innerBox = document.createElement("div");
    innerBox.setAttribute("class", "inner-box");
    individualBox.appendChild(innerBox);
    gridContainer.appendChild(individualBox);
    i += 1;
    if (i === gridDimensions + 1) {
      break;
    }
  }
};

const onGridMouseOVer = () => {
  const gridCollection = [...gridContainer.children];

  let op = 0;
  gridCollection.map((childDiv) =>
    childDiv.lastElementChild.addEventListener("mouseover", () => {
      childDiv.lastElementChild.style.backgroundColor = "black";
      childDiv.lastElementChild.style.opacity = op + 0.01;
      op += 0.01;
    }),
  );
};

const resetGrid = () => {
  gridContainer.innerHTML = "";
  gridSizeInputField.value = "";
};
