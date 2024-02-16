/**
 * cree le btn  Appareil
 */

const AppareilFilterSection = createFilterSection(
  "left-[296px]",
  "Appareils",
  "left-[438px]",
  "AppareilSearch",
  "searchAppareil",
  "list_Appareil"
);
pageObject.DisplaySection(AppareilFilterSection);

/**
 * affiche la list  des Appareils
 */

waitForElements(
  ".appareil",
  "list_Appareils",
  ".Appareils",
  "tagAppareils",
  "closeAppareils",
  "data-tag-value-Appareils"
);

/**
 * @param {input search } ///tag provides the name, type, and description of a function parameter.
 * @return {List Appareil}
 */
searcheInbtn("AppareilSearch", ".Appareils");
/**
 * @param {btn }
 * @return {value btn appareil}
 * crée le tags
 */
initializeButtons(
  ".Appareils",
  "tagAppareils",
  "closeAppareils",
  "data-tag-value-Appareils"
);
/**
 * @param {tagElement}
 * ferme le tag
 */

function closeBtnTagAppareil() {
  pageObject.tagElementsAppareils().forEach((tagElement) => {
    const btnCloseTag = tagElement.querySelector(".closeAppareils");
    const tagValueToRemove = btnCloseTag.getAttribute(
      "data-tag-value-Appareils"
    );

    console.log("Tag to remove:", tagValueToRemove);
    btnCloseTag.addEventListener("click", function () {
      console.log("je entend le click");
      console.log("Tag to remove:", tagValueToRemove);
      tagElement.remove();
      /**
       * Retire la valeur du tag du tableau elementValues
       */
      elementValues = elementValues.filter(
        (value) => value !== tagValueToRemove
      );
      updateAppareilList();
      /**
       * Vérifie s'il ne reste plus aucun tag, puis affiche toutes les recettes
       */
      if (elementValues.length === 0) {
        searchWithTags([]);
      } else {
        searchWithTags(elementValues);
      }
      updateNumberOfCards();
    });
  });
}
