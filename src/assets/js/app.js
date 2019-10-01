var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });


  $(function(){
    var menuItemToUnderline = $("a[href='" + location.pathname.replace('/', '') + "']");
    if(menuItemToUnderline){
      $(".site-list__item").removeClass('site-list__item--active');
      menuItemToUnderline.parent().addClass('site-list__item--active');
    }
  });

  $(".news__to-all").click(function() {
    $(".news__item" ).show( "slow", function() {
      $(".news__to-all").addClass("none");
    });
  });

  $(".user-list__login").click(function(e) {
    e.preventDefault();
    $(".login-form").removeClass("none");
    $('body').css('overflow', 'hidden');
  });

  $(".login-form__closed").click(function(e) {
    e.preventDefault();
    $(".login-form").addClass("none");
    $('body').css('overflow', 'scroll');
  });

$(".form__button").click(function(e){
  e.preventDefault();
  $(".form__item").removeClass("empty-field");
  var fields = $(".form__item");
  var hasError = false;
  fields.each(function(index, item){
    if (!$(item).val()) {
      hasError = true;
      $(".fail-pop-up").removeClass("none");
      $(".success-pop-up").addClass("none");
      $(item).addClass("empty-field");
      $('body').css('overflow', 'hidden');
    }
  });

  if(!hasError){
    $(".success-pop-up").removeClass("none");
    $(".form__item").removeClass("empty-field");
    $('body').css('overflow', 'hidden');
  }

});

$(".fail-pop-up__button").click(function(e){
  e.preventDefault();
  $(".fail-pop-up").addClass("none");
  $('body').css('overflow', 'scroll');
});

$(".success-pop-up__button").click(function(e){
  e.preventDefault();
  $(".success-pop-up").addClass("none");
  $('body').css('overflow', 'scroll');
});

$(document).ready(function(){
  $('.owl-bottom').owlCarousel({
      loop:true,
      margin:0,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true,
              autoHeight:true
          },
          400:{
              items:1,
              nav:true,
            autoHeight:true
          },
          600:{
              items:1,
              nav:true,
            autoHeight:true
          },
          1000:{
              items:1,
              nav:true,
              loop:true,
              autoplay: false,
              autoplayTimeout:2000,
              autoplayHoverPause:false,
            autoHeight:true
          }
      }
  });
  owlInitialize();
  
});

function owlInitialize() {
  if ($(window).width() < 768) {
      $('.advantages__list.slider__list').addClass('owl-top').addClass("owl-carousel").addClass('owl-theme');
      $('.owl-top').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                autoHeight:true
            },
            400:{
                items:1,
                nav:true,
              autoHeight:true
            },
            600:{
                items:1,
                nav:true,
              autoHeight:true
            },
            1000:{
                items:1,
                nav:true,
                loop:true,
                autoplay: false,
                autoplayTimeout:2000,
                autoplayHoverPause:false,
              autoHeight:true
            }
        }
      });
  } else {
      $('.owl-top').owlCarousel('destroy');
      $('.advantages__list.slider__list').removeClass('owl-top').removeClass("owl-carousel").removeClass('owl-theme');
  }
}

$(window).resize(function() {
  owlInitialize();
});