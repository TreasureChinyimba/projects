const slider = document.querySelector('.image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const heading = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');

const images = ["photos/1.jpg", "photos/2.jpg", "photos/3.jpg", "photos/4.jpg", "photos/5.jpg", "photos/6.jpg"];
const descriptions = ["Great HD wallpaper", "Great", "Awesome", "Fantastic", "Good", "Cool"];
const headings = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5", "Image 6"];

let id = 0;

function slide(id) {
  slider.style.backgroundImage = `url(${images[id]})`;   
  slider.classList.add('image-fade');
  setTimeout(() => {
    slider.classList.remove('image-fade');
  }, 550);
  heading.innerText = headings[id];
  description.innerText = descriptions[id];
}

arrLeft.addEventListener('click', () => {
  id--;
  if (id < 0) {
    id = images.length - 1;
  }
  slide(id);
});

arrRight.addEventListener('click', () => {
  id++;
  if (id > images.length - 1) {
    id = 0;
  }
  slide(id);
});

// Call slide function initially
slide(id);
