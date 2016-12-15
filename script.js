$(function() {

	// slider
	var slides = $('.slideShow > li');
	var slideCount = 0;
	var totalSlides = slides.length;
	var slideCache = [];
	
	(function preloader() {
		if (slideCount < totalSlides) {
			slideCache[slideCount] = new Image();
			slideCache[slideCount].src = slides.eq(slideCount).find("img").attr('src');
			slideCache[slideCount].onload = function(){
				slideCount++;
				preloader();
			}
		} else {
				slideCount = 0;
				SlideShow();
		}
	}());

	function SlideShow(){
		slides.eq(slideCount).fadeIn(1000).delay(3000).fadeOut(1000, function(){
			slideCount < totalSlides-1 ? slideCount++ : slideCount = 0;
			SlideShow();
		})
	}

	// welcome effect
	
	setTimeout(function() {
		$('.fly-in-text').removeClass('hidden'); 
	}, 1000);

	$(".project p").click(function() {
		alert("No content, sorry!");	
	}); 


});
