$(function() {
	var $carousel = $('#carousel');
	var mySwiper = new Swiper($carousel.children('.swiper-container')[0], {
	  pagination: '#carousel-pagination',
	  loop: true,
	  grabCursor: true,
	  paginationClickable: true
	});
	
	$carousel
		.children('a')
		.on('click', function(e) {
			mySwiper['swipe' + ($(e.target).hasClass('arrow-left') ? 'Prev' : 'Next')]();
			e.preventDefault();
		});
});