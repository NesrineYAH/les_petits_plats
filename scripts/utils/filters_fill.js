/*** Fonction pour remplir les filtres par catégorie ***/

/** fillfilters() is initiated on index.js **/
// eslint-disable-next-line no-unused-vars
function fillFilters(recipes) {
  const ingredientsBloc = document.querySelector(".filter__ingredients--list");
  const appliancesBloc = document.querySelector(".filter__appliances--list");
  const ustensilsBloc = document.querySelector(".filter__ustensils--list");

  const ingredientsList = [];
  const appliancesList = [];
  const ustensilsList = [];

  // On vide les listes à chaque fois que l'on appel la fonction.
  ingredientsBloc.innerHTML = "";
  appliancesBloc.innerHTML = "";
  ustensilsBloc.innerHTML = "";

  recipes.forEach((recipe) => {
    /** Ingredients **/
    // if tags already used, don't push it.
    const itags =[...document.querySelectorAll('.tag__ingredient')].map( (tag) => itags.innerText);
    recipe.ingredients.forEach(({ ingredient })=> {
        if(ingredientsList.includes(ingredient) === false && itags.includes(ingredient) === false) {
            ingredientsList.push(ingredient);
            const filterItem = document.createElement('li');
            filterItem.classList.add('filter__ingredients--items');
            filterItem.innerText = ingredient;
            ingredientsBloc.appendChild(filterItem);
        }
    });

 /** appliances **/
    // if tags already used, don't push it.
    const atags = [...document.querySelectorAll('.tag__appliance')].map( (atag => atag.innerText);
   if (appliancesList.includes(recipe.appliance) === false && atags.includes(recipe.appliance) === false) {
    appliancesList.push(recipe.appliance);
    const filterItem = document.createElement('li');
    filterItem.classList.add('filter__appliances--items');
    filterItem.innerText = recipe.appliance;
    appliancesBloc.appendChild(filterItem);
   }
    )
  });
}
