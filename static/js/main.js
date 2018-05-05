(function($){

  $(function(){
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1||u.indexOf('iPhone') > -1||u.indexOf('Windows Phone') > -1||navigator.userAgent.indexOf("iPad")>-1) {

      $(".hover-bg .hover-text").css({'opacity':'1'});
      $(".hover-bg .hover-text>h4").css({'opacity':'1','-webkit-transform':'translateY(0)','transform':'translateY(0)'});
      $(".hover-bg .hover-text>i").css({'opacity':'1'});
    }
  });

  'use strict';

  // 折叠导航
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  // Testimonial Slider
  $('a.page-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 40
        }, 900);
        return false;
      }
    }
  });

  // Show Menu on Book
  $(window).bind('scroll', function() {
    var navHeight = $(window).height() - 100;
    if ($(window).scrollTop() > navHeight) {
      $('.navbar-default').addClass('on');
    } else {
      $('.navbar-default').removeClass('on');
    }
  });

  $('body').scrollspy({
    target: '.navbar-default',
    offset: 80
  })

  $(document).ready(function() {
    $("#testimonial").owlCarousel({
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true
    });
  });

  // Portfolio Isotope Filter
  $(window).load(function() {
    var $container = $('.portfolio-items');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    $('.cat a').click(function() {
      $('.cat .active').removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });
  });

  // counter Up
  $(document).ready(function( $ ) {
    if($("span.count").length > 0){
      $('span.count').counterUp({
        delay: 10, // the delay time in ms
        time: 1000 // the speed time in ms
      });
    }
  });

})(jQuery)
