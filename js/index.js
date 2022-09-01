function displayNav() {
  let links = document.querySelector("#links");
  let grid = document.querySelector(".grid-container");
  let today = document.querySelector(".todaysRecipe");

  if (links.style.display === "grid") {
    links.style.display = "none";
    grid.style.gridTemplateRows = "1fr 0fr 4fr 1fr 0.3fr";
    today.style.display = "grid";
  } else {
    links.style.display = "grid";
    grid.style.gridTemplateRows = "1fr 2fr 4fr 1fr 0.3fr";
    today.style.display = "none";
  }
}

function resizeDisplay() {
  let links = document.querySelector("#links");
  if (window.innerWidth > 815) {
    links.style.display = "grid";
  } else {
    links.style.display = "none";
  }
}

window.addEventListener("resize", resizeDisplay);
document.querySelector("#icon").addEventListener("click", displayNav);
