$(function () {


   // * --------------------------------------------------------


   $(".main-slider").slick({
      nextArrow:
         '<button class="main-slider__arrows main-slider__arrows--next"></button>',
      prevArrow:
         '<button class="main-slider__arrows main-slider__arrows--prev"></button>',
      // centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      // slidesToShow: 1,
      // fade: true,
      cssEase: 'linear',
      initialSlide: 1,


   });


   $(".why__slider").slick({
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      swipe: false,
   });


   $(".ourclients__slider").slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 3,
      dots: false,
      responsive: [
         {
            breakpoint: 1090,
            settings: {
               slidesToShow: 5,
            }
         },
         {
            breakpoint: 920,
            settings: {
               slidesToShow: 4,
            }
         },
         {
            breakpoint: 730,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 565,
            settings: {
               slidesToShow: 2,
            }
         },

         {
            breakpoint: 391,
            settings: {
               slidesToShow: 1,
               adaptiveHeight: true,
               centerMode: true,
               variableWidth: true,
               autoplay: true,
               autoplaySpeed: 1500,
               infinite: true,
               speed: 600,
            }
         }
      ]

   });


   // * --------------------------------------------------------



   $('.header__menu-btn').on('click', function () {
      $('.menu__list').slideToggle();
      $(this).toggleClass('rotate');

   });




   // * --------------------------------------------------------


   var block_show = false;

   function scrollTracking() {
      if (block_show) {
         return false;
      }

      var wt = $(window).scrollTop();
      var wh = $(window).height();
      var et = $('.skills__progress').offset().top;
      var eh = $('.skills__progress').outerHeight();
      var dh = $(document).height();

      if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
         block_show = true;

         $(".skills__progress").each(function () {
            var $bar = $(this).find(".skills__bar");
            var $val = $(this).find("span");
            var perc = parseInt($val.text(), 10);

            $({ p: 0 }).animate({ p: perc }, {
               duration: 3000,
               easing: "swing",
               step: function (p) {
                  $bar.css({
                     transform: "rotate(" + (45 + (p * 1.8)) + "deg)",
                  });
                  $val.text(p | 0);
               }
            });
         });

      }
   }

   $(window).scroll(function () {
      scrollTracking();
   });

   $(document).ready(function () {
      scrollTracking();
   });


   // * --------------------------------------------------------




   $(".main-slider__arrows--prev").addClass("wow rotateInDownLeft");
   $(".main-slider__arrows--next").addClass("wow rotateInDownRight");
   $(".header__inner, .main-slider__title, .main-slider__text, .why__title").addClass("wow flipInX");
   $(".services__heading-btn").addClass("wow zoomInRight");
   $(".services__item").addClass("wow fadeInUpBig").attr("data-wow-offset", "100");
   $(".why__image--left, .because__item--list").addClass("wow fadeInLeft").attr("data-wow-offset", "200");
   $(".why__image--right, .because__item--quotes").addClass("wow fadeInRight").attr("data-wow-offset", "200");
   $(".why__image--center").addClass("wow fadeIn").attr("data-wow-offset", "200");
   $(".ourclients__slider").addClass("wow fadeInRightBig");
   $(".footer__contacts").addClass("wow fadeInUpBig").attr("data-wow-delay", "0.2s");
   $(".footer__item--left").addClass("wow fadeInUpBig").attr("data-wow-delay", "0.4s");
   $(".footer__item--right").addClass("wow fadeInUpBig").attr("data-wow-delay", "0.6s");
   $(".footer__blog").addClass("wow fadeInUpBig").attr("data-wow-delay", "0.8s");
   $(".footer-copy").addClass("wow fadeInDown");



   // * --------------------------------------------------------


   new WOW().init();



});
