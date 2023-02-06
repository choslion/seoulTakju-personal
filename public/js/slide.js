var main02Swiper = new Swiper('.img-box.swiper-container', {
  effect: 'fade',
  fadeEffect: {crossFade: true},
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 500,
  loop: true,
  loopAdditionalSlides: 1,
  navigation: {nextEl: '.section3 .swiper-button-next', prevEl: '.sect-02 .swiper-button-prev'},
  pagination: {
    el: '.section3 .swiper-pagination',
    clickable: true,
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' + '<span class="barSpace">' + ' / </span>' + '<span class="' + totalClass + '"></span>';
    },
  },
});

var swiper03 = new Swiper('.hover-box .mo-box .swiper-container', {
  effect: 'fade',
  fadeEffect: {crossFade: true},
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,
  touchRatio: 0,
  loop: true,
  loopAdditionalSlides: 1,
  pagination: {el: '.hover-box .swiper-pagination', clickable: true},
});

var swiper = new Swiper('.road-container', {
  direction: 'vertical',
  loop: true,
  // loopAdditionalSlides: 1,
  slidesPerView: 9,
  autoplay: {
    delay: 2000,
    // disableOnInteraction: false,
  },
  // touchRatio: 0,
});
