$(window).scroll(function() {
	var scaleBg = -$(window).scrollTop() / 4;
	if ($(window).scrollTop() > 1) {
		$('.main-header').addClass('show-main-header');
	} else {
		$('.main-header').removeClass('show-main-header');
	}
});
$('.nav').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 1250,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
});
$('.navbar h1 a, .jumbotron p a, #sobre a, #servicos a').smoothScroll({
	speed: 750,
});
$('.navbar h1 a, a.topp').smoothScroll({
	offset: -79,
	speed: 1250,
});
$(document).ready(function() {
	$(window).bind('load', function() {
		parallaxInit();
	});

	function parallaxInit() {
		testMobile = isMobile.any();
		if (testMobile == null) {
			$('#sobre .well').parallax("50%", 0.1);
			$('#servicos .well').parallax("50%", 0.1);
			$('#equipamentos .well').parallax("50%", 0.1);
		}
	}
	parallaxInit();
});
//Mobile Detect
var testMobile;
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};