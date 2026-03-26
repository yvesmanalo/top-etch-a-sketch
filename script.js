const gridContainer = document.querySelector("#grid-container");
const gridDimensions = 16 * 16;

let i = 1;
while (i <= gridDimensions) {
  const individualBox = document.createElement("div");
  individualBox.setAttribute("class", "box");
  const innerBox = document.createElement("div");
  innerBox.setAttribute("class", "inner-box");
  individualBox.appendChild(innerBox);

  gridContainer.appendChild(individualBox);
  i += 1;
  if (i === gridDimensions + 1) {
    break;
  }
}
