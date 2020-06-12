jQuery(document).ready(function() {
  jQuery('#filterOptions span a').click(function() {
    // fetch the class of the clicked item
    var ourClass = jQuery(this).attr('class');
	console.log(ourClass);
	    // reset the active class on all the buttons
    jQuery('#filterOptions span').removeClass('active');
    // update the active state on our clicked button
    jQuery(this).parent().addClass('active');
    if(ourClass == 'all') {
      // show all our items
      jQuery('#timetable').children().show();
    }
    else {
      // hide all elements that don't share ourClass
	  jQuery('#timetable').children().show();
      jQuery('#timetable').children(':not(.' + ourClass + ')').hide();
      // show all elements that do share ourClass
      jQuery('#timetable').children(ourClass).show();
    }
    return false;
  });
});