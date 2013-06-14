// fancybox.min.jquery.js
// Examples and documentation at: http://fancybox.net

$(document).ready(function() {

	/* Basic single image setting */
	
	$("a#single_image").fancybox({
		'padding' : 5,
		'centerOnScroll' : true,
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	true,
		'overlayColor'		: '#000',
		'overlayOpacity'	: 0.8
		//'titlePosition' :   'over',
		//'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					//return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				//}
	});

	/* Multiple images setting */
	
	$("a.gallery").fancybox({
		'padding' : 5,
		'centerOnScroll' : true,
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	true,
		'overlayColor'		: '#000',
		'overlayOpacity'	: 0.8
		//'titlePosition' :   'over',
		//'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					//return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				//}
	});
	
});