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

document.querySelector("#icon").addEventListener("click", displayNav);
