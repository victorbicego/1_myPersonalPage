
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.header').addClass('transparent');
    } else {
        $('.header').removeClass('transparent');
    }
});