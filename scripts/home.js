jQuery(function () {

    "use strict";
    $('#slider-carousel').carouFredSel({  // call Id from index.html, and link with caroufredsel
        responsive: true,  // responsive, it will open the web site in any browser
        width: '100%',
        circular: true,  // 
        scroll: {
            items: 1, // at a time will slide one image
            duration: 500,  // duration in ms
            pauseOnHover: true // when you hover over slider, it will not slide
        },
        auto: true, // it will slide automatically, you don't have to click
        items:
        {
            visible: {
                min: 1, // minimum slide
                max: 1 // maximum slide, it means one by one it will slide
            },
            height: "variable"
        },
        pagination: {
            container: ".sliderpager",  // icon for slide 
            pageAnchorBuilder: false    // don't want to put any link
        }
    });

    $('[data-toggle="tooltip"]').tooltip();
});

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    // loop: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

$('.swiper-slide').on('dblclick', function (e) {
    const elem = $(this);
    var metter = elem.width(); // from width changed to outerwidth
    console.log(metter);
    if (metter === 346) {
        elem.css(
            {
                'width': '550px',
                'height': '500px',
                'transition': '2s'

            }
        )
        elem.children('.imgBox').css(
            {
                'height': '380px',
                'transition': '2s'
            }
        )
        elem.children('.details').css(
            {
                'height': '60px',
                'transition': '2s'
            }
        )

        elem.find('.order-button').css(
            {
                'height': '56px',
                'transition': '2s'
            }
        )
    }
    else if (metter === 546) {
        elem.css(
            {
                'width': '350px',
                'height': '450px',
                'transition': '2s'
            }
        )
        elem.children('.imgBox').css(
            {
                'height': '300px',
                'transition': '2s'
            }
        )
        elem.children('.details').css(
            {
                'height': '70px',
                'transition': '2s'
            }
        )
        elem.find('.order-button').css(
            {
                'height': '78px',
                'transition': '2s'
            }
        )
    }
});

function initMap() {

    const location = { lat: 42.662914, lng: 21.165503 };
    const map = new google.maps.Map(document.getElementById("map-address"),
        {
            zoom: 5,
            center: location
        });

    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

