
$(document).ready(function(){
  $('.carou').slick({	
	 slidesToScroll: 1,
	fade: true,
	asNavFor: '.product-small-images'
	});
	$('.product-small-images').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.product-big-image',
	centerMode: true,
	focusOnSelect: true
	});    
	
	$('.center').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});
  });
});