const filtres = document.querySelectorAll(".filtreButton");

import restaurant from "/tableau";
filtres.forEach((filtre) => {
  filtre.addEventListener("click", (e) => {
    btn = e.target.value;

    if (btn === "0") {
      for (let i = 0; i < restaurant[0].length; i++) {
        console.log(restaurant[0][i].name, restaurant[0][i].adress);
      }
    } else if (btn === "1") {
      for (let i = 0; i < restaurant[1].length; i++) {
        console.log(restaurant[1][i].name, restaurant[1][i].adress);
      }
    } else if (btn === "2") {
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
