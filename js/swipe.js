document.querySelectorAll('.swiper-container').forEach((container, i) => {
  const slideCount = container.querySelectorAll('.swiper-slide').length;

  new Swiper(container, {
    wrapperClass: 'swiper-wrapper',
    loop: true,
    loopedSlides: slideCount,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: container.querySelector('.swiper-button-custom-next'),
      prevEl: container.querySelector('.swiper-button-custom-prev'),
    },
    pagination: {
      el: container.querySelector('.swiper-pagination'),
      clickable: true,
      bulletClass: 'custom-bullet',
      bulletActiveClass: 'active',
      renderBullet: function (index, className) {
        return `<div class="${className}" data-slide="${index}"></div>`;
      }
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      init: function () {
        const bullets = container.querySelectorAll('.custom-bullet');
        bullets[this.realIndex]?.classList.add('active');
      },
      slideChange: function () {
        const bullets = container.querySelectorAll('.custom-bullet');
        bullets.forEach(b => b.classList.remove('active'));
        bullets[this.realIndex]?.classList.add('active');
      }
    }
  });
});
