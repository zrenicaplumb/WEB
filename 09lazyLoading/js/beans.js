
$(document).ready(function () {
	
	var stickyNavTop = $('nav').offset().top;
	 
	var stickyNav = function(){
	var scrollTop = $(window).scrollTop();
	      
	if (scrollTop > stickyNavTop) { 
	    $('nav').addClass('sticky');
	} else {
	    $('nav').removeClass('sticky'); 
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
	    stickyNav();
	});


    $('#hamburger-menu').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
    	var slideoutMenu = $('.slide-out-menu');
    	var slideoutMenuWidth = $('.slide-out-menu').width();
    	
    	// toggle open class
    	slideoutMenu.toggleClass("slide-out-menu-show");
    	
    	// slide menu
    	if (slideoutMenu.hasClass("slide-out-menu-show")) {
	    	slideoutMenu.animate({
		    	left: "0px"
	    	});	
    	} else {
	    	slideoutMenu.animate({
		    	left: -slideoutMenuWidth
	    	}, 250);	
    	}
    });
});