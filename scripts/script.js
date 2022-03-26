let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let openPopupButton = document.querySelector('.profile__btn-edit');
let closePopupButton = document.querySelector('.popup__btn-close');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let inputName = document.querySelector('.popup__input-profileName');
let inputAbout = document.querySelector('.popup__input-profileAbout');

function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup();
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);
