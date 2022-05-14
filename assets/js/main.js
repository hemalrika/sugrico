(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});
$('#mobile-menu-2').meanmenu({
	meanMenuContainer: '.mobile-menu-2',
	meanScreenWidth: "1199"
});

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

//mobile side menu
$('.side-toggle').on('click', function () {
	$('.side-info').addClass('info-open');
	$('.offcanvas-overlay').addClass('overlay-open');
})

$('.side-info-close,.offcanvas-overlay').on('click', function () {
	$('.side-info').removeClass('info-open');
	$('.offcanvas-overlay').removeClass('overlay-open');
})


function sliderActive() {
	/*------------------------------------
	Slider
	--------------------------------------*/
	if (jQuery(".slider-active").length > 0) {
		let sliderActive1 = '.slider-active';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			rtl: false,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,

			autoplay: {
				delay: 5000,
			},

			// If we need pagination
	        pagination: {
				el: ".cinkes-swiper-pagination",
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			a11y: false
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');

					$(this).removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration
						})
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			// Make animated when slide change
			init.on('slideChange', function () {
				$(sliderActive1 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}}



	// portfolio active 1 
	const sgPortfolioActive = new Swiper(".sg-portfolio-active", {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".sg-portfolio-prev",
			prevEl: ".sg-portfolio-next",
			},
			breakpoints: {
			0: {
				slidesPerView: 1,
				},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1199: {
				slidesPerView: 4
			}
		}
	});
	// portfolio active 2 
	const sgPortfolioActiveTwo = new Swiper(".sg-portfolio-carousel-active", {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		grabCursor: true,
		observer: true,
		observeParents: true,
		centeredSlides: true,
		navigation: {
			nextEl: ".sg-portfolio-prev-2",
			prevEl: ".sg-portfolio-next-2",
			},
			breakpoints: {
			0: {
				slidesPerView: 1,
				},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1199: {
				slidesPerView: 3
			}
		}
	});
	// team active 1 
	const sgTeamActive = new Swiper(".sg-team-active", {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".sg-portfolio-prev",
			prevEl: ".sg-portfolio-next",
			},
			breakpoints: {
			0: {
				slidesPerView: 1,
				},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1199: {
				slidesPerView: 4
			}
		}
	});
	// brand active 1 
	const sgBrandActive = new Swiper(".sg-brand-active", {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".sg-portfolio-prev",
			prevEl: ".sg-portfolio-next",
			},
			breakpoints: {
			0: {
				slidesPerView: 2,
				},
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 2,
			},
			1199: {
				slidesPerView: 3
			}
		}
	});
/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});
/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});
$('.has-nice-select').niceSelect();
// data background
$("[data-background").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})
// data width
$("[data-width]").each(function(){
	$(this).css("width",$(this).attr("data-width"))
})
// data background color
$("[data-bg-color]").each(function(){
	$(this).css("background-color",$(this).attr("data-bg-color"))
})
//for menu active class
$('.portfolio_nav button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});
// testimonial acitve 1
var testimonialControl = new Swiper(".sg-testimonial-active-control", {
	loop: true,
	spaceBetween: 0,
	slidesPerView: 1,
	freeMode: true,
	autoplay: true,
	watchSlidesProgress: true,
});
var testimonialControlMain = new Swiper(".sg-testimonial-active-main", {
	loop: true,
	spaceBetween: 0,
	navigation: {
		nextEl: ".sg-testimonial-next",
		prevEl: ".sg-testimonial-prev",
	},
	thumbs: {
		swiper: testimonialControl,
	},
});
// testimonial active 2 
const testimonialActiveTwo = new Swiper(".sg-testimonial-active-2", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	centeredSlides: true,
	navigation: {
		nextEl: ".sg-portfolio-prev-2",
		prevEl: ".sg-portfolio-next-2",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			centeredSlides: false,
		},
		576: {
			slidesPerView: 1,
			centeredSlides: false,
		},
		768: {
			slidesPerView: 2,
			centeredSlides: false,
		},
		992: {
			slidesPerView: 2,
		},
		1199: {
			slidesPerView: 3
		}
	}
});
// product active 2 
const productActiveTwo = new Swiper(".sg-product-active-2", {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	centeredSlides: false,
	navigation: {
		nextEl: ".sg-product-prev-2",
		prevEl: ".sg-product-next-2",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1199: {
			slidesPerView: 4
		}
	}
});
// instagram active 2 
const instagramActiveTwo = new Swiper(".instagram-active-2", {
	slidesPerView: 5,
	spaceBetween: 0,
	loop: true,
	centeredSlides: false,
	navigation: {
		nextEl: ".sg-insta-prev-2",
		prevEl: ".sg-insta-next-2",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1199: {
			slidesPerView: 4
		}
	}
});
// cross 2
$('.cross2').cross2({
	titlesEnabled: false,
	mousemoveEnabled: true,
	easing: 'easeInOutBack',
	animationDuration: 1200,
});
//   odometer
$('.odometer').appear(function (e) {
	var odo = $(".odometer");
	odo.each(function () {
		var countNumber = $(this).attr("data-count");
		$(this).html(countNumber);
	});
});
// WOW active
new WOW().init();

sliderActive();
// datepicker
$('[data-toggle="datepicker"]').datepicker();
// select2
$('#select-doctor').select2();
// popup
$('.video-call-btn, .sg-header-sidebar-action-btn').on('click', function() {
	$('.sg-video-call-popup, .bg-overlay').addClass('visible');
});
$('.cross-btn button, .bg-overlay').on('click', function() {
	$('.sg-video-call-popup, .bg-overlay').removeClass('visible');
});
$('.sg-header-sidebar-action-btn-bar').on('click', function() {
	$('.sg-sidebar-menu-popup-1, .bg-overlay').addClass('visible');
})
$('.bg-overlay, .sg-sidebar-menu-cross button').on('click', function() {
	$('.sg-sidebar-menu-popup-1, .bg-overlay').removeClass('visible');
})
$('.header-search-toogle-btn').on('click', function() {
	$('.bg-overlay, .sg-popup-search-box').addClass('visible');
});
$('.bg-overlay').on('click', function() {
	$('.sg-popup-search-box').removeClass('visible');
})
})(jQuery);