// jquery.isotope.min.js

$(window).load(function() { //window onload function to load media first
  $('.filterContainer').isotope({
    // options
    itemSelector : '.image, .text',
    layoutMode : 'fitRows'
  });
	// cache container
	var $container = $('.filterContainer');
	$container.isotope({
	  filter: ''
	});
	// filter items when filter link is clicked
	$('#filters a').click(function(){
	  var selector = $(this).attr('data-filter');
	  $container.isotope({ filter: selector });
	  return false;
	});

	// set selected menu items
	var $optionSets = $('.option-set'),
		$optionLinks = $optionSets.find('a');
	
	$optionLinks.click(function(){
		var $this = $(this);
		// don't proceed if already selected
		if ( $this.hasClass('selected') ) {
			return false;
		}
	var $optionSet = $this.parents('.option-set');
	$optionSet.find('.selected').removeClass('selected');
	$this.addClass('selected'); 
	});

});