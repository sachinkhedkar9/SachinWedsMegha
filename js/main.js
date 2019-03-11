(function($) {
  'use strict';

  $(window).load(function() {
    if ($(".loaderWrap").length > 0) {
      $(".loaderWrap").delay(800).fadeOut("slow");
    }
  });

  getWidthAndHeight();
  $(window).resize(function() {
    getWidthAndHeight();
  });

  function getWidthAndHeight() {
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var bdescs = $('.bdescs').height();
    var bimgs = $('.bimgs').height();
    var bdescPadd = (winHeight - bdescs) / 2;
    var bimgs = ((winHeight - bimgs) / 2) + 20;

    $('.banners').css({ 'width': winWidth, 'height': winHeight });
    $('.carouselBanner').css({ 'height': winHeight });

    $('.bdescs').css({ 'padding-top': bdescPadd + 'px' });
    $('.bimgs').css({ 'padding-top': bimgs + 'px' });
  }

  if ($(window).width() > 200) {
    var wow = new WOW({
      mobile: true
    });
    wow.init();
  }

})(jQuery);
