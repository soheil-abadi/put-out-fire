document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".cell");
  const water = document.querySelector(".water");
  const fire = document.querySelector(".fire");
  let mainarr = [...icons];
  mainarr.forEach(function (icon) {
    icon.addEventListener("click", function () {
      const currentRow = parseInt(icon.style.gridRow);
      const currentCol = parseInt(icon.style.gridColumn);

      let randomRow, randomCol;

      do {
        randomRow = Math.floor(Math.random() * 3) + 1;
        randomCol = Math.floor(Math.random() * 3) + 1;
      } while (randomRow === currentRow && randomCol === currentCol);

      icon.style.gridRow = randomRow;
      icon.style.gridColumn = randomCol;
      icon.classList.add("water");
    });
  });

  //   console.log(row);
  //   function moveWater(event) {
  //     switch (event.key) {
  //       case "ArrowUp":
  //         if (row > 0) {
  //           row--;
  //         }
  //         break;
  //       case "ArrowDown":
  //         if (row < 2) {
  //           row++;
  //         }
  //         break;
  //       case "ArrowLeft":
  //         if (col > 0) {
  //           col--;
  //         }
  //         break;
  //       case "ArrowRight":
  //         if (col < 2) {
  //           col++;
  //         }
  //         break;
  //     }

  //     water.style.gridRow = row + 1;
  //     water.style.gridColumn = col + 1;
  //   }

  //   document.addEventListener("keydown", moveWater);
});
