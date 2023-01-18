"use strict";

// INICIAR SLIDER 

const swiper = new Swiper('.classSlider', {
    slidesPerView: 'auto',
    slidesPerGroupAuto: true,
    slidesPerGroup: 1,
    speed: 500,
    spaceBetween: 24,
    grabCursor: true,
    lazy: true,
});