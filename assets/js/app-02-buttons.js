var Buttons = {

	init: function(){
		this.effect();
	},

	effect: function(){

		$('.button-effect').on('click', function(e) {
		  e.preventDefault();
		  	var self = $(this),
		      wave = '.effect-wave',
		      btnWidth = self.outerWidth(),
		      x = e.offsetX,
		      y = e.offsetY;

		  self.prepend('<span class="effect-wave"></span>')

		  	$(wave).css({
		      'top': y,
		      'left': x
		    }).animate({
		      opacity: '0',
		      width: btnWidth * 2,
		      height: btnWidth * 2
		    }, 500, function() {
		    	self.find(wave).remove()
		    });

		});

	}

};

Buttons.init();


