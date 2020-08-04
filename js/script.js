$(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse").collapse('hide');
});

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//Smooth Scroll

var scroll = new SmoothScroll('a[href*="#"]', {
    // Function. Custom easing pattern
    // If this is set to anything other than null, will override the easing option above
    customEasing: function (time) {

        // return <your formulate with time as a multiplier>

        // Example: easeInOut Quad
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

    }
});

// Carousel

$('.home-slider').owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    loop: true,
    dots: false,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
    nav: false
});

$('.owl-courses').owlCarousel({
    animateOut: 'fadeOut',
    loop: true,
    dots: false,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true
        },

        750: {
            items: 2,
            nav: true,
            dots: false
        },

        1200: {
            items: 3,
            nav: true,
            dots: false
        }
    }
});

$('.owl-client').owlCarousel({
    animateOut: 'fadeOut',
    loop: true,
    dots: true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },

        750: {
            items: 2,
            nav: true,
            dots: false
        },

        1200: {
            items: 3,
            nav: false,
            dots: true
        }
    }
});

// WOW JS

wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})

wow.init();