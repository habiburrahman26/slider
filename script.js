'use strict';

const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const img = document.querySelector('#currImg');
const dots = document.querySelector('.dots');

// const imgs = [
//   'img/avenue-2215317_1280.jpg',
//   'img/mountains-100367_1920.jpg',
//   'img/nature-g492b774d4_1280.jpg',
//   'img/night-3078326_1280.jpg',
//   'img/sunset-1373171_1920.jpg',
// ];

// const tick = () => {
//   if (currentSlide === imgs.length - 1) {
//     currentSlide = 0;
//   } else {
//     currentSlide++;
//   }
//   img.setAttribute('src', imgs[currentSlide]);
// };

// setInterval(tick, 3000);
// tick();

let currentSlide = 0;
let timer;

const allImg = document.querySelectorAll('.img');
allImg[0].classList.add('active');

// create dots
const createDots = function () {
  allImg.forEach((_, i) => {
    const html = `
      <button class="dots__dot" data-slide="${i}">
      `;
    dots.insertAdjacentHTML('beforeend', html);
  });
};
createDots();

const activeDots = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach((dot) => dot.classList.remove('dots__dot--active'));

  const l = document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
activeDots(0);

// toggle class
const toggoleClass = function (slide = 0) {
  allImg.forEach((el) => {
    el.classList.remove('active');
  });

  allImg[slide].classList.add('active');
};

const goToSlide = function (slide = 0) {
  toggoleClass(slide);
};

goToSlide();

//nextSlide
const nextSlide = function () {
  if (currentSlide === allImg.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  toggoleClass(currentSlide);
  activeDots(currentSlide);

  // clear timer and reset
  clearInterval(timer);
  timer = setInterval(nextSlide, 5000);
};

//prevSlide
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = allImg.length - 1;
  } else {
    currentSlide--;
  }

  toggoleClass(currentSlide);
  activeDots(currentSlide);

  // clear timer and reset
  clearInterval(timer);
  timer = setInterval(nextSlide, 5000);
};

timer = setInterval(nextSlide, 5000);

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

dots.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activeDots(slide);

    // clear timer and reset
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000);
  }
});
