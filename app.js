class WaterFireGame {
  constructor() {
    this.image = ["img/firefighter.avif", "img/fire.jpg", "img/water.webp"];
    this.body = document.querySelector("body");
    this.icons = document.querySelectorAll(".cell");
    this.fire = document.querySelector(".fire");
    this.firealarm = document.querySelector("h2");
    this.count = document.querySelector(".stepCounter");
    this.mainArray = [...this.icons];
    this.randomWater = this.getRandomIndex();
    this.randomFire = this.getRandomIndex();
    this.stepCounter = 0;
    this.counterBackgrouns = 0;

    this.restartbutton = document.querySelector("button");
    this.restartbutton.disabled = true;
    this.restartbutton.addEventListener("click", () => {
      location.reload();
    });

    this.interval = setInterval(() => {
      this.body.style.backgroundImage = `url(${
        this.image[(this.counterBackgrouns + 1) % this.image.length]
      })`;
      this.counterBackgrouns++;
    }, 3000);

    while (this.randomWater === this.randomFire) {
      this.randomFire = this.getRandomIndex();
    }

    this.randomSpotWater = this.mainArray[this.randomWater];
    this.randomSpotFire = this.mainArray[this.randomFire];

    this.randomSpotWater.classList.add("water", "bi", "bi-droplet");
    this.randomSpotFire.classList.add("fire", "bi", "bi-fire");

    this.row = this.getrow(this.randomWater);
    this.fireRow = this.getrow(this.randomFire);
    this.col = this.getCol(this.randomWater);
    this.firecol = this.getCol(this.randomFire);

    document.addEventListener("keydown", this.moveWater.bind(this));
  }

  getRandomIndex() {
    return Math.floor(Math.random() * this.mainArray.length);
  }

  getrow(index) {
    return Math.floor(index / 4) + 1;
  }

  getCol(index) {
    return (index % 4) + 1;
  }
  restartgame() {}

  moveWater(event) {
    switch (event.key) {
      case "ArrowUp":
        if (this.row > 1) {
          this.row--;
          this.stepCounter++;
        }
        break;
      case "ArrowDown":
        if (this.row < 4) {
          this.row++;
          this.stepCounter++;
        }
        break;
      case "ArrowLeft":
        if (this.col > 1) {
          this.col--;
          this.stepCounter++;
        }
        break;
      case "ArrowRight":
        if (this.col < 4) {
          this.col++;
          this.stepCounter++;
        }
        break;
    }
    console.log(this.stepCounter);

    this.randomSpotWater.style.gridRow = this.row;
    this.randomSpotWater.style.gridColumn = this.col;
    this.randomSpotFire.style.gridRow = this.fireRow;
    this.randomSpotFire.style.gridColumn = this.firecol;

    if (this.col === this.firecol && this.row === this.fireRow) {
      this.randomSpotFire.style.gridRow = "";
      this.randomSpotFire.style.gridColumn = "";
      this.randomSpotFire.classList.remove("fire", "bi", "bi-fire");
      this.randomFire = this.getRandomIndex();
      this.firealarm.innerHTML = `"congrats you put out fire in ${this.stepCounter} moves"`;
      this.firealarm.style.color = "green";
      this.stepCounter = 0;
      this.restartbutton.disabled = false;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new WaterFireGame();
});
