$(document).ready(function() {
    $('#go-now-btn').click(function() {
        $('html, body').animate({
            scrollTop: $('#page2').offset().top
        }, 1000); 
    });
});