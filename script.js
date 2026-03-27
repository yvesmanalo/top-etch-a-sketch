const gridSizeInputField = document.querySelector("#input");
const gridContainer = document.querySelector("#grid-container");
const setGridSizeBtn = document.querySelector("#set-grid-size-btn");
let gridDimensions = 0;

gridSizeInputField.addEventListener("input", (e) => {
  gridDimensions = e.target.value ** 2;
});

setGridSizeBtn.addEventListener("click", () => {
  gridContainer.innerHTML = "";
  let i = 1;
  while (i <= gridDimensions) {
    const individualBox = document.createElement("div");
    individualBox.setAttribute("class", "box");
    individualBox.style.width = `calc(500px / ${Math.sqrt(gridDimensions)})`;
    individualBox.style.height = `calc(500px / ${Math.sqrt(gridDimensions)})`;
    const innerBox = document.createElement("div");
    innerBox.setAttribute("class", "inner-box");
    individualBox.appendChild(innerBox);
    gridContainer.appendChild(individualBox);
    i += 1;
    if (i === gridDimensions + 1) {
      break;
    }
  }
});
