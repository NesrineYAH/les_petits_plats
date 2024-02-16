// code source Milween

let recipes = [];
// apporter la fonction fetchData() de api.js (getDataJson)
fetchData();

/*** Afficher les cards ***/

function displayData(recipes) {
  const recipeSection = documentgetElementById("recipes__cards");
  recipeSection.innerHTML = "";
  for (const recipe of recipes) {
    // eslint-disable-next-line no-undef
    const recipeCard = getRecipeCard(recipe);
    recipeSection.appendChild(recipeCard);
  }
}

function init() {
  /* Afficher les recipes */
  displayData(recipes);
  /* Afficher les filtres */ // la fonction dans le fichier "filters_create.js"
  // eslint-disable-next-line no-undef
  filterIngredients();
  // eslint-disable-next-line no-undef
  filterAppliances();
  // eslint-disable-next-line no-undef
  filterUstensils();
  /* N'ouvrir qu'un seul filtre à la fois */
  // eslint-disable-next-line no-undef
  isArrowClicked();
  /* Remplir les filtres avec les données */
  // eslint-disable-next-line no-undef
  fillFilters(recipes);
}

fetchData();
