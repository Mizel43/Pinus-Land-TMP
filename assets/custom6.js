$(document).ready(function() {
	'use strict';
  $('.test-step .next-btn').on('click', function(e) {
  	e.preventDefault();
      $(this).parents('.test-step').fadeOut(500);
      setTimeout(function (){
          $(this).parents('.test-step').next().addClass("active");
      }.bind(this), 800)
  })
    $('.test-step label.radio').on('click', function(e) {
          setTimeout(function (){
              $(this).parents('.test-step').fadeOut(500);
              setTimeout(function (){
                  $(this).parents('.test-step').next().addClass("active");
              }.bind(this), 800)
          }.bind(this), 500)
    })
    $('#video_main').on('click', function(e) {
        $('#video_player').prop('muted', false);
    })
    $('.next-btn').on('click', function(e) {
      e.preventDefault();
        $('.header1').fadeOut(500);
        setTimeout(function (){
            $('.header1').removeClass("active");
        }.bind('.header1'), 800)
    })
  $('.test-step .prev-btn').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.test-step').prev().addClass('active');
    $(this).parents('.test-step').removeClass('active');
    $(this).parents('.header1').removeClass('active');
  })
})


