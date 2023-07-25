$(document).ready(function(){
    $('.decisions-carousel').slick({
        infinite:false,
        speed:1500,
        prevArrow:'<button type="button" class="slick-prev"><img src="../icons/decisions/arrow_left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../icons/decisions/arrow_right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows:false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: false
                }
            },
            {
                breakpoint: 575,
                settings: {
                    arrows: false
                }
            }
        ]
    });
  });