/**
 *-------------------------------------------------------------------------------------------------------------------------------------------
 * Go up button
 *-------------------------------------------------------------------------------------------------------------------------------------------
*/
var go_up_btn = $('#go-up-button')

$(window).on('scroll', function() {
	if ($(window).scrollTop() > 1000) {
		go_up_btn.addClass('_is-shown')
	} else {
		go_up_btn.removeClass('_is-shown')
	}
})

go_up_btn.on('click', function(e) {
	e.preventDefault()
	$('html, body').animate({scrollTop:0}, 1000)
})


/**
 *-------------------------------------------------------------------------------------------------------------------------------------------
 * Smooth scroll
 *-------------------------------------------------------------------------------------------------------------------------------------------
*/
$('a[data-scrollto]').bind('click.smoothscroll', function(){
	const target = $(this).attr('href')
	const bl_top = $(target).offset().top - 75

	$('body, html').animate({scrollTop: bl_top}, 1000)

	return false
})


/**
 *-------------------------------------------------------------------------------------------------------------------------------------------
 * Mobile menu
 *-------------------------------------------------------------------------------------------------------------------------------------------
*/
const burgerBtn = $('.left-side .burger > .btn-burger')
const mmenu = $('.mmenu')

function mmenuBackdrop() {
	if (!$('.mmenu-backdrop').length) {
		$('body').append('<div class="mmenu-backdrop fade"></div>')
		$('.mmenu-backdrop').delay(5).queue(function() {
			$(this).addClass('show').dequeue()
			$(this).on('click', function () {
				mmenuBackdrop()
				burgerBtn.removeClass('_is-active')
				mmenu.removeClass('_is-active')
			})
		})
	} else {
		$('.mmenu-backdrop').remove()
	}
}

// Open menu
burgerBtn.on('click', function() {
	mmenuBackdrop()

	$(this).toggleClass('_is-active')
	mmenu.toggleClass('_is-active')

	$('a[data-scrollto]').on('click', function() {
		$('.mmenu-backdrop').remove()
		burgerBtn.removeClass('_is-active')
		mmenu.removeClass('_is-active')
	})
})


/**
 *-------------------------------------------------------------------------------------------------------------------------------------------
 * Varying modal
 *-------------------------------------------------------------------------------------------------------------------------------------------
*/
$('#classroomModal').on('show.bs.modal', function (event) {
	const button = $(event.relatedTarget)
	const recipient = button.data('classroom')
	const modal = $(this)

	if (recipient) {
		modal.find('#classroom-request').removeClass('d-none')
		modal.find('#classroom-request').addClass('d-block')
		modal.find('#classroom-request .form-control').val(recipient)
	} else {
		modal.find('#classroom-request').removeClass('d-block')
		modal.find('#classroom-request').addClass('d-none')
		modal.find('#classroom-request .form-control').removeAttr('value')
	}
})