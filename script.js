'use strict';

const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const img = document.querySelector('#currImg');

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

const allImg = document.querySelectorAll('.img');

allImg[0].classList.add('active');

btnRight.addEventListener('click', function () {
  if (currentSlide === allImg.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  allImg.forEach((el) => {
    el.classList.remove('active');
  });

  allImg[currentSlide].classList.add('active');
});

btnLeft.addEventListener('click', function () {
  
});
