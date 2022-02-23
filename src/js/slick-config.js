$(document).ready(function () {
  $(".special-project__list").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 1000,
    infinite: false,
  });
  $(".articles__content-list").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    infinite: false,
  });
  $(".about-project__photo-block").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    infinite: false,
  });
  // $(".interactive-map__content-list").slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   speed: 1000,
  //   infinite: false,
  //   vertical: true,
  //   verticalSwiping: true,
  // });
});
