$(document).ready(function(){

	particlesJS.load('particles-js', '/my-project/js/vendor/particles/particles.json', function() {
  		console.log('callback - particles.js config loaded');
	});

});


$(document).ready(function() {
	$('.progress-bar').circularProgress({
		line_width: 5,
		percent: 25,
	}).circularProgress('animate', 100, 2000);
});

$(window).on('load', function () {
   var $preloader = $('#preloader');
   $preloader.delay(1800).fadeOut('slow');
});