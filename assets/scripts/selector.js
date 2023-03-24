const filtres = document.querySelectorAll(".filtreButton");
import createCard from "./selectorBuilder.js";
import restaurant from "./tableau.js";
const cardsContainer = document.querySelector(".shopList");
const italien = document.querySelector(".Italien");
// variable pour afficher ou nom les cartes

const createCards = () => {};

createCards();

filtres.forEach((filtre) => {
  filtre.addEventListener("click", (e) => {
    let btn = e.target.value;

    console.log(btn);
    cardsContainer.innerHTML = "";

    restaurant.forEach((resto) => {
      if (btn === resto.type) {
        cardsContainer.innerHTML += createCard(resto);
      }
    });
  });
});

