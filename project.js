$(document).ready(function(){

    //УВЕЛИЧЕНИЕ ТАРИФОВ ПРИ НАВЕДЕНИИ

    $('.plans-card-starter').mouseover(function(){
        $(this).addClass('scaled');
        $('.plans-card-business').addClass('business-scale');
    });
    $('.plans-card-starter').mouseout(function(){
        $(this).removeClass('scaled');
        $('.plans-card-business').removeClass('business-scale');
    });
    $('.plans-card-vip').mouseover(function(){
        $(this).addClass('scaled');
        $('.plans-card-business').addClass('business-scale');
    });
    $('.plans-card-vip').mouseout(function(){
        $(this).removeClass('scaled');
        $('.plans-card-business').removeClass('business-scale');
    });
    
    // СЛАЙДЕР ДЛЯ ОТЗЫВОВ

    $('.reviews-slider').on(`init reInit`, function (event, slick) {
        $('.slick-slide-num-current').text('0' + 1 + ' '); 
    })
    $('.reviews-slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
        $('.slick-slide-num-current').text('0' + (currentSlide + 1) + ' '); 
    })
    $('.reviews-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        adaptiveHeight: true,
        easing: 'ease',
        appendArrows: '.slick-arrows',
        prevArrow: '<span class="slick-prev"><</span>',
        nextArrow: '<span class="slick-next">></span>'

    });
  });
