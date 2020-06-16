$(function() {
     $('.gallery ul li').hover(
      function () {
         $(this).stop().animate({width : "700"}, 300).find('a>span').fadeIn(300)},
      function () {
         $(this).stop().animate({width : "60"}, 300).find('a>span').fadeOut(300)});
  });