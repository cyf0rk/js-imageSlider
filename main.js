const leftArrow = document.querySelector('.fa-caret-left');
const rightArrow = document.querySelector('.fa-caret-right');
const imageContainer = document.querySelector('.image-container');

arrowEvents();

function arrowEvents() {
  leftArrow.addEventListener('click', leftSlide);
  rightArrow.addEventListener('click', rightSlide);
}

function leftSlide() {}

function rightSlide() {}
