// animate background
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
   let $preloader = $('#preloader');
   $preloader.delay(2000).fadeOut('slow');
});

// display article's button
let articles = document.getElementsByTagName('article');
for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener('click', disp);

    function disp() {
        let articleBtn = articles[i].querySelector('.article-btn');
        if (articleBtn.style.display === '') {
            articleBtn.style.display = 'inline-block';
        } else {
        	articleBtn.style.display = '';
        }
    }
}

