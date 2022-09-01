const createNode = (elem) => {
  return document.createElement(elem);
};

const appendNode = (parent, elem) => {
  parent.appendChild(elem);
};

const ul = document.querySelector(".recipe");
const url = "data/recipes.json";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let recipes = data.recipe;

    return recipes.map(function (recipe) {
      let li = createNode("li"),
        h2 = createNode("h2"),
        img = createNode("img"),
        p = createNode("p"),
        a = createNode("a");
      h2.textContent = recipe.name;
      img.src = recipe.picture;
      p.textContent = recipe.information;
      a.textContent = "Go to recipe page";
      a.href = recipe.recipePage;

      appendNode(li, h2);
      appendNode(li, img);
      appendNode(p, a);
      appendNode(li, p);

      appendNode(ul, li);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
