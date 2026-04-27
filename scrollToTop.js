// Listen for scroll event and show/hide the button
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  var showAt = 50;

  if (wScroll > showAt) {
    $('#top').fadeIn();
  } else {
    $('#top').fadeOut();
  }
});

// Append button to body
$('body').append('<a id="top" href="#">TOP</a>');

// Style the button
$('#top').css({
  'bottom': '200px',
  'right': '20px',
  'position': 'fixed',
  'cursor': 'pointer',
  'z-index': '1',
  'display': 'none',
  'background-color': 'rgba(0,0,0,0.7)',
  'padding': '20px 40px',
  'color': '#ffffff'
});

// Scroll to top on click
$('#top').click(function () {
  $('body, html').animate({ scrollTop: 0 }, 800);
  return false;
});
