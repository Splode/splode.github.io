// Primary jQuery Functions
$(document).ready(function() {

	//smooth scroll
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 750);
		return false;
	});
  
});
