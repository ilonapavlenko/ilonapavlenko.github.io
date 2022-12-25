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
  });
