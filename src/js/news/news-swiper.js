let swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1440: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        425: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320 : {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    }
});

let swiperSeeAlso = new Swiper(".see-also-swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next see-also-prev',
        prevEl: '.swiper-button-prev see-also-next',
    },
    breakpoints: {
        1440: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        425: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320 : {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    }
})