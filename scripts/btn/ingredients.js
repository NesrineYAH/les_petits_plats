/**
 * crée le btn ingredient
 */
//fonction "createFilterSection" dans le file templating.js L 108
const ingredientsFilterSection = createFilterSection(
  "left-[30px]",
  "Ingrédients",
  "left-[160px]",
  "ingredientSearch", //input du recherche
  "searchIngredient", //searchLoupe
  "list_ingredient" //ul contient toutes les li ingredients
);
pageObject.DisplaySection(ingredientsFilterSection);
/**
 * affiche la list  des ingredients
 */
waitForElements(
  ".ingredientElement",
  "list_ingredient",
  "Ingredients",
  ".Ingredients",
  "tagIngredients",
  "closeTagIngredients",
  "data-value-Ingredients"
);
/**
 * @param {input search } // on utilise les 2 paramètres input et search de la fonction
 * @return {List Ingredients}
 */
searcheInbtn("ingredientSearch", ".Ingredients");

/**
 * @param {btn }
 * @return { value btn ingredient}
 * crée le tags
 */
initializeButtons(
  ".Ingredients",
  "tagIngredients",
  "closeTagIngredients",
  "data-value-Ingredients"
);

/**
 * @param {tagElement}
 * ferme le tag
 */
function closeBtnTagIngredient() {
  pageObject.tagElements().forEach((tagElement) => {
    const btnCloseTag = tagElement.querySelector(".closeTagIngredients"); //fermer le boutton tag
    const tagValueToRemove = btnCloseTag.getAttribute("data-value-Ingredients"); //la valeur du tag a fermer ou supprimer
    console.log("Tag to remove", tagValueToRemove); //TagSelected
    // console.log("Tag to remove:", TagSelected); //TagSelected
    btnCloseTag.addEventListener("click", function () {
      console.log("je entend le click");
      alert("tag fermé");
      console.log("Tag To remove", tagValueToRemove);
      tagElement.remove();
      /**
       * Retire la valeur du tag du tableau elementValues
       */
      // elementValues tableau  des tags
      elementValues = elementValues.filter(
        (value) => value !== tagValueToRemove
      );
      updateIngredientsList();
      if (elementValues.length === 0) {
        serachWithTags([]);
      } else {
        serachWithTags(elementValues);
      }
      updateNumberOfCards(); // mettre à jours le nombre de carte après chaque recherche
    });
  });
}
/**
 * @return {Ingredients List}
 */
function updateIngredientsList() {
  const elements = [];
  //visibleCadres =>  toutes les cards l'ensemble  id=cards
  pageObject.visibleCadres().forEach((cadre) => {
    const elementsInCadre = cadre.querySelectorAll(".ingredientElement");
    elements.push(...elementsInCadre);
  });
  const uniqueIngredients = new Set();
  elements.forEach((element) => {
    uniqueIngredients.add(element.textContent);
  });
  /**
   *Crée une nouvelle liste sans doublons à partir de l'ensemble
   */
  const uniqueIngredientElements = Array.from(uniqueIngredients);
  /**
   *Efface la liste existante des ingrédients
   */

  pageObject.ingredientChoix().innerHTML = "";
  /**
   *Affiche la nouvelle liste sans doublons
   */
  uniqueIngredientElements.forEach((element) => {
    pageObject
      .ingredientChoix()
      .insertAdjacentHTML("beforeEnd", ListItem("Ingredients", element));
  });
  //* c'est juste pour savoir le boutton ingredients si 'il s'affiche

  /**
   * Initialise les boutons ou effectue toute autre action nécessaire
   */
  initializeButtons(
    ".Ingredients",
    "tagIngredients",
    "closeTagIngredients",
    "data-value-Ingredients"
  );
}

/**
 * empêche le comportement par défaut du bouton lorsqu'il est cliqué
 */
const BtnsearchIngredient = document.getElementById("searchIngredient");
BtnsearchIngredient.addEventListener("click", (e) => {
  e.preventDefault();
});
