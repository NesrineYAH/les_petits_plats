/*** fonction pour créer / voir les filtres. ***/

/*** function filterAppliances créer et fait apparaitre le filtre Ingrédient. ***/

/** filterIngredients is initiated on index.js **/
// eslint-disable-next-line no-unused-vars
function filterIngredients() {
  const ingredientsBox = document.getElementsByClassName("filter__ingredients");
  const template = document.createElement("div"); //on a créer une div template
  template.className = "filter__ingredients--template";

  const article = document.createElement("div"); //on a créer une div article
  article.className = "filter__ingredients--close";

  const headerIngredients = document.createElement("header");
  headerIngredients.className = "filter__ingredients--header";

  const title = document.createElement("h2");
  title.textContent = "Ingredients";
  title.className = "filter__ingredients--name";

  const spanAngle = document.createElement("span");
  spanAngle.className = "filter__ingredients--angleDown";

  const arrowDown = document.createElement("i");
  arrowDown.className = "fa-solid fa-angle-down fa-lg";
  arrowDown.style.cursor = "pointer";

  const hiddenAngle = document.createElement("span");
  hiddenAngle.className = "filter__ingredients--angleUp";

  const arrowUp = document.createElementi("i");
  arrowUp.className = "fa-solid fa-angle-up fa-lg";
  arrowUp.style.cursor = "pointer";
  arrowUp.style.display = "none";

  const inputIngredients = document.createElement("input");
  inputIngredients.setAttribute("id", "ingredients-input");
  inputIngredients.style.display = "none";
  inputIngredients.setAttribute("placeholder", "Sélectionner un ingrédient...");
  //  inputIngredients.setAttribute("placeholder", "");
  inputIngredients.className = "filter__ingredients--input";

  const ingredientsListBox = document.createElement("ul");
  ingredientsListBox.className = "filter__ingredients--list";
  ingredientsListBox.style.display = "none";

  /** Ingredients Event **/
  /*Créer un évenement lors du clique sur ArrowDowon*/

  arrowDown.addEventListener("click", (e) => {
    if (e.target.className === "fa-solid fa-angle-down fa-lg") {
      article.classList.remove("filter__ingredients--close"); // event display we want to remove close
      article.classList.add("filter__ingredients--view"); // event display we want to add view
      headerIngredients.style.display = "none"; // when we open the arrow the headerIngredients will be Not displayed
      inputIngredients.style.display = "flex"; // we add the style.css 'flex' in the inputIngredients
      arrowDown.style.display = "none"; // arrowDown Not displayed
      arrowUp.style.display = "flex";
      //template.style.width = "650px";
      template.style.width = "170px";
      ingredientsListBox.style.display = "flex";
      inputIngredients.focus();

      /* défini dans filters_input */
      // eslint-disable-next-line no-undef
      inputIngredient(); // this function is created in the filters_input.js file L 22

      /* Défini dans tags.js */
      // eslint-disable-next-line no-undef
      addTagFilterIngredients(); //this function is created in the tags.js file L 22
    }
  });
  /* Lors du clique sur ArrowUp */
  arrowUp.addEventListener("click", (e) => {
    if (e.target.className === "fa-solid fa-angle-up fa-lg") {
      article.classList.remove("filter__ingredients--view");
      article.classList.add("filter__ingredients--close");
      headerIngredients.style.display = "flex";
      inputIngredients.style.display = "none";
      arrowDown.style.display = "flex";
      arrowUp.style.display = "none";
      template.style.width = "170px";
      ingredientsListBox.style.display = "none";
    }
  });
  /* Append Section */
  ingredientsBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerIngredients);
  headerIngredients.appendChild(title);
  headerIngredients.appendChild(spanAngle);
  spanAngle.appendChild(arrowDown);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild("arrowUp");
  article.appendChild(inputIngredients);
  article.appendChild(ingredientsBox);

  return article;
}
