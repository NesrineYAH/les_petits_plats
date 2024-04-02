/**
 * afficher la list  dans les btn de filtrage
 */
function waitForElements(
  selector,
  listId,
  typeElement,
  ElementTag,
  tag,
  closeTag,
  dataValue
) {
  return new Promise((resolve, reject) => {
    const checkElements = () => {
      const visibleCadres = document.querySelectorAll(
        ".cadre[style='display : block']"
      );
      const elements = []; //listIngredients ou listappareils

      visibleCadres.forEach((cadre) => {
        const elementInCadre = cadre.querySelectorAll(selector);
        elements.push(...elementInCadre);
      });

      if (elements.length > 0) {
        resolve(elements);
      } else if (timeOut <= 0) {
        reject(
          new Error(`element introuvable pour le selecteur "${selector}"`)
        );
      } else {
        setTimeout(() => {
          timeOut -= 100;
          checkElements();
        }, 100);
      }
    };
    let timeOut = 5000; // Définir le délai d'attente maximal ici (en millisecondes)
    checkElements();
  }).then((elements) => {
    const uniqueElements = new Set(); // const uniqueElements = new Set(elements.map((element) => element.textContent.toLowerCase()));
    elements.forEach((element) => {
      uniqueElements.add(element.textContent.toLowerCase());
    });
    /**
     * Créez une nouvelle liste sans doublons à partir de l'ensemble
     */

    const uniqueElementList = Array.from(uniqueElements);
    /**
     *Affichez la nouvelle liste sans doublons
     */
    uniqueElementList.forEach((element) => {
      const list = document.getElementById(listId);
      list.insertAdjacentHTML("beforeEnd", ListItem(typeElement, element));
    });
    initializeButtons(ElementTag, tag, closeTag, dataValue);
  });
}
/**
 *  @param {input search }
 * @return {List des élementes }
 */
function searcheInbtn(ElementId, Element) {
  const valueElement = document.getElementById("ElementId"); //valueElement est l'input des 3 bouttons ex: sucre valueElement est sucre
  valueElement.addEventListener("input", function () {
    const valeur = valueElement.value.toLowerCase();

    /**
     * Parcours les valueElements  pour trouver correspondances //Item c'est le li
     */
    const valueElementList = document.querySelectorAll(Element);
    valueElementList.forEach((Item) => {
      const ElementName = Item.textContent.toLowerCase();
      console.log("ElementName", ElementName); // le nom des ingredients et les appareils et ustensils ex saladier
      if (valeur.length === 0) {
        Item.style.display = "block";
      } else if (valeur.length > 0) {
        if (ElementName.includes(valeur)) {
          Item.style.display = "block";
        } else {
          Item.style.display = "none";
        }
      } else {
        Item.style.display = "block";
      }
    });
  });
}

/**
 * @param {btn}
 * @return {value btn ingredient}
 * crée le tags
 */

let elementVlaues = [];
function initializeButtons(ElementTag, tag, closeTag, dataValue) {
  const ElementList = document.querySelectorAll(ElementTag);
}
