$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></img></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: true,
              arrows: false
            }
          }
        ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
      // $('.catalog-item__link').each(function(i) {
      //   $(this).on('click', function(e) {
      //     e.preventDefault();
      //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      //   })
      // });
 

      function toggleSlide(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        });
      };

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');
  });

// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page', 
//     autoplay: false,
//     controls: false,
//     nav: false
//   });

//   document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
//   }); 
//   document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
//   }); 



// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//     items: 1,
//     loop: true,
//     nav: false,
//   });
// });

// const owl = $('.owl-carousel');
// owl.owlCarousel({
//       items: 1,
//     loop: true,
//     nav: false,
// });

// // Go to the next item
// $('.owl-next').click(function() {
//   owl.trigger('next.owl.carousel');
// })
// // Go to the previous item
// $('.owl-prev').click(function() {
//   // With optional speed parameter
//   // Parameters has to be in square bracket '[]'

//   owl.trigger('prev.owl.carousel', [300]);
// })


  // document.querySelector('.owl-prev').addEventListener('click', function () {
  //   owl.goTo('owl-prev');
  // }); 
  // document.querySelector('.owl-next').addEventListener('click', function () {
  //   owl.goTo('owl-next');
  // }); 













// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

// const swiper = new Swiper('.swiper', {
//     effect: 'cards',
//     cardsEffect: {
//         allowSlideNext: true,
//         allowSlidePrev: true,
//     },

//     autoplay: true
// });

// const swiper = new Swiper(".mySwiper", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

//   document.querySelector('.swiper-button-prev').addEventListener('click', function () {
//     slider.goTo('swiper-button-prev');
//   }); 
//   document.querySelector('.swiper-button-next').addEventListener('click', function () {
//     slider.goTo('swiper-button-next');
//   }); 
