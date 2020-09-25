// changes background for nav when scrolled
$(window).scroll(function () {
	$('.fixed-res').toggleClass('scrolled', $(this).scrollTop() > 50);
	$('.navbar-toggler').toggleClass('scrolled', $(this).scrollTop() > 50);
});

// menu page
$(function () {
	$('.see-appetizer').click(function () {
		$('.appetizer-menu').toggleClass('show-menu');
		$('.see-brunch').toggleClass('selector-hide-right');
		$('.see-dinner').toggleClass('selector-hide-right');
		$('.see-drinks').toggleClass('selector-hide-right');
		$('.see-appetizer').toggleClass('active-pic');
		$('.app-back').toggleClass('show-back');
	});
});

$(function () {
	$('.see-brunch').click(function () {
		$('.brunch-menu').toggleClass('show-menu');
		$('.see-appetizer').toggleClass('selector-hide-left');
		$('.see-dinner').toggleClass('selector-hide-right');
		$('.see-drinks').toggleClass('selector-hide-right');
		$('.see-brunch').toggleClass('active-pic');
		$('.brunch-back').toggleClass('show-back');
	});
});

$(function () {
	$('.see-dinner').click(function () {
		$('.dinner-menu').toggleClass('show-menu');
		$('.see-appetizer').toggleClass('selector-hide-left');
		$('.see-brunch').toggleClass('selector-hide-left');
		$('.see-drinks').toggleClass('selector-hide-right');
		$('.see-dinner').toggleClass('active-pic');
		$('.dinner-back').toggleClass('show-back');
	});
});

$(function () {
	$('.see-drinks').click(function () {
		$('.drink-menu').toggleClass('show-menu');
		$('.see-appetizer').toggleClass('selector-hide-left');
		$('.see-brunch').toggleClass('selector-hide-left');
		$('.see-dinner').toggleClass('selector-hide-left');
		$('.see-drinks').toggleClass('active-pic');
		$('.drinks-back').toggleClass('show-back');
	});
});

// about page
$(function () {
	$('.swap-about').click(function () {
		$('.about-content').toggleClass('move-card');
		$('.about-pic').toggleClass('move-pic');
	});
});
