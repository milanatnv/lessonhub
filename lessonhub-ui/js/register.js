$(document).ready(function() {
  
  $('.next-btn').click(function() {
    $(this).parent().fadeOut(100, function() {
      $(".password-section").fadeIn(500);
    })
  });

});