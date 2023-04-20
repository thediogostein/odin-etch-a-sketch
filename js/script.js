const container = document.querySelector(".container");

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

// const square = document.querySelectorAll(".square");

// let clickEvent = () => {
//   console.log("Gotcha");
// };

// square.forEach((item) => {
//   item.addEventListener("mouseover", clickEvent);
// });

const square = document.querySelectorAll(".square");

const squareColorChange = (e) => {
  e.target.style.backgroundColor = "red";
};

square.forEach((item) => {
  item.addEventListener("mouseover", squareColorChange);
});
