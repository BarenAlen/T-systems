import './vendor';
$(() => {
	let owl = $('.hero-carousel');

	function isNavCollapse() {
		if ($(window).width() <= 768) {

			return true;
		}
	}
	function applyHeaderBg() {
		if ($(window).scrollTop() > 0) {
			$('.page-header.fixed').addClass('page-header--bg');
		} else {
			$('.page-header.fixed').removeClass('page-header--bg');
		}
	}

	owl.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		navClass: ['hero-carousel-prev', 'hero-carousel-next'],
		nav: true,
		dots: false,
		transitionStyle: 'fade',
	});

	$(window).on('scroll', () => {
		applyHeaderBg();
	});

	$('.go-to-top').on('click', (e) => {
		e.preventDefault();
		$('html').animate({scrollTop: 0}, 500);
	});

	$('.navbar-toggler').on('click', function(e){
		let $toggler = $(this);
		let $menu =  $('#' + $toggler.attr('data-target'))

		if (isNavCollapse()) {
			$menu.slideToggle();
		}
	});
});
