const filtres = document.querySelectorAll(".filtreButton");
console.log(filtres)
import createCard from "./selectorBuilder.js";
import restaurant from "./tableau.js";
const cardsContainer = document.querySelector(".shopList");
const italien = document.querySelector(".Italien");
// variable pour afficher ou nom les cartes

const createCards = () => { 

  filtres.forEach((filtre) => {   
    filtre.addEventListener("click", (e) => {

      filtres.forEach((filtre) => {
        filtre.style.backgroundColor = "#FCF4E8";
      })

      let btn = e.target.value;
  

      console.log(btn);
      cardsContainer.innerHTML = "";

      restaurant.forEach((resto) => {
        if (btn === resto.type) {
          cardsContainer.innerHTML += createCard(resto);
          filtre.style.backgroundColor = "#DBAE3E"
          
        }
      });
    });
  });
};


const pardefaut = () => {
  restaurant.forEach((resto) => {
  if (resto.type === "Vegan"){
    cardsContainer.innerHTML += createCard(resto)
  }})
}


pardefaut();
createCards();
