$(document).ready(function() {
    $('.smena-button').click(function() {
        $('.turniket').addClass('turniket_vid');
        $('.rabochie-mesta').removeClass('rabochie-mesta-visible');
        $('.turniket').removeClass('turniket_none');
     
    });
});
$(document).ready(function() {
    $('.smena-button-2').click(function() {
        $('.rabochie-mesta').addClass('rabochie-mesta-visible');
        $('.turniket').addClass('turniket_none');
        $('.turniket').removeClass('turniket_vid');
    });
});
