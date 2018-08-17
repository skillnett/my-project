// // animate background
$(document).ready(function(){

	particlesJS.load('particles-js', '/my-project/js/vendor/particles/particles.json', function() {
  		console.log('callback - particles.js config loaded');
	});

});

// preloader
$(document).ready(function() {
	$('.progress-bar').circularProgress({
		line_width: 5,
		percent: 25,
	}).circularProgress('animate', 100, 1000);
});

$(window).on('load', function () {
   var $preloader = $('#preloader');
   $preloader.delay(2000).fadeOut('slow');
});

// pop-up form
$(".userInput").focus(function () {
        $(this).parent().addClass("focus");
    }).blur(function () {
        if ($(this).val() === '') {
            $(this).parent().removeClass("focus");
        }
    })


