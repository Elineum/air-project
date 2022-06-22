$(document).ready(function () {
  $(".special-project__list").slick({
    speed: 1000,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 76,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".articles__content-list").slick({
    speed: 1000,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
  $(".about-project__photo-block").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 3000,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});
