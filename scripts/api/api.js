/**
 * @returns {data || undefined} Les données des recettes si la requête réussit, sinon undefined en cas d'erreur.
 * effectue une requête pour récupérer les données à partir du fichier JSON des recettes.
 */
//  fetchData est fonction asynchrone son rôle est de chercher et recupérer les recttes

const fetchData = async () => {
  try {
    const requete = await fetch("../data/recipes.js", {
      method: "GET",
    });
    if (requete.ok) {
      const data = await requete.json();

      return data;
    }
  } catch (e) {
    console.log(e);
  }
};
