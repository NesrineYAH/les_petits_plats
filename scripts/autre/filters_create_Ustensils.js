/** Création filter Ustensil **/
/*** function filterUstensils créer et fait apparaitre le filtre ustensil. ***/
/** filterUstensils() is initiated on index.js **/
// eslint-disable-next-line no-unused-vars

function filterUstensils() {
  const ustensilsBox = document.getElementsByClassName("filter__ustensils");
  const template = document.createElement("div");
  template.className = "filter__ustensils--template";

  const article = document.createElement("div");
  article.className = "filter__ustensils--close";

  const headerUstensils = document.createElement("header");
  headerUstensils.className = "filter__ustensils--header";

  const title = document.createElement("h2");
  title.textContent = "Ustensils";
  title.className = "filter__ustensils--name";

  const spanAngle = document.createElement("span");
  spanAngle.className = "filter__ustensils--angleDown";

  const arrowDown = document.createElement("i");
  arrowDown.className = "fa-solid fa-angle-down fa-lg";
  arrowDown.style.cursor = "pointer";

  const hiddenAngle = document.createElement("span");
  hiddenAngle.className = "filter__ustensils--angleUp";

  const arrowUp = document.createElement("i");
  arrowUp.className = "fa-solid fa-angle-up fa-lg";
  arrowUp.style.cursor = "pointer";
  arrowDown.style.display = "none";

  const inputUstensils = document.createElement("input");
  inputUstensils.setAttribute("id", "ustensils-input");
  inputUstensils.setAttribute("placeholder", "Sélectionner un ustensil...");
  //inputUstensils.setAttribute("placeholder", "");
  inputUstensils.className = "filter__ustensils--input";

  const ustensilsListBox = document.createElement("ul");
  ustensilsListBox.className = "filter__ustensils--list";
  ustensilsListBox.style.display = "none";

  /** Ustensils Event **/

  /* Lors du clique sur ArrowDown */
  arrowDown.addEventListener("click", (e) => {
    if (e.target.className === "fa-solid fa-angle-down fa-lg") {
      article.classList.remove("filter__ustensils--close");
      article.classList.add("filter__ustensils--view");
      headerUstensils.style.display = "none";
      inputUstensils.style.display = "flex";
      arrowDown.style.display = "none";
      arrowUp.style.display = "flex";
      //template.style.width = "650px";
      template.style.width = "170px";
      ustensilsListBox.style.display = "flex";
      inputUstensils.focus();

      /* Défini dans Filters_input */
      // eslint-disable-next-line no-undef
      inputUstensil();
    }
    /* Défini dans tags.js */
    // eslint-disable-next-line no-undef
    addTagFilterAppliances();
  });
  /* Lors du clique sur ArrowUp */
  arrowUp.addEventListener("click", (e) => {
    if ((e.target.className = "fa-solid fa-angle-up fa-lg")) {
      article.classList.remove("filter__ustensils--view");
      article.classList.add("filter__ustensils--close");
      headerUstensils.style.display = "flex";
      inputUstensils.style.display = "none";
      arrowDown.style.display = "flex";
      arrowUp.style.display = "none";
      template.style.width = "170px";
      appliancesListBox.style.display = "none";
    }
  });
  /* Append Section */
  ustensilsBox.appendChild(template);
  template.appendChild(article);
  article.appendChild(headerUstensils);
  headerUstensils.appendChild(title);
  headerUstensils.appendChild(spanAngle);
  spanAngle.appendChild(arrowDown);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputUstensils);
  article.appendChild(ustensilsListBox);

  return article;
}
