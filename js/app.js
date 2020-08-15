$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 29,
    dotsEach: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 8000,
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

  AOS.init({
    duration: 1200,
  });

  let screen = window.matchMedia("(max-width: 576px)");
  if (screen.matches) {
    $(".header-img").attr("data-aos", "fade-up");
    $(".about-img").attr("data-aos", "fade-up");
    $(".about-2-img").attr("data-aos", "fade-up");
  } else {
    $(".header-img").attr("data-aos", "fade-left");
    $(".about-img").attr("data-aos", "fade-down");
    $(".about-2-img").attr("data-aos", "fade-down");
  }
});
