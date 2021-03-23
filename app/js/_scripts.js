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