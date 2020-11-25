let cells = document.querySelectorAll(".board td");
let active_player = "player-x";

for (let cell of cells) {
  cell.addEventListener("click", function () {
    if (
      !cell.classList.contains("player-x") &&
      !cell.classList.contains("player-o")
    ) {
      cell.classList.add(active_player);

      if (active_player == "player-x") {
        active_player = "player-o";
      } else {
        active_player = "player-x";
      }
    }
  });
}
