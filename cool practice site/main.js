document.addEventListener("DOMContentLoaded", function(){
	document.addEventListener("scroll", function(){
		
		if (window.scrollY > 250) {
			var dropdown = document.getElementsByClassName("dropdown-nav")[0];
			dropdown.style.top = "107px";
			dropdown.style.position = "fixed";
		 	dropdown.style.transition = "top, 0.5s";
		}
		if (window.scrollY < 250) {
			var dropdown = document.getElementsByClassName("dropdown-nav")[0];
			dropdown.style.top = "-120px";
			dropdown.style.position = "";
		 	dropdown.style.transition = "top, 0.7s";
		}
	});
	
	
		
		
	
	
	
	
});