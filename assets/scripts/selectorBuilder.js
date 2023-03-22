const cards = document.querySelector(".flip-card");

function createCard(name, picture, description, adress, link) {
  const card = document.createElement("div");
  card.classList.add("flip-card-inner");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("flip-card-front");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${picture})`;
  cardImg.classList.add("card-picture");
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-container");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = name;
  cardBody.appendChild(cardTitle);

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card-description");
  cardDescription.innerHTML = description;
  cardBody.appendChild(cardDescription);

  const cardAddress = document.createElement("p");
  cardDescription.classList.add("adress");
  cardDescription.innerHTML = adress;
  cardBody.appendChild(cardAddress);

  const cardLink = document.createElement("p");
  cardDescription.classList.add("button");
  cardDescription.innerHTML = link;
  cardBody.appendChild(cardLink);
}
export default createCard;
