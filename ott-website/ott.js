
  
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    //   breakpoints: {
    //     640: {
    //       slidesPerView: 1,
    //     },
    //     768: {
    //       slidesPerView: 2,
    //     },
    //     1024: {
    //       slidesPerView: 3,
    //     },
    //   },
    });
