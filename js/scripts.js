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

  // $("#headroom").headroom();

  $("headroom").headroom({
    "tolerance": 50,
    "offset": 100,
    "classes": {
    "initial": "animated",
    "pinned": "slideDown",
    "unpinned": "slideUp",
    "top": "headroom--top",
    "notTop": "headroom--not-top"
  }
  });

  // to destroy
  $("#headroom").headroom("destroy");



});

