$(document).ready(function(){
	$('#myAffix').affix({
  offset: {
    top: 100,
    bottom: function () {
      return (this.bottom = $('.navbar').outerHeight(true))
    }
  }
})
})

