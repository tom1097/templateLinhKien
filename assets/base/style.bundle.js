$(document).ready(function(){
	$('a.click-sub-menu-left').click(function(){
		$(this).next('ul.sub-menu-left').slideToggle();
	});

	$('.dropdown_mobile').click(function(){
		$(this).children('.dropdown-menu_dray').slideToggle();
	});

	$('.click-menu-dropdown_h').click(function(){
		$(this).next('.menu-dropdown_h').slideToggle();
	});
});
