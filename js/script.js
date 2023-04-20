const container = document.querySelector(".container");
const btnConfirm = document.querySelector("#btnConfirm");
const inGridSize = document.querySelector("#grid-size");
const btnReset = document.querySelector("#btnReset");

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

btnReset.addEventListener("click", () => {
  container.innerHTML = "";
  createRows(16);
  square = document.querySelectorAll(".square");
  addSquareEvent();
  inGridSize.value = "16";
});

let square = document.querySelectorAll(".square");

btnConfirm.addEventListener("click", () => {
  container.innerHTML = "";
  createRows(inGridSize.value);
  square = document.querySelectorAll(".square");
  addSquareEvent();
});

const squareColorChange = (e) => {
  e.target.style.backgroundColor = "red";
};

function addSquareEvent() {
  square.forEach((item) => {
    item.addEventListener("mouseover", squareColorChange);
  });
}
addSquareEvent();
