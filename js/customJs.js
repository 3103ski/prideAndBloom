// changes background for nav when scrolled
$(window).scroll(function () {
	$('.fixed-res').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(function () {
	$('.see-appetizer').click(function () {
		$('.appetizer-menu').toggleClass('show-menu');
		$('.see-brunch').toggleClass('selector-hide-right');
		$('.see-dinner').toggleClass('selector-hide-right');
		$('.see-drinks').toggleClass('selector-hide-right');
		$('.app-back').toggleClass('show-back');
	});
});

$(function () {
	$('.see-brunch').click(function () {
		$('.brunch-menu').toggleClass('show-menu');
		$('.see-appetizer').toggleClass('selector-hide-left');
		$('.see-dinner').toggleClass('selector-hide-right');
		$('.see-drinks').toggleClass('selector-hide-right');
		$('.brunch-back').toggleClass('show-back');
	});
});

$(function () {
	$('.see-dinner').click(function () {
		$('.dinner-menu').toggleClass('show-menu');
		$('.see-appetizer').toggleClass('selector-hide-left');
		$('.see-brunch').toggleClass('selector-hide-left');
		$('.see-drinks').toggleClass('selector-hide-right');
		$('.dinner-back').toggleClass('show-back');
	});
});

$(function () {
	$('.see-drinks').click(function () {
		$('.drink-menu').toggleClass('show-menu');
		$('.see-appetizer').toggleClass('selector-hide-left');
		$('.see-brunch').toggleClass('selector-hide-left');
		$('.see-dinner').toggleClass('selector-hide-left');
		$('.drinks-back').toggleClass('show-back');
	});
});
