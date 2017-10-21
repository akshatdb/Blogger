$(document).ready(rating);
$(document).on('turbolinks:load', rating);
$(document).ready(navBar);
$(document).on('turbolinks:load', navBar);
$(document).ready(screenLoader);
$(document).on('turbolinks:load', screenLoader);

function rating(){
	var f = 1;
	$('.rating-star').mouseenter(function(){
		$(this).prevUntil('div').andSelf().addClass("glyphicon-star").removeClass("glyphicon-star-empty");
		$(this).nextUntil('div').addClass("glyphicon-star-empty").removeClass("glyphicon-star");
		var $radios = $('input[type=radio]');
		$radios.filter('[value='+$('.rating-bar .glyphicon-star').length+']').prop('checked', true);
	});
	$('.rating-star').click(function(){
		$(this).prevUntil('div').andSelf().addClass("glyphicon-star").removeClass("glyphicon-star-empty");
		$(this).nextUntil('div').addClass("glyphicon-star-empty").removeClass("glyphicon-star");
		var $radios = $('input[type=radio]');
		$radios.filter('[value='+$('.rating-bar .glyphicon-star').length+']').prop('checked', true);
	});
	$('.b1').mouseleave(function(){
		if(f==1){
		$(this).addClass("glyphicon-star-empty").removeClass("glyphicon-star");
		$('input[type=radio]').filter('[value=1]').prop('checked', false);}
	});
	$('.b1').click(function(){
		if (f == 1)
			f = 0;
		else 
			f = 1;
	});
}

function navBar(){
	$('.navbar-header').on('click touch',function(){
    	$('.navbar-collapse').slideToggle();
	});
}

function screenLoader(){
	$(window).load(function(){
		$('.loader').fadeOut();
		$(document).on('turbolinks:load',function(){
			$('.loader').fadeOut();
	});
	})
	$(document).on('turbolinks:click turbolinks:touch', function(){
		$('.loader').fadeIn();
	});
	$(document).on('click','input[type=submit]', function(){
		$('.loader').fadeIn();
	});
}