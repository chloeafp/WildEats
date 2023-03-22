function createPopup() {
  const popup = document.querySelector(".popup-title");
  let email = document.querySelector(".barre").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const a = document.createElement("a");

  const popupInvalideEmail = document.querySelector(".popup-description");

  if (email.match(mailformat)) {
    a.href = "#popup";
    a.click();
    popup.innerHTML = `Votre email : ${email} a été enregistré avec succès`;
    popupInvalideEmail.innerHTML = `Félicitation`;
  } else {
    const popupInvalideEmail = document.querySelector(".popup-description");
    a.href = "#popup";
    a.click();
    popup.innerHTML = `Votre email : ${email} est invalide :(`;
    popupInvalideEmail.innerHTML = `Dommage`;
  }
}

document.querySelector("#button-submit").addEventListener("click", createPopup);
