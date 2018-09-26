webpackJsonp([0],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(126);

$(function () {
	var owl = $('.hero-carousel');

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
		transitionStyle: 'fade'
	});

	$(window).on('scroll', function () {
		applyHeaderBg();
	});

	$('.go-to-top').on('click', function (e) {
		e.preventDefault();
		$('html').animate({ scrollTop: 0 }, 500);
	});

	$('.navbar-toggler').on('click', function (e) {
		var $toggler = $(this);
		var $menu = $('#' + $toggler.attr('data-target'));

		if (isNavCollapse()) {
			$menu.slideToggle();
		}
	});
});

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(127);

var _svg4everybody = __webpack_require__(329);

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _jquery = __webpack_require__(330);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _svg4everybody2.default)();

window.$ = _jquery2.default;
window.jQuery = _jquery2.default;

__webpack_require__(331);

__webpack_require__(332);

/***/ })

},[125]);
//# sourceMappingURL=main.js.map