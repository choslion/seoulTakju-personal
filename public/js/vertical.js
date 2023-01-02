var swiper = new Swiper('.swiper.road-container', {
  direction: 'vertical',
  slidesPerView: 9,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  touchRatio: 0,
});

// 전체

// if ($('.sect-02 .swiper-wrapper .swiper-slide').length == 3) {
//   $('.sect-02 .swiper-wrapper').addClass('disabled');
//   $('.sect-02 .swiper-button-prev').addClass('disabled');
//   $('.sect-02 .swiper-button-next').addClass('disabled');
//   $('.sect-02 .swiper-pagination').addClass('disabled');
//   $('.sect-02 .slide-btn-box').addClass('disabled');
// }

// if($('.sect-05 .swiper-wrapper .swiper-slide').length == 4) {
// 	$('.sect-05 .swiper-wrapper').addClass('disabled');
// 	$('.sect-05 .swiper-button-prev').addClass('disabled');
// 	$('.sect-05 .swiper-button-next').addClass('disabled');
// 	$('.sect-05 .swiper-pagination').addClass('disabled');
// 	$('.sect-05 .slide-btn-box').addClass('disabled');
// }
