$(document).ready(function(){
	function scrollToAnchor(aid){
	    var aTag = $("a[name='"+ aid +"']");
	    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	$("#work-link").click(function() {
	   scrollToAnchor('work');
	});
	$("#about-link").click(function() {
	   scrollToAnchor('about');
	});
	$("#contact-link").click(function() {
	   scrollToAnchor('contact');
	});


})
	