const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const image = document.querySelector('#image');
const numImagesToGenerate = 5;

// Array that stores image url's
let imageArr = [];

arrowEvents();
generateImages();

// Creates event listeners for easier use of events in the code
function arrowEvents() {
  leftArrow.addEventListener('click', leftSlide);
  rightArrow.addEventListener('click', rightSlide);
}

// Makes ajax request numImagesToGenerate number of times using Fetch API and push that promise url to imageArr
function generateImages() {
  for (let i = 0; i < numImagesToGenerate; i++) {
    fetch(`https://source.unsplash.com/800x400/?beach`).then((response) => {
      imageArr.push(`${response.url}`);
    });
  }
}

// Randomly chooses one image from imageArr to be displayed
function chooseImage() {
  picture = Math.floor(Math.random() * imageArr.length);
  image.src = `${imageArr[picture]}`;
}

// Arrow functions that are called each time an arrow is clicked
function leftSlide() {
  chooseImage();
}

function rightSlide() {
  chooseImage();
}
