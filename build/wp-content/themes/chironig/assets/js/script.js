$(function() {
    $('#tabs li').on('click', function() {
        $('#tabs li').removeClass('active');
        $(this).addClass('active');
        $('[data-content-tab]').removeClass('block').addClass('hidden');
        $(`[data-content-tab="${$(this).data('tab')}"]`).removeClass('hidden').addClass('block');
        $('#menu').removeClass('right-0').addClass('right-full');
    })

    $('[data-show-menu]').on('click', function() {
        $('#menu').removeClass('right-full').addClass('right-0');
    })

    $('[data-close-menu]').on('click', function() {
        $('#menu').removeClass('right-0').addClass('right-full');
    })

    $('#slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true,
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        autoplay: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });
})