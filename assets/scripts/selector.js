const filtre = document.querySelectorAll("filtreButton");

const tableauCuisine = [
  // Ma structure du tableau {name:"", picture:"",description:"",adress:"",link:""}
  [
    // Arancini n°0
    {
      name: "SUPPLI FACTORY",
      picture: "",
      description:
        "BŒUF BRAISÉ Joue de bœuf braisée, compotée d’oignons,  tomates confites et comté AOP",
      adress: "1 Rue de Jemmapes, 44000 Nantes",
      link: "http://supplifactory.com/la-carte/",
    },
  ],
  [
    // Asiatique n°1
    ({
      name: "ICHIGO ICHIE",
      picture: "",
      description: "",
      adress: "31 rue Fouré 44000 Nantes",
      link: "https://ichigoichie.fr",
    },
    {
      name: "LE DIAMANT D ASIE",
      picture: "",
      description: "",
      adress: "33 chaussée de la Madeleine 44000 Nantes",
      link: "https://le-diamant-dasie.business.site/?utm_source=gmb&utm_medium=referral",
    },
    {
      name: "IZAKAYA JOYI",
      picture: "",
      description: "",
      adress: "4 Rue de Colmar, 44000 Nantes",
      link: "https://www.izakayajoyi.fr/",
    }),
  ],
  [
    // Brasserie n°2
    ({
      name: "LA RECRE",
      picture: "",
      description: "",
      adress: "5 rue Baron 44000 Nantes",
      link: "https://larecrenantes.fr/",
    },
    {
      name: "NAPOLEONE",
      picture: "",
      description: "",
      adress: "1 rue Baron 44000 Nantes",
      link: "http://bistrot-napo.com/?#cart",
    },
    {
      name: "LE LION ET L AGNEAU",
      picture: "",
      description: "",
      adress: "40 rue Fouré 44000 Nantes",
      link: "https://www.le-lion-et-lagneau.fr/",
    },
    {
      name: "PLAN, B",
      picture: "",
      description: "",
      adress: "29 Rue Fouré, 44000 Nantes",
      link: "https://www.planbnantes.fr/",
    },
    {
      name: "LA MANGOUSTE",
      picture: "",
      description: "",
      adress: "30 Rue Fouré, 44000 Nantes",
      link: "https://lamangouste.net/",
    },
    {
      name: "LE MAGELLAN",
      picture: "",
      description: "",
      adress: "57 quai Magellan 44000 Nantes",
      link: "https://lemagellannantes.wixsite.com/lemagellan",
    },
    {
      name: "LE CAFE DU MARCHE",
      picture: "",
      description: "",
      adress: "2 Rue de Mayence, 44000 Nantes",
      link: "https://www.lecafedumarche.com/",
    },
    {
      name: "PAPILL",
      picture: "",
      description: "",
      adress: "8 Rue de Saverne, 44000 Nantes",
      link: "https://www.papill.fr/carte",
    },
    {
      name: "GUINDAILLE",
      picture: "",
      description: "",
      adress: "36 Rue Fouré, 44000 Nantes",
      link: "https://www.guindaille.fr/menu",
    },
    {
      name: "LES VOISINS",
      picture: "",
      description: "",
      adress: "12 rue de Mayence 44000 Nantes",
      link: "https://www.lesvoisins-nantes.fr/notre-carte",
    }),
  ],
  [
    // Burger n°3
    ({
      name: "ERNEST INN",
      picture: "",
      description: "",
      adress: "11 allée de la maison rouge 44000 Nantes",
      link: "https://ernest-inn.com/",
    },
    {
      name: "LES BURGERS DE PAPA",
      picture: "",
      description: "",
      adress: "5 Rue de Colmar, 44000 Nantes",
      link: "https://lesburgersdepapa.fr/",
    }),
  ],
  [
    // Creperie n°4
    {
      name: "CREPIZZ",
      picture: "",
      description: "",
      adress: "11 allée de la maison rouge 44000 Nantes",
      link: "https://crepizz-nantes.fr/",
    },
  ],
  [
    // Fruit de mers n°5
    {
      name: "LE MORSE",
      picture: "",
      description: "",
      adress: "1 allée de la maison Rouge 44000 Nantes",
      link: "https://le-morse.eatbu.com/?lang=fr",
    },
  ],
  [
    // Gastronomique n°6
    ({
      name: "L ATELIER D ALAIN",
      picture: "",
      description: "",
      adress: "24 rue des olivettes 44000 Nantes",
      link: "https://www.facebook.com/restaurant.atelier.alain",
    },
    {
      name: "MAISON BARON LEFEVRE",
      picture: "",
      description: "",
      adress: "33 rue de rieux 44000 Nantes",
      link: "https://www.baron-lefevre.fr//",
    },
    {
      name: "OMIJA",
      picture: "",
      description: "",
      adress: "54 Rue Fouré, 44000 Nantes",
      link: "https://www.omija.fr/menus",
    }),
  ],
  [
    // n°7
    ({ name: "", picture: "", description: "", adress: "", link: "" },
    { name: "", picture: "", description: "", adress: "", link: "" }),
  ],
  [
    // n°8
    ({ name: "", picture: "", description: "", adress: "", link: "" },
    { name: "", picture: "", description: "", adress: "", link: "" }),
  ],
  [
    // n°9
    ({ name: "", picture: "", description: "", adress: "", link: "" },
    { name: "", picture: "", description: "", adress: "", link: "" }),
  ],
  [
    // n°1à
    ({ name: "", picture: "", description: "", adress: "", link: "" },
    { name: "", picture: "", description: "", adress: "", link: "" }),
  ],
  [
    // n°11
    ({ name: "", picture: "", description: "", adress: "", link: "" },
    { name: "", picture: "", description: "", adress: "", link: "" }),
  ],
];

filtre.addEventListener("click", (e) => {
  filtre.values;
});

switch (filtre) {
  case "":
    console.log("Bonjour n°0!");
    break;
  case "":
    console.log("Bonjour n°1!");
    break;
  case "":
    console.log("Bonjour n°2!");
    break;
  case "":
    console.log("Bonjour n°3!");
    break;
  case "":
    console.log("Bonjour n°4!");
    break;
  case "":
    console.log("Bonjour n°5!");
    break;
  case "":
    console.log("Bonjour n°6!");
    break;
  case "":
    console.log("Bonjour n°7!");
    break;
  case "":
    console.log("Bonjour n°8!");
    break;
  case "":
    console.log("Bonjour n°9!");
    break;
  case "":
    console.log("Bonjour n°10!");
    break;
  case "":
    console.log("Bonjour n°11!");
    break;
  case "":
    console.log("Bonjour n°12!");
    break;
  case "":
    console.log("Bonjour n°13!");
    break;
}
