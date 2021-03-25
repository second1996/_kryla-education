// Import Swiper slider bundle
import SwiperCore, { Swiper, Autoplay, Navigation, Pagination, Scrollbar, Controller } from 'swiper/core'
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, Controller])

/**
 *-------------------------------------------------------------------------------------------------------------------------------------------
 * Slider
 *-------------------------------------------------------------------------------------------------------------------------------------------
*/
const featuresSlider = new Swiper('.h-features-slider .swiper-container', {
	slidesPerView: 1,
	spaceBetween: 30,
	autoHeight: true,
	navigation: {
		prevEl: '.h-features-navigation .swiper-button-prev',
		nextEl: '.h-features-navigation .swiper-button-next'
	},
	pagination: {
		el: '.h-features-slider .swiper-pagination',
		type: 'progressbar',
		progressbarOpposite: true
	},
	scrollbar: {
		el: '.h-features-slider-nav .swiper-scrollbar'
	},
	breakpoints: {
		1240: {
			autoHeight: false,
			navigation: false
		}
	},
	on: {
		init: function(swiper) {
			let currentSlide = this.activeIndex + 1 < 10 ? '0' : ''
			let countTotal = this.slides.length < 10 ? '0' : ''
			// Setup counter
			$('.h-features-slider-nav .swiper-counter').append(`
				<span class="current-slide">${currentSlide}${this.activeIndex + 1}</span>
				<span class="separator">/</span>
				<span class="total-slides">${countTotal}${this.slides.length}</span>
			`)
			
			$('.h-features-slider-nav .swiper-menu-item').eq(0).addClass('_current')
			$('.h-features-slider-nav .swiper-menu-item').each(function(idx, el) {
				$(el).attr('data-inddex', idx)
				$(el).on('click', function() {
					$('.swiper-menu-item').not(this).removeClass('_current')
					$(this).addClass('_current')
					featuresSlider.slideTo(idx)
				})
			})
		},
		slideChange: function(swiper) {
			let currentSlide = swiper.activeIndex + 1 < 10 ? '0' : ''
			// Change current number of slide
			$('.h-features-slider-nav .swiper-counter').find('.current-slide').text(`${currentSlide}${this.activeIndex + 1}`)
			
			$('.h-features-slider-nav .swiper-menu-item').removeClass('_current')
			$('.h-features-slider-nav .swiper-menu-item').eq(swiper.activeIndex).addClass('_current')
		}
	}
})
