function createPopup() {
  const a = document.createElement("a");
  a.href = "#popup";
  a.click();
  const email = document.querySelector(".barre").value;
  const popup = document.querySelector(".popup-title");
  popup.innerHTML = `Votre e-mail : ${email} a été enregistré avec succès`;
}
