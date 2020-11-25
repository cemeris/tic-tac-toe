let cells = document.querySelectorAll(".board td");

for (let cell of cells) {
  cell.addEventListener("click", function () {
    console.log("test");
  });
}
