const restaurant = [
  // Ma structure du tableau {name:"", picture:"",description:"",adress:"",link:""}
  // Arancini n°0
  {
    type: "Italien",
    name: "SUPPLI FACTORY",
    picture: "./assets/images/suppli_factory.jpg",
    description:
      "Une cuisine de qualité, savoureuse, faite à partir de produits bruts. BŒUF BRAISÉ Joue de bœuf braisée, compotée d’oignons,  tomates confites et comté AOP",
    adress: "1 Rue de Jemmapes, 44000 Nantes",
    link: "http://supplifactory.com/la-carte/",
  },
  {
    type: "Italien",
    name: "PAZZI",
    picture: "./assets/images/pazzi.jpg",
    description:
      "Venez vous réchauffer le cœur da i PAZZI !Partagez vos pizze et goûtez l’ivresse des vins siciliens ! ",
    adress: "21 Rue Fouré, 44000 Nantes",
    link: "https://pazzinantes.fr/",
  },
  {
    type: "Italien",
    name: "PAPA PASTA",
    picture: "./assets/images/papa_pasta.jpg",
    description:
      " Envie de voyager ? l'italie n'a jamais été aussi proche de chez vous  nos PATES carbonara, à la truffe, tiramisu maison raviolis maison",
    adress: "27 Rue Fouré, 44000 Nantes",
    link: "https://www.ubereats.com/fr/store/papa-pasta/MrcTZ3bkSi-6XRthLLywuQ?utm_campaign=place-action-link&utm_medium=organic&utm_source=google ",
  },
  // Asiatique n°1
  {
    type: "Asiatique",
    name: "ICHIGO ICHIE",
    picture: "./assets/images/ichigo_ichie.jpg",
    description:
      "Le chef cuisine devant vous des Ramens , Gyoza, Karaage ou encore  Edamane !",
    adress: "31 rue Fouré 44000 Nantes",
    link: "https://ichigoichie.fr",
  },
  {
    type: "Asiatique",
    name: "LE DIAMANT D ASIE",
    picture: "./assets/images/le_diamant_d_asie.jpg",
    description:
      "Evadez vous en Tahilande et Vietnam avec ces spécialités : bo bun, porc au caramel,  crevettes sautées ou encore soupe Pho !",
    adress: "33 chaussée de la Madeleine 44000 Nantes",
    link: "https://le-diamant-dasie.business.site/?utm_source=gmb&utm_medium=referral",
  },
  {
    type: "Asiatique",
    name: "IZAKAYA JOYI",
    picture: "./assets/images/izakaya_joyi.jpg",
    description:
      " meilleur chef sushi de France 2015, GYUDON, RAMEN , UDON , SASHIMI, SOUPE , ATSUMONO",
    adress: "4 Rue de Colmar, 44000 Nantes",
    link: "https://www.izakayajoyi.fr/",
  },
  // Brasserie n°2
  {
    type: "Brasserie",
    name: "LA RECRE",
    picture: "./assets/images/la_recre.jpg",
    description:
      "Decouvrez nos spécialités : grillades au feu de bois, nuggets et lasagne de legumes, côte de boeuf , camembert roti, ou encore nos  Burgers !",
    adress: "5 rue Baron 44000 Nantes",
    link: "https://larecrenantes.fr/",
  },
  {
    type: "Brasserie",
    name: "NAPOLEONE",
    picture: "./assets/images/napoleone.jpg",
    description:
      "Un vrai Bistrot - Tapas : Venez déguster notre cochon iberique, hallouni grillé, cuisine Faite Maison parmi 3 plats 3 entrées 3 desserts chaque semaine !",
    adress: "1 rue Baron 44000 Nantes",
    link: "http://bistrot-napo.com/?#cart",
  },
  {
    type: "Brasserie",
    name: "LE LION ET L AGNEAU",
    picture: "./assets/images/le_lion_et_l_agneau.jpg",
    description:
      "Cuisine à l'accent du Sud Ouest : Rôti à la broche à partager, boeuf angus, Presa Iberique, Poisson du moment ou encore ravioles de  langoustine et saint  jacques !",
    adress: "40 rue Fouré 44000 Nantes",
    link: "https://www.le-lion-et-lagneau.fr/",
  },
  {
    type: "Brasserie",
    name: "PLAN, B",
    picture: "./assets/images/plan_b.jpg",
    description:
      "Venez découvrir nos plats faits maison, variétés de Burgers, la pêche du jour,  tataki de thon, poke bowl, fish and chips ou tiramisu !",
    adress: "29 Rue Fouré, 44000 Nantes",
    link: "https://www.planbnantes.fr/",
  },
  {
    type: "Brasserie",
    name: "LA MANGOUSTE",
    picture: "./assets/images/la_mangouste.jpg",
    description:
      "Restaurant , Bar à cocktails, Vins naturels : 3 plats 3 entrées 3 desserts à déguster sans oublier nos succulentes Pizzas à emporter !",
    adress: "30 Rue Fouré, 44000 Nantes",
    link: "https://lamangouste.net/",
  },
  {
    type: "Brasserie",
    name: "LE MAGELLAN",
    picture: "./assets/images/le_magellan.jpg",
    description:
      "Venez déguster de la cuisine traditonnelle fait maison comme l'excellente blanquette de veau ou saucisse au Muscadet, le menu change chaque semaine !",
    adress: "57 quai Magellan 44000 Nantes",
    link: "https://lemagellannantes.wixsite.com/lemagellan",
  },
  {
    type: "Brasserie",
    name: "LE CAFE DU MARCHE",
    picture: "./assets/images/le_cafe_du_marche.jpg",
    description:
      "La cuisine bistrot nantaise avec uniquement des produits locaux, venez goûter notre Kig ha farz, délicieux pot au feu breton !",
    adress: "2 Rue de Mayence, 44000 Nantes",
    link: "https://www.lecafedumarche.com/",
  },
  {
    type: "Brasserie",
    name: "PAPILL",
    picture: "./assets/images/papill.jpg",
    description:
      "PAPILL' c'est aussi des prestations annexes sur place ou à l'extérieur chez vous, dans votre entreprise, dans un lieu insolite ! Plat du jour 6,90e !",
    adress: "8 Rue de Saverne, 44000 Nantes",
    link: "https://www.papill.fr/carte",
  },
  {
    type: "Brasserie",
    name: "GUINDAILLE",
    picture: "./assets/images/guindaille.jpg",
    description:
      "Ton nouveau bar à manger débarque enfin sur Nantes, à Rue Fouré dans un chouette quartier : dégustez notre pitartiflette,  Poire Angys grillée et fumée ou encore  Morbier gratiné !",
    adress: "36 Rue Fouré, 44000 Nantes",
    link: "https://www.guindaille.fr/menu",
  },
  {
    type: "Brasserie",
    name: "LES VOISINS",
    picture: "./assets/images/les_voisins",
    description:
      "Le bar restaurant Les Voisins vous propose une carte variée qui plaira à tous les gouts ! BURGER VG sauté de veau marengo andouillette grillée TAPAS",
    adress: "12 rue de Mayence 44000 Nantes",
    link: "https://www.lesvoisins-nantes.fr/notre-carte",
  },
  // Burger n°3
  {
    type: "Burger",
    name: "ERNEST INN",
    picture: "./assets/images/ernest_inn.jpg",
    description:
      "Une faim de loup? venez déguster nos burgers composés uniquement de produits frais de saison, accompagnés de frites maison bien entendu !",
    adress: "11 allée de la maison rouge 44000 Nantes",
    link: "https://ernest-inn.com/",
  },
  {
    type: "Burger",
    name: "LES BURGERS DE PAPA",
    picture: "./assets/images/les_burgers_de_papa.jpg",
    description:
      "Les Burgers De Papa c’est d’abord les burgers d’un papa ! BUN BOULANGER, prdouits locaux frais , Frites Maison Burger le Jean claude Dusse la Biquette",
    adress: "5 Rue de Colmar, 44000 Nantes",
    link: "https://lesburgersdepapa.fr/",
  },
  // Creperie n°4
  {
    type: "Creperie",
    name: "CREPIZZ",
    picture: "./assets/images/crepizz.jpg",
    description:
      "Vous aimez les galettes ? Vous aimez les pizzas? Crepizz a fait le mélange pour vous !",
    adress: "11 allée de la maison rouge 44000 Nantes",
    link: "https://crepizz-nantes.fr/",
  },
  // Fruit de mer n°5
  {
    type: "Fruit de mer",
    name: "LE MORSE",
    picture: "./assets/images/le_morse.jpg",
    description:
      "Envie d'air marin ? Venez découvrir la street sea food et le bar à fruits de mer à votre disposition !",
    adress: "1 allée de la maison Rouge 44000 Nantes",
    link: "https://le-morse.eatbu.com/?lang=fr",
  },
  // Gastronomique n°6
  {
    type: "Gastronomique",
    name: "L ATELIER D ALAIN",
    picture: "./assets/images/l_atelier_d_alain.jpg",
    description:
      "Régalez vous de produits frais et de saison travaillés de manière gastronomique !",
    adress: "24 rue des olivettes 44000 Nantes",
    link: "https://www.facebook.com/restaurant.atelier.alain",
  },
  {
    type: "Gastronomique",
    name: "MAISON BARON LEFEVRE",
    picture: "./assets/images/maison_baron_lefevre.jpg",
    description:
      "Decouvrez l'art culinaire d'un maître restaurateur renommé ! Des produits frais et de saison à la carte chaque semaine ",
    adress: "33 rue de rieux 44000 Nantes",
    link: "https://www.baron-lefevre.fr//",
  },
  {
    type: "Gastronomique",
    name: "OMIJA",
    picture: "./assets/images/omija.jpg",
    description:
      "Omija est une baie coréenne, connue pour réunir cinq saveurs en harmonie :le salé, le sucré, l’acide, l’amer et le piquant (lievre, veau,maquereau, carrelet, fois gras, le bar ,canard)",
    adress: "54 Rue Fouré, 44000 Nantes",
    link: "https://www.omija.fr/menus",
  },
  // Indien n°7
  {
    type: "India",
    name: "PALAIS DE L INDE",
    picture: "./assets/images/palais_de_l_inde.jpg",
    description:
      "Découvrez la cuisine indienne : cheese naan, poulet Tikka, butter chicken , pakora, dall ou encore Palak Panir !",
    adress: "8 Rue de Mayence, 44000 Nantes",
    link: "https://palais-de-l-inde-nantes.eatbu.com/?lang=fr",
  },
  // Sandwich n°8
  {
    type: "Sandwich",
    name: "SUBWAY",
    picture: "./assets/images/subway.jpg",
    description:
      "Sandwich préparés sous vos yeux, selon vos envies du moment ! ",
    adress: "2 rue de saverne 44000 Nantes",
    link: "https://www.subway.com/fr-fr",
  },
  // Vegan n°9
  {
    type: "Vegan",
    name: "LA FIERE CAROTTE ",
    picture: "./assets/images/logos/carotte.png",
    description: "",
    adress: "4 rue Baron 44000 Nantes",
    link: "CAROTTE RAPEE ",
  },
];

export default restaurant;
