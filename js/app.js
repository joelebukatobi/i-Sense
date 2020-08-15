$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 29,
    dotsEach: true,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});
