$('.owl-1').owlCarousel({
    loop:false,
    margin: 10,

    nav: false,
    dots: false,
    autoplay:false,
    items: 6,
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        414: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


$('.owl-2').owlCarousel({
    loop:false,
    margin:0,
    nav: false,
    dots: false,
    autoplay:false,
    items: 6,
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        351: {
            items: 3
        },
        375: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

$('.owl-3').owlCarousel({
    loop: true,
    margin: 10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',

    nav: false,
    dots: false,
    autoplay:true,
    items: 1,
    margin: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.owl-5').owlCarousel({
    loop: true,
    margin: 10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',

    nav: false,
    dots: false,
    autoplay:true,
    items: 1,
    margin: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})