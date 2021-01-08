
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.head').addClass('transparent');
    } else {
        $('.head').removeClass('transparent');
    }
});