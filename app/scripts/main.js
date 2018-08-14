$(document).ready(function(){
  // Scroll Events
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    // Activate menu
    if (wScroll > 20) {
      $('header').addClass('active');
    }
    else {
      $('header').removeClass('active');
    }
    //Scroll Effects
  });

    //slider
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: '.feedback-slider',
  });
  $('.feedback-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
    dots: false,
    focusOnSelect: true,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 575,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});
/* скрипт адаптивного меню */
$(document).ready(function() {
  var menuLink = $('.menu-link');
  var menu = $('.adaptive-menu');
  var close = $('.close-btn');
  var navLink = $('li a');

  menuLink.click(function() {
    menu.toggleClass('active-menu');
  });
  close.click(function() {
    menu.toggleClass('active-menu');
  });

  navLink.on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    var top = $(target).offset().top;
    $('html,body').animate({scrollTop: top}, 500)
  });

  /* choose plan button (.you-are) */
  var individual_price_table = $('.you-are').find('.individual');
  var company_price_table = $('.you-are').find('.company');

  $('.you-are').find('.individual').on('click', function(){
    $(this).closest('.you-are').removeClass('clicked');
    $(this).siblings().removeClass('selected');
    individual_price_table.addClass('selected');
    company_price_table.removeClass('selected');
    $('.build-block-company').removeClass('selected-build').css('display', 'none').hide().fadeOut();
    $('.build-block-individual').addClass('selected-build').delay(100).css('display', 'flex').hide().fadeIn(500);
  });

  $('.you-are').find('.company').on('click', function(){
    $(this).closest('.you-are').addClass('clicked');
    $(this).siblings().removeClass('selected');
    company_price_table.addClass('selected');
    individual_price_table.removeClass('selected');
    $('.build-block-individual').removeClass('selected-build').css('display', 'none').hide().fadeOut();
    $('.build-block-company').addClass('selected-build').delay(100).css('display', 'flex').hide().fadeIn(500);
  });
//Scroll2id
  $(window).on('load',function(){
    $('a[rel=\'Scroll2id\']').mPageScroll2id({
      scrollSpeed: 1200,
      autoScrollSpeed: true,
      pageEndSmoothScroll: true
    });
  });

  //AOS
  AOS.init();

  //lightGallery
  $('#video-gallery').lightGallery();
});



