/** 2 éme box les appreils Création filter__appliances "appliancesBox" **/
/*** function filterAppliances créer et fait apparaitre le filtre appareil. ***/
/** filterAppliances() is initiated on index.js **/
// eslint-disable-next-line no-unused-vars

function filterAppliances() {
  const appliancesBox = document.getElementByClassName("filter__appliances");
  const template = document.createElement("div");
  template.className = "filter__appliances--template";

  const article = document.createElement("div"); //creation div
  article.className = "filter__appliances--close";

  const headerAppliances = document.createElement("header"); //creation header du div
  headerAppliances.className = "filter__appliances--header";

  const title = document.createElement("h2"); //creation titre h2 avec un chevero down fermé
  title.textContent = "Appareils";
  title.className = "filter__appliances--name";

  const spanAngle = document.createElement("span"); //creation span chevron down
  spanAngle.className = "filter__appliances--angleDown";

  const arrowDown = document.createElement("i"); //création i down parent span
  arrowDown.className = "fa-solid fa-angle-down fa-lg";
  arrowDown.style.cursor = "pointer";

  const hiddenAngle = document.createElement("span"); //creation span chevron up
  hiddenAngle.className = "filter__appliances--angleUp";

  const arrowUp = document.createElement("i"); //création i up parent span
  arrowUp.className = "fa-solid fa-angle-up fa-lg";
  arrowUp.style.cursor = "pointer";
  arrowUp.style.display = "none";

  const inputAppliances = document.createElement("input");
  inputAppliances.setAttribute("id", "appliances-input"); //a setAttribute()méthode définit une nouvelle valeur pour un attribut c'est dire c'est comme on écrit id="appliances-input"
  inputAppliances.setAttribute("placeholder", "Sélectionner un ingrédient...");
  //inputAppliances.setAttribute("placeholder", "");
  inputAppliances.className = "filter__appliances--input";

  const appliancesListBox = document.createElement("ul");
  appliancesListBox.className = "filter__appliances--list";
  appliancesListBox.style.display = "none";

  /** Appliances Event **/
  /* Lors du clique sur ArrowDown */
  arrowDown.addEventListener("click", (e) => {
    if (e.target.className === "fa-solid fa-angle-down fa-lg") {
      article.classList.remove("filter__appliances--close"); //La classListpropriété renvoie les noms de classe CSS d'un élément.
      article.classList.add("filter__appliances--view");
      headerAppliances.style.display = "none";
      inputAppliances.style.display = "flex";
      arrowDown.style.disply = "none";
      arrowUp.style.display = "flex";
      //template.style.width = "650px";
      template.style.width = "170px";
      appliancesListBox.style.display = "flex";
      inputAppliances.focus();

      /*Défini  dans filters_input*/
      //eslint-disable-next-line no-undef
      inputAppliance();
    }
    /* Défini dans tags.js */
    //eslint-disable-next-line no-undef
    addTagFilterAppliances();
  });
  /* Lors du clique sur ArrowUp */
  arrowUp.addEventListener("click", (e) => {
    if (e.target.className === "fa-solid fa-angle-up fa-lg") {
      article.classList.remove("filter__appliances--view");
      article.classList.add("filter__appliances--close");
      headerAppliances.style.display = "flex";
      inputAppliances.style.display = "none";
      arrowDown.style.display = "flex";
      arrowUp.style.display = "none";
      template.style.width = "170px";
      appliancesListBox.style.display = "none";
    }
  });

  /* Append Section */
  appliancesBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerAppliances);
  headerAppliances.appendChild(title);
  headerAppliances.appendChild(spanAngle);
  spanAngle.appendChild(arrowDown);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputAppliances);

  return article;
}
