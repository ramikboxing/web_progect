jQuery ('document').ready(function(){

	$('.menu-btn').on('click', function(e) {
		e.preventDefault; // отменяет стандартное событие
		$(this).toggleClass('menu-btn_active'); // и присваеваем новый клас для нашего гамбургера
		$('.menu-nav').toggleClass ('menu-nav_active');
	});
/*#FORTAN*/
	$('.fortan66').on('click', function(e) {
		e.preventDefault;
		// $('.f66').toggleClass ('f66_active');
		$(".f66").css({'transform':'rotateX(0deg)','opacity':'1'});
		$('.f77').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f90').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f95').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f2003').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f2008').css({'transform':'rotateX(90deg)','opacity':'0'});
	});
	$('.fortan77').on('click', function(e) {
		e.preventDefault;
		$(".f66").css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f77').css({'transform':'rotateX(0deg)','opacity':'1'});
		$('.f90').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f95').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f2003').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f2008').css({'transform':'rotateX(90deg)','opacity':'0'});
	});
	$('.fortan90').on('click', function(e) {
		e.preventDefault;
		$(".f66").css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f77').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f90').css({'transform':'rotateX(0deg)','opacity':'1'});
		$('.f95').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f2003').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f2008').css({'transform':'rotateX(90deg)','opacity':'0'});
	});
	$('.fortan95').on('click', function(e) {
		e.preventDefault;
		$(".f66").css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f77').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f90').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f95').css({'transform':'rotateX(0deg)','opacity':'1'});
		$('.f2003').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f2008').css({'transform':'rotateX(90deg)','opacity':'0'});
	});
	$('.fortan2003').on('click', function(e) {
		e.preventDefault;
		$(".f66").css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f77').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f90').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f95').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f2003').css({'transform':'rotateX(0deg)','opacity':'1'});
		$('.f2008').css({'transform':'rotateX(90deg)','opacity':'0'});
	});
	$('.fortan2008').on('click', function(e) {
		e.preventDefault;
		$(".f66").css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f77').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f90').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f95').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f2003').css({'transform':'rotateX(90deg)','opacity':'0'});
		$('.f2008').css({'transform':'rotateX(0deg)','opacity':'1'});
	});
/*PASCAL*/

});


