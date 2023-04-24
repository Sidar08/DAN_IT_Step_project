$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});

$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  slide: "div",
});

$(".your-element").on("swipe", function (event, slick, direction) {
  console.log(direction);
});

$(".your-element").on("edge", function (event, slick, direction) {
  console.log("edge was hit");
});

$(".your-element").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    console.log(nextSlide);
  }
);


