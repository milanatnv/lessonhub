$(document).ready(function(){
	$('.nav-tabs li a').click(function(){
		var width = $(this).width(),
			pos = $(this).position();
		
		$('.nav-line').css({
			width: width,
			left: pos.left
		});
	});
  
  $('.scrollbar-inner').perfectScrollbar();
  
  $(".landing-page #skills-list").height($(".landing-page #content-left").height() - $(".landing-page #content-right").height());
  $( window ).resize(function() {
    $(".landing-page #skills-list").height($(".landing-page #content-left").height() - $(".landing-page #content-right").height());
  });
});