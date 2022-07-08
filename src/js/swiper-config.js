new Swiper(".top-sliders", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  watchOverflow: true,
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
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
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
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
  speed: 1500,
  breakpoints: {
    320: {
      slidesPerView: 2.2,
      slidesPerGroup: 2,
      spaceBetween: 35,
    },
    768: {
      slidesPerView: 3.5,
      slidesPerGroup: 2,
      spaceBetween: 82,
    },
    1280: {
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 115,
    },
  },
});
new Swiper(".articles__tab-wrap", {
  watchOverflow: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 23,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 35,
    },
  },
});
