$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
       
    });
});
$(document).ready(function() {
    $('.user').click(function() {
        $('.dropdown-content').toggleClass('show');
        $('.user-strelka').toggleClass('rotate');
     
    });
});
