$(document).ready(rating);
$(document).on('turbolinks:load', rating);

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
	})
}