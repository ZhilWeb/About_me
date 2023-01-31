jQuery('document').ready(function () {

	var burger;
	burger = document.getElementsByClassName( "menu_icon" ); // подключаем полотно для отображения кода

	jQuery(burger).on("click", function() {
		jQuery(".sidebar").toggleClass( "active");
	});

});