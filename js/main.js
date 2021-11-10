//main.js

$(function(){
    //toggle 버튼
    $('#toggle-btn').click(function(){
        $('#gnb ul').slideToggle(300);
    })
    
    $('.works-slider > .owl-carousel').owlCarousel({
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText:['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:3
            },
        }
    });
})

