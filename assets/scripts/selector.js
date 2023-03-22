const filtres = document.querySelectorAll(".filtreButton");
import createCard from "./selectorBuilder.js";
import restaurant from "./tableau.js";


// variable pour afficher ou nom les cartes
let add0 = 0
let add2 = 0
let add3 = 0
let add4 = 0
let add5 = 0
let add6 = 0
let add7 = 0
let add8 = 0
let add9 = 0
let add10 = 0
let add11 = 0



// function pour vérifier sur qu'elle bouton on appuie, puis il vas chercher les élement qu'il a besoin pour créer la carte 
// et lui ajouter les valeur dans le tableau
filtres.forEach((filtre) => {
  filtre.addEventListener("click", (e) => {
    let btn = e.target.value;
    
    if (btn === "0") {
      if(add0 === 0){
        add0 = 1
      for (let i = 0; i < restaurant[0].length; i++) {
        createCard(restaurant[0][i].name, restaurant[0][i].picture,restaurant[0][i].description,restaurant[0][i].adress,restaurant[0][i].link);
        console.log("1")
      }}
      else{
        add0 = 0
        for (let i = 0; i < restaurant[0].length; i++) {
          console.log("2")
        }
      }
    } else if (btn === "1") {
      for (let i = 0; i < restaurant[1].length; i++) {
        createCard(restaurant[1][i].name, restaurant[1][i].picture,restaurant[1][i].description,restaurant[1][i].adress,restaurant[1][i].link);
      }
    } else if (btn === "2") {
      for (let i = 0; i < restaurant[2].length; i++) {
        createCard(restaurant[2][i].name, restaurant[2][i].picture,restaurant[2][i].description,restaurant[2][i].adress,restaurant[2][i].link);
      }
    } else if (btn === "3") {
      for (let i = 0; i < restaurant[3].length; i++) {
        createCard(restaurant[3][i].name, restaurant[3][i].picture,restaurant[3][i].description,restaurant[3][i].adress,restaurant[3][i].link);
      }
    } else if (btn === "4") {
      for (let i = 0; i < restaurant[4].length; i++) {
        createCard(restaurant[4][i].name, restaurant[4][i].picture,restaurant[4][i].description,restaurant[4][i].adress,restaurant[4][i].link);
      }
    } else if (btn === "5") {
      for (let i = 0; i < restaurant[5].length; i++) {
        createCard(restaurant[5][i].name, restaurant[5][i].picture,restaurant[5][i].description,restaurant[5][i].adress,restaurant[5][i].link);
      }
    } else if (btn === "6") {
      for (let i = 0; i < restaurant[6].length; i++) {
        createCard(restaurant[6][i].name, restaurant[6][i].picture,restaurant[6][i].description,restaurant[6][i].adress,restaurant[6][i].link);
      }
    } else if (btn === "7") {
      for (let i = 0; i < restaurant[7].length; i++) {
        createCard(restaurant[7][i].name, restaurant[7][i].picture,restaurant[7][i].description,restaurant[7][i].adress,restaurant[7][i].link);
      }
    } else if (btn === "8") {
      for (let i = 0; i < restaurant[8].length; i++) {
        createCard(restaurant[8][i].name, restaurant[8][i].picture,restaurant[8][i].description,restaurant[8][i].adress,restaurant[8][i].link);
      }
    } else if (btn === "9") {
      for (let i = 0; i < restaurant[9].length; i++) {
        createCard(restaurant[9][i].name, restaurant[9][i].picture,restaurant[9][i].description,restaurant[9][i].adress,restaurant[9][i].link);
      }
    } else if (btn === "10") {
      for (let i = 0; i < restaurant[10].length; i++) {
        createCard(restaurant[10][i].name, restaurant[10][i].picture,restaurant[10][i].description,restaurant[10][i].adress,restaurant[10][i].link);
      }
    } else if (btn === "11") {
      for (let i = 0; i < restaurant[11].length; i++) {
        createCard(restaurant[11][i].name, restaurant[11][i].picture,restaurant[11][i].description,restaurant[11][i].adress,restaurant[11][i].link);
      }
    }
  });
});
