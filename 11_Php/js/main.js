$(document).ready(function(){
	 
    $("nav ul li a").each(function(){
        if($(this).attr("href")==window.location.pathname)
            $(this).addClass("active");
    })

})
	