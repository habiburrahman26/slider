'use strict';

const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const img = document.querySelector('#currImg');
const dots = document.querySelector('.dots');

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

const activeDots = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach((dot) => dot.classList.remove('dots__dot--active'));

  const l = document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

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

// clear timer and reset
function clearTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 5000);
}

//nextSlide
const nextSlide = function () {
  if (currentSlide === allImg.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  toggoleClass(currentSlide);
  activeDots(currentSlide);
  clearTimer();
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
  clearTimer();
};

// init
const init = () => {
  goToSlide();
  createDots();
  activeDots(0);
};
init();

timer = setInterval(nextSlide, 5000);

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

dots.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activeDots(slide);
    clearTimer();
  }
});
