const container = document.querySelector(".container");
const btnConfirm = document.querySelector("#btnConfirm");
const gridSize = document.querySelector("#grid-size");

function createRows(n) {
  for (let i = 0; i < n; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < n; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
  }
}

createRows(16);

let square = document.querySelectorAll(".square");

btnConfirm.addEventListener("click", () => {
  container.innerHTML = "";
  createRows(gridSize.value);
  square = document.querySelectorAll(".square");
  square.forEach((item) => {
    item.addEventListener("mouseover", squareColorChange);
  });
});

const squareColorChange = (e) => {
  e.target.style.backgroundColor = "red";
};

square.forEach((item) => {
  item.addEventListener("mouseover", squareColorChange);
});
