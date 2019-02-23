$(document).ready(function(){
	$('a.click-sub-menu-left').click(function(){
		$(this).next('ul.sub-menu-left').slideToggle();
	});

	$('.dropdown_mobile').click(function(){
		$(this).children('.dropdown-menu_dray').slideToggle();
	});

	$('.click-menu-dropdown_h').click(function(){
		$(this).children('.click-menu-dropdown_h i').toggleClass("toggle-down");
			
		$(this).next('.menu-dropdown_h').slideToggle();
	});
});
