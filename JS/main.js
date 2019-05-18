$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});





/*
     FILE ARCHIVED ON 13:39:09 Apr 28, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:51:26 May 10, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 47.76 (3)
  esindex: 0.011
  captures_list: 63.664
  CDXLines.iter: 11.089 (3)
  PetaboxLoader3.datanode: 26.876 (4)
  exclusion.robots: 0.37
  exclusion.robots.policy: 0.359
  RedisCDXSource: 1.641
  PetaboxLoader3.resolve: 40.601 (2)
  load_resource: 56.417
*/