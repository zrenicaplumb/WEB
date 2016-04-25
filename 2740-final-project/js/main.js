$(document).ready(function(){
	function initialize() {
		  var mapProp = {
		    center:new google.maps.LatLng(38.572363,-109.540917),
		    zoom:18,
		    mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
		  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
		}
		google.maps.event.addDomListener(window, 'load', initialize);



			$(".hamburger-menu-wrap").click(function(){
		$('.slide-out-menu').css({
			"left":"0"
		})
	})

			$(window).load(function() {
		  $('.flexslider').flexslider({
		    animation: "slide",
		    controlNav: "thumbnails"
		  });
		});

			$(".gallery-div img").click(function(){
				$(this).css({

				})
			})

			$('.menu-exit').click(function(){
				$(".slide-out-menu").css({
					"left":"-400px"
				})
			})

			
			

			 




});
