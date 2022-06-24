new Swiper(".top-sliders", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  watchOverflow: true,
  spaceBetween: 20,
  speed: 1000,
  breakpoints: {
    319: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1279: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  observe: true,
});
new Swiper(".special-project__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  watchOverflow: true,
  spaceBetween: 20,
  speed: 1000,
  breakpoints: {
    319: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});
new Swiper(".about-project__photo-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  watchOverflow: true,
  spaceBetween: 115,
  speed: 3000,
  breakpoints: {
    319: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 66,
    },
    767: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 82,
    },
    1279: {
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 115,
    },
  },
});
