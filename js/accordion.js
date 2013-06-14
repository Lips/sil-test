$(document).ready(function() {
    $("#accordion").accordion({
		header: 'h5',
		icons: { 'header': 'ui-icon-plus', 'headerSelected': 'ui-icon-minus' },
		autoHeight: true,
		collapsible: true,
		active: false //no open panel on start up
	});
  });