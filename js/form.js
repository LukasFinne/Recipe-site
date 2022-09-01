function displayNav() {
    let links = document.querySelector("#links");
    let grid = document.querySelector(".grid-container");
    let title = document.querySelector(".contactTitle");
  
    if (links.style.display === "grid") {
      links.style.display = "none";
      grid.style.gridTemplateRows = "0.3fr 0fr 0.8fr 1fr 0.3fr;";
     title.style.display = "grid";
    } else {
      links.style.display = "grid";
      grid.style.gridTemplateRows = "0.3fr 0fr 0.8fr 1fr 0.3fr;";
     title.style.display = "none";
    }
  }
  
  function resizeDisplay() {
    let links = document.querySelector("#links");
    if (window.innerWidth > 815) {
      links.style.display = "flex";
    } else {
      links.style.display = "none";
    }
  }
  
  window.addEventListener("resize", resizeDisplay);
  document.querySelector("#icon").addEventListener("click", displayNav);
  