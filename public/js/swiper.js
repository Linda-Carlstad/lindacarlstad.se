$(document).ready(function () {

    var sponsors = $( '.swiper-wrapper' ).children().length;
    console.log(sponsors);
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 2200,
        },
        speed: 5000,
        direction: 'horizontal',
        freeMode: true,
        slidesPerView: 2,
    });
});
