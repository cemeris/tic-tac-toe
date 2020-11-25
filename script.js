let cells = document.querySelectorAll(".board td");

for (let cell of cells) {
  cell.addEventListener("click", function () {
    cell.classList.add("player-x");
  });
}
