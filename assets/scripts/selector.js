const filtres = document.querySelectorAll(".filtreButton");
// import card from "./selectorBuilder.js";
import restaurant from "./tableau.js";
import createCard from "../../../builder.js";

const cardContainer = document.querySelector(".card");


filtres.forEach((filtre) => {
  filtre.addEventListener("click", (e) => {
    let btn = e.target.className;

    console.log(e.target.className);

    if (btn === "pictoFiltre1") {
      console.log(restaurant[0].name, restaurant[0].adress);
      console.log(restaurant[0][0], restaurant[0][1], restaurant[0][2], restaurant[0][3], restaurant[0][4]);
      cardContainer.innerHTML += createCard(restaurant[0][0], restaurant[0][1], restaurant[0][2], restaurant[0][3], restaurant[0][4]);

    } else if (btn === "pictoFiltre2") {
      for (let i = 0; i < restaurant[1].length; i++) {
        console.log(restaurant[1][i].name, restaurant[1][i].adress);
      }
    } else if (btn === "pictoFiltre3") {
      for (let i = 0; i < restaurant[2].length; i++) {
        console.log(restaurant[2][i].name, restaurant[2][i].adress);
      }
    } else if (btn === "3") {
      for (let i = 0; i < restaurant[3].length; i++) {
        console.log(restaurant[3][i].name, restaurant[3][i].adress);
      }
    } else if (btn === "4") {
      for (let i = 0; i < restaurant[4].length; i++) {
        console.log(restaurant[4][i].name, restaurant[4][i].adress);
      }
    } else if (btn === "5") {
      for (let i = 0; i < restaurant[5].length; i++) {
        console.log(restaurant[5][i].name, restaurant[5][i].adress);
      }
    } else if (btn === "6") {
      for (let i = 0; i < restaurant[6].length; i++) {
        console.log(restaurant[6][i].name, restaurant[6][i].adress);
      }
    } else if (btn === "7") {
      for (let i = 0; i < restaurant[7].length; i++) {
        console.log(restaurant[7][i].name, restaurant[7][i].adress);
      }
    } else if (btn === "8") {
      for (let i = 0; i < restaurant[8].length; i++) {
        console.log(restaurant[8][i].name, restaurant[8][i].adress);
      }
    } else if (btn === "9") {
      for (let i = 0; i < restaurant[9].length; i++) {
        console.log(restaurant[9][i].name, restaurant[9][i].adress);
      }
    } else if (btn === "10") {
      for (let i = 0; i < restaurant[10].length; i++) {
        console.log(restaurant[10][i].name, restaurant[10][i].adress);
      }
    } else if (btn === "11") {
      for (let i = 0; i < restaurant[11].length; i++) {
        console.log(restaurant[11][i].name, restaurant[11][i].adress);
      }
    }
  });
});

export default filtres;
