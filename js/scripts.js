$(document).ready(function() {

  $('#nav-home').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 450);
    return false;
  });

  $('#nav-services').click(function() {
    $('html, body').animate({ scrollTop: $('#services').offset().top }, 450);
    return false;
  });

  $('#nav-work').click(function() {
    $('html, body').animate({ scrollTop: $('#work').offset().top }, 450);
    return false;
  });

  $('#nav-contact').click(function() {
    $('html, body').animate({ scrollTop: $('#contact').offset().top }, 450);
    return false;
  });

});

