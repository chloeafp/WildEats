function createCard({cardType, name, picture, description, adress, link}) {

  return `<div class="${cardType}">
  <div class="card-top-part">
    <div class="left-part">
      <div class="user-name">
        <p class="name">${name}</p>
        <p class="role"> NEW </p>
      </div>
      <div class="user-position">
        <p class="position">
          ${description}
      </p>
      </div>
    </div>
    <div class="right-part">
      <div class="user-photo">
        <img src="${picture}" class="photo">
      </div>
    </div>
  </div>
  <div class="card-bottom-part">
    <div class="bottom-part">
      <a href="mailto: example@example.com" class="link">
        <span class="icon"> 
          <svg viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-name="20" id="_20">
            <path transform="translate(1.25 3.75)" d="M16.25,12.5h-15A1.252,1.252,0,0,1,0,11.25v-10A1.252,1.252,0,0,1,1.25,0h15A1.251,1.251,0,0,1,17.5,1.25v10A1.251,1.251,0,0,1,16.25,12.5ZM1.25,1.819V11.25h15V1.819L9.106,6.763a.626.626,0,0,1-.713,0ZM2.625,1.25,8.75,5.487,14.875,1.25Z" id="Fill"></path>
          </svg>
        </span>
          En savoir plus
      </a>
    </div>
    <div class="bottom-part">
      <a href="tel: 0123456789" class="link">
        <span class="icon">
          <img class= "like" src="./assets/images/logos/like.png" alt="">
        </span>
          Likes
      </a>
    </div>
  </div>
</div>`
}

export default createCard;