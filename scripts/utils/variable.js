const sectionOption = document.getElementById("sectionOption");
const ingredientItems = document.querySelectorAll(".ListIngredientsBtn"); //ingredientsListBox
const tagSection = document.getElementById("tags");

const titlesCadre = document.querySelectorAll(".titlesCadre");
const ingredientsCard = document.querySelectorAll(".ingredientsCard");
const descriptionCadre = document.querySelectorAll(".descriptionCadre");

const main = document.getElementById("main");
const pageObject = {
  cadre: () => document.getElementById("cards"), //ensemble des cartes
  sectionFiltre: () => document.getElementById("sectionFiltre"),
  sectionFiltreNumber: () => document.getElementById("cardsNumber"),
  tagElements: () => document.querySelectorAll(".tagIngredients"),

  visibleCadres: () =>
    document.querySelectorAll(".cadre[style='display: block;']"),
  DisplayCard: (card) =>
    pageObject.cadre().insertAdjacentHTML("beforeend", card),
  addCard: (cardContent) =>
    pageObject.sectionFiltre().insertAdjacentHTML("beforeend", cardContent),

  ingredientChoix: () => document.getElementById("list_ingredient"),
  tagElementsAppareils: () => document.querySelectorAll(".tagAppareils"),
  ingredientChoixAppareils: () => document.getElementById("list_Appareil"),

  tagElementsUstensile: () => document.querySelectorAll(".tagUstensile"),
  ingredientChoixUstensile: () => document.getElementById("list_Ustensiles"),

  DisplaySection: (Section) =>
    sectionOption.insertAdjacentHTML("beforeEnd", Section),
};
