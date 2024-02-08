/**
 * cree le btn  Appareil
 */

const AppareilFilterSection = createFilterSection(
  "left-[296px]",
  "Appareils",
  "left-[438px]",
  "AppareilSearch",
  "searchApparei",
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