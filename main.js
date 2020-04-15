const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const image = document.querySelector('#image');
// Variable that gives us option on how much images we want to generate with ajax call in a function generateImages
const numImagesToGenerate = 5;

arrowEvents();
generateImages();

// Creates event listeners for easier use of events in the code
function arrowEvents() {
  leftArrow.addEventListener('click', leftSlide);
  rightArrow.addEventListener('click', rightSlide);
}

// Makes ajax request (numImagesToGenerate) number of times using Fetch API and push that promise url to imageArr
function generateImages() {
  for (let i = 0; i < numImagesToGenerate; i++) {
    fetch(`https://source.unsplash.com/800x400/?beach`).then((response) => {
      imageArr.push(`${response.url}`);
    });
  }
}

// Array that stores image url's
let imageArr = [];
// Current picture
let picture;

// Randomly chooses one image from imageArr to be displayed
function chooseImage() {
  picture = imageArr[Math.floor(Math.random() * imageArr.length)];
  image.src = `${picture}`;
  image.style.transition = 'opacity 1s ease-in';
  image.style.opacity = 1;
}

// Arrow functions that are called each time an arrow is clicked
function leftSlide() {
  image.style.opacity = 0;
  image.style.transition = 'opacity 1s ease-out';
  setTimeout(chooseImage, 1000);
}

function rightSlide() {
  image.style.opacity = 0;
  image.style.transition = 'opacity 1s ease-out';
  setTimeout(chooseImage, 1000);
}
