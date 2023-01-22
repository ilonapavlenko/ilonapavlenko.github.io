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
    // ПАРТНЕРЫ СЛАЙД ПЕРВЫЙ
    $('.partners-slider-first').slick({
        dots:false,
        slidesToScroll: 1,
        slidesToShow: 6,
        arrows:false,
        easing: 'ease',
        pauseOnFocus:true,
        autoplay:true,
        autoplaySpeed:2400,
        speed:1400,
        responsive:[{
            breakpoint:480,
            settings:{
                slidesToScroll:1,
                slidesToShow:2,
                variableWidth:true,
                centerMode: false,
            }
        }],
    });

    
    // ПАРТНЕРЫ СЛАЙД ВТОРОЙ
    $('.partners-slider-second').slick({
        dots: false,
        slidesToScroll: 2,
        slidesToShow: 6,
        arrows: false,
        easing: 'ease',
        pauseOnFocus: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1800,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 3,
                variableWidth: true,
                centerMode: true,
                focusOnSelect: true
            }
        }],
    });
 $('.header-mmenu').click(function (event) {
        $('.header-menu').toggleClass('show');
    });
});

// FETCH

const formElem = document.querySelector("#form");

formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('https://formcarry.com/s/i9EtQjA3zV1', {
        method: 'POST',
        body: new FormData(formElem)
    });
    formElem.reset();
    alert("Данные отправлены!");
}
//faq
 $(document).ready(function() {
	let oldelem=null;
	$(".accordion-content").hide();
	$(".accordion-header").click(function () {
    if($(this).next().is(":animated")) return;
    $(this).next().slideToggle();
    $(this).toggleClass("active");
    $(this).parent().toggleClass("toggle");
    if(oldelem===this) return;
    $(oldelem).next().slideUp();
    $(oldelem).removeClass("active");
    $(oldelem).parent().removeClass("toggle");
    oldelem=this;
 });
}); 
