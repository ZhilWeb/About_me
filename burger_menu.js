jQuery('document').ready(function () {

	var cvs, left_css;
	cvs = document.getElementsByClassName( "burger_menu" ); // подключаем полотно для отображения кода

	jQuery(cvs).on("click", function() {
		jQuery(".sidebar").toggleClass( "active");
		console.log("click!");
	});

});