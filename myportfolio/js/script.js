/* eslint-disable no-undef */
/* jquery is used for DOM manipulation */
// eslint-disable-next-line no-undef
$(document).ready(function () {
  new WOW().init()
  // for the hero part of the page
  $('.hero-content').addClass('wow')
  $('.wow').addClass('slideInUp')
  $('.projects').css('margin-bottom', '20px')
  $('.target').css('margin-bottom', '20px')
})
