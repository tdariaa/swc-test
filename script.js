// import './index.css';
console.log('hi');

const popup = document.querySelector('.popup');
const button = document.querySelector('.header__contacts-button');

function open(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
  document.addEventListener('click', closePopupByClickOnOverlay);
}

function closePopup(popup) { 
  popup.classList.remove('popup_opened'); 
  document.removeEventListener('keydown', closePopupByEscape);
  document.removeEventListener('click', closePopupByClickOnOverlay);
} 

function closePopupByEscape(evt) { 
  if (evt.key === 'Escape') { 
    const openedPopup = document.querySelector('.popup_opened'); 
    closePopup(openedPopup); 
  } 
};

function closePopupByClickOnOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) { 
    const openedPopup = document.querySelector('.popup_opened'); 
    closePopup(openedPopup); 
  } 
}

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  open(popup);
});