//accordion

$(document).ready(function () {

    $('.card__header').click(function () {
        $(this).next().slideToggle(500);
        if($(this).find('.card__button .arrow-down').css('display')=='none'){
            $(this).find('.card__button .arrow-down').css('display', 'block');
            $(this).find('.card__button .arrow-up').css('display', 'none');
        } else {
            $(this).find('.card__button .arrow-down').css('display', 'none');
            $(this).find('.card__button .arrow-up').css('display', 'block');
        }

    })
});

//scroll
$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 210) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 400);
        return false;
    });

});