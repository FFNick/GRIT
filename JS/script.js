/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!СКРИТЫ ДЛЯ БУРГЕРА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .menu').toggleClass('active');
        /*отрубаем скрол контекста сайта при открытом мобильном меню*/
        $('body').toggleClass('lock');
    });
    /*начало пробы*/
    $('.header__link').click(function(event) {
        $('.header__burger.active, .menu.active').removeClass('active');
    });
    /*конец пробы*/
});

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!БУРГЕР ЗАКОНЧЕН!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!УЧАСТОК СЛАЙДЕРА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

$('.sl').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }
    ]

});


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!СЛАЙДЕР ЗАКОНЧЕН!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ПАСХАЛКА !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

$('#easter').on('mouseover', function() {
    // $(this).parent().addClass('dont');
    $('.card_easter').addClass('dont');
}).on('mouseout', function() {
    // $(this).parent().removeClass('dont');
    $('.card_easter').removeClass('dont');
})




function closePopup() {
    console.log('govno');
    setTimeout(function() {
        document.getElementById('popup').style.display = 'none';
    }, 10000);
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ПАСХАЛКА ЗАКОНЧЕНА !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!УЧАСТОК ПРЕЛОАДЕРА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
// document.body.onload = function() {

//         setTimeout(function() {
//             var preloader = document.getElementById('page-preloader');
//             if (!preloader.classList.contains('done')) {
//                 preloader.classList.add('done');
//             }
//         }, 500);

//     }
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ПРЕЛОАДЕР ЗАКОНЧЕН!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/



new WOW().init();