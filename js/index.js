function displayNav() {
  let links = document.querySelector("#links");
  let grid = document.querySelector(".grid-container");

  if (links.style.display === "block") {
    links.style.display = "none";
    grid.style.gridTemplateRows = "1fr 10fr 1fr";
  } else {
    links.style.display = "block";
    grid.style.gridTemplateRows = "1fr 1fr 10fr 1fr";
  }
}

function resizeDisplay() {
  let links = document.querySelector("#links");
  if (window.innerWidth > 815) {
    links.style.display = "block";
  } else {
    links.style.display = "none";
  }
}

window.addEventListener("resize", resizeDisplay);
document.querySelector("#icon").addEventListener("click", displayNav);
