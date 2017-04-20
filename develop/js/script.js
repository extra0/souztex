$(function(){

	// главный слайдер
	$('.js-main-slider').bxSlider({
		mode: 'fade',
		auto: true,
		pager: false,
		controls: false
	});

	// смена класса по id
	$('[data-toggle]').on('click', function(){
		$('#'+ $(this).attr('data-toggle') +'').toggleClass('active');
		$(this).toggleClass('active');
	});

	// // убираем меню по клику вне области
	// $(document).mouseup(function(e) {
	// 	console.log($(e.target).hasClass('active'));
	// 	if ($(e.target).hasClass('active')) {
	// 		$('#catalog-menu, #main-menu').removeClass('active');
	// 		$('.header [data-toggle]').removeClass('active');
	// 		return false;
	// 	}
	// 	if ($('#catalog-menu').has(e.target).length === 0 || $('#main-menu').has(e.target).length === 0) {
	// 		$('#catalog-menu, #main-menu').removeClass('active');
	// 		$('.header [data-toggle]').removeClass('active');
	// 	}

	// });


});