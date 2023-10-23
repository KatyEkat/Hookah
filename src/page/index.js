const header = document.querySelector('.header_static');
window.addEventListener('scroll', function () {
	if (window.scrollY >= 5) {
		header.classList.add('header_scrolling');
	} else {
		header.classList.remove('header_scrolling');
	}
});

const swiper = new Swiper('.mySwiper', {
	effect: 'coverflow',
	grabCursor: true,
	initialSlide: 2,
	centeredSlides: true,
	slidesPerView: '5',
	spaceBetween: 30,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 40,
		// modifier: 3,
		slideShadows: false,
	},
	navigation: {
		nextEl: '.swiper_btn_next',
		prevEl: '.swiper_btn_prev',
	},
});