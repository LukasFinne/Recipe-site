let elName = document.querySelector("#name");
let elNameFeedback = document.querySelector("#nameFeedback");
let elSubmitBtn = document.querySelector("#submitBtn");
let elTextArea = document.querySelector(".textarea");
let elTxtAreaFeedback = document.querySelector("#txtAreaFeedBack");
let elTxtAreaFeedback2 = document.querySelector("#txtAreaFeedBack2");

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

function checkName() {
  if (elName.value.length < 3) {
    elNameFeedback.textContent =
      "Name must be at least " + 3 + " Characters Long";
  } else {
    elNameFeedback.textContent = "";
  }
}

function checkTextarea() {
  if (elTextArea.value.length < 10) {
    elTxtAreaFeedback.textContent =
      "This must be at least " + 10 + " Characters Long";
    elTxtAreaFeedback2.textContent =
      "This must be at least " + 10 + " Characters Long";
  } else {
    elTxtAreaFeedback.textContent = "";
    elTxtAreaFeedback2.textContent = "";
  }
}

elSubmitBtn.addEventListener("click", checkName, false);
elSubmitBtn.addEventListener("click", checkTextarea, false);
elSubmitBtn.addEventListener("click", checkTextarea, false);
window.addEventListener("resize", resizeDisplay);

document.querySelector("#icon").addEventListener("click", displayNav);
