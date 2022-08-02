$(function () {

  $('.tabs__btn').on('click', function (e) {
    e.preventDefault();
    $('.tabs__btn').removeClass('tabs__btn--active');
    $(this).addClass('tabs__btn--active');
    $('.tabs__content-item').removeClass('tabs__content-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active');
  });

  $('.tabs__btn').on('click', function () { 
    $('.tabs__btn').toggleClass('tabs__btn--dropdown');
     
  });

});

 