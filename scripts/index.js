/**
 * @param {data}
 * @returns {recipe card}
 */

const originalCadres = [];
const listOfGlobalRecipe = []; //la liste totale des recettes
let cadreCount = 0;
processRecipes();

/**
 * empêche le comportement par défaut du bouton lorsqu'il est cliqué
 */
const BtnSearche = document.getElementById("searcheBtn");
BtnSearche.addEventListener("click", (e) => {
  e.preventDefault();
});

async function fetchData() {
  try {
    const requete = await fetch("../public/recipes.json", {
      method: "GET",
    });
    if (requete.ok) {
      const data = await requete.json();
      return data;
    }
  } catch (e) {
    console.log(e);
  }
}
/*** Afficher les cards ***/
async function processRecipes() {
  try {
    const dataArray = await fetchData(); // s'il est défini et qu'il retourne une promesse contenant un tableau de données (dataArray).
    dataArray.forEach((data) => {
      listOfGlobalRecipe.push(data);
      const cadre = card(data); //retourne un élément DOM (ou une chaîne HTML) représentant une carte à afficher.
      cadreCount++;
      pageObject.DisplayCard(cadre); //afficher la carte dans l'interface utilisateur.
      originalCadres.push(cadre);
    });
    numbreOfCard(); //il effectue le traitement souhaité sur le nombre de cartes affichées.
  } catch (e) {
    console.error(e);
  }
}
/**
 * affiche le nombre des recettes
 */
function numbreOfCard() {
  pageObject.addCard(rendreCardCount(cadreCount));
}
/**
 * metre a jour le numbre des recettes /50 recettes
 */

function updateNumberOfCards() {
  const numberOfVisibleCadres = pageObject.visibleCadres().length;

  pageObject.sectionFiltreNumber().innerHTML = rendreCardCount(
    numberOfVisibleCadres
  );
  console.log("numberOfVisibleCadres", numberOfVisibleCadres);
}
/**
 * Écoute les clics sur l'élément input ?????????????
 */
const searchValue = document.getElementById("searche");
searchValue.addEventListener("input", SearchWithInput);
function SearchWithInput() {
  performSearch(elementValues);
}
/**
 * aplique le filtrage d'input et tags
 */
function performSearch(tagValues) {
  const tagValue = tagValues.map((value) => value.toLowerCase()); //afficher dans un autre tableau les noms du tags en miniscules

  //Supprime les balises HTML - valeurDeRecherche se sont les mots qu'on écrit dans l'input de bare de recherche

  const valeurDeRecherche = searchValue.value
    .toLowerCase()
    .replace(/<|>/g, "!");
  const existingNoMatchMessage = document.getElementById("NoMatchview"); // on veut obtenir le p d'erreur de message

  if (existingNoMatchMessage) {
    //vérifie si existingNoMatchMessage a été trouvé,
    existingNoMatchMessage.remove(); // si existingNoMatchMessage existe il sera supprimé
  }
  // le matchCadres les cartes affichés après avoir chercher un ou plusieurs ingredients au début le tableau est vide
  const matchCadres = [];
  /* appliquer un filter pour chaque recherche d'ingredients il affiche une ou plusieurs matchCadres  */
  filtre(valeurDeRecherche, matchCadres, listOfGlobalRecipe, tagValue);
  pageObject.cadre().innerHTML = "";

  /**
   *Affiche les cartes après le filtrage.
   */
  //MatchCadre on fait une fonction son but est d'afficher les cartes aprés le résultat de recherche
  MatchCadre(valeurDeRecherche, matchCadres); // filter.js
  console.log("matchCadres", matchCadres); //ajouté 31/03/2024
  filterAndDisplayCadres(valeurDeRecherche); //filterAndDisplayCadres est une fonction de filtre

  /**
   * L'affichage  s'il n'y a pas de cartes correspondant à la recherche.
   */
  //NoMatchCardes L148 of templating.js
  NoMatchCardes(valeurDeRecherche, matchCadres);

  updateNumberOfCards(); //index.js L40
  updateIngredientsList(); //ingredients.js L77
  updateAppareilList();
  updateUstensileList();
}
/**
 * L'affichage  s'il n'y a pas de cartes correspondant à la recherche.
 */
/**
 *
 *  valeurDeRecherche.length > 2 : Vérifie si la longueur de la chaîne valeurDeRecherche est supérieure à 2.
    matchCadres.length === 0: Vérifie si la longueur du tableau matchCadres est égale à 0.
      main.insertAdjacentHTML("afterend", NoMatchCard(valeurDeRecherche));: Si les deux conditions sont remplies, cette ligne insère du code HTML après l'élément main. La fonction insertAdjacentHTML est utilisée pour cela. Elle prend deux arguments :

"afterend": Spécifie l'emplacement où insérer le HTML, dans ce cas, après l'élément main.
    */

function NoMatchCardes(valeurDeRecherche, matchCadres) {
  if (valeurDeRecherche.length > 2 && matchCadres.length === 0) {
    main.insertAdjacentHTML("afterend", NoMatchCard(valeurDeRecherche));
  }
}

/*
function init() {
  /* Afficher les recipes */
/*displayData(recipes);

  filterIngredients();

  filterAppliances();

  filterUstensils();

  isArrowClicked();

  fillFilters(recipes);
}
*/
