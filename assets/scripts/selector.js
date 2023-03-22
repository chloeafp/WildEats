const filtres = document.querySelectorAll(".filtreButton");
import createCard from "./selectorBuilder.js";
import restaurant from "./tableau.js";
const cardsContainer = document.querySelector(".card");
const italien = document.querySelector(".Italien");
// variable pour afficher ou nom les cartes
let add0 = 0;
let add2 = 0;
let add3 = 0;
let add4 = 0;
let add5 = 0;
let add6 = 0;
let add7 = 0;
let add8 = 0;
let add9 = 0;
let add10 = 0;
let add11 = 0;

const createCards = () => {
  cardsContainer.innerHTML = "";
  restaurant.forEach(
    (resto) => (cardsContainer.innerHTML += createCard(resto))
  );
};
createCards();

// function pour vérifier sur qu'elle bouton on appuie, puis il vas chercher les élement qu'il a besoin pour créer la carte
// et lui ajouter les valeur dans le tableau

filtres.forEach((filtre) => {
  filtre.addEventListener("click", (e) => {
    let btn = e.target.value;

    if (btn === "0") {
      if (add0 === 0) {
        console.log("1");
        document.querySelector(".Italien").style.visibility = "visible";
        add0 += 1;
      } else {
        add0 = 0;
        console.log("2");
        document.querySelector(".Italien").style.visibility = "hidden";
      }
    }
  });
});

