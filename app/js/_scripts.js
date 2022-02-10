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
		modal.find('#classroom-request').removeAttr('hidden')
		modal.find('#classroom-request .form-control').val(recipient)
		modal.find('#classroom-choose').attr('hidden', true)
		modal.find('#classroom-choose .form-control').removeAttr('required')
		modal.find('#classroom-choose .form-select option:first').prop('selected', true)
	} else {
		modal.find('#classroom-request').attr('hidden', true)
		modal.find('#classroom-request .form-control').val('')
		modal.find('#classroom-choose').removeAttr('hidden')
		modal.find('#classroom-choose .form-control').attr('required', true)
	}
})