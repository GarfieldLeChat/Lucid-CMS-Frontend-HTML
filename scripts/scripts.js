$(document).ready(function() {
	// Start of jQuery Commands
	
	/* ################################################################################################################# */
	/* ################################################ - IMPORTANT - ################################################## */
	/* ################################################################################################################# */
	
	/* Not For Production */
	/* jQuery include */
	/* NB this shouldn't be used for Live sites only for template development due to SEO issues */
	
	$(".js-include").each(function(){
    var inc=$(this);
    $.get(inc.attr("title"), function(data){
        inc.replaceWith(data);
    });
}); 

/* Load Nav */
	$('#nav').load('../../nav.html');
	
	/* End of Not for production */
	/* ################################################################################################################# */
	/* ################################################################################################################# */
	/* ################################################################################################################# */
	
	/* ################################################################################################################# */
	/* ############################################## - FORM ELEMENTS - ################################################ */
	/* ################################################################################################################# */
	
	/* Chosen  for Select Boxes */
	
	 var config = {
      '.chosen-select'           : {},
      '.chosen-select-deselect'  : {allow_single_deselect:true},
      '.chosen-select-no-single' : {disable_search_threshold:10},
      '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
      '.chosen-select-width'     : {width:'95%'}
    };
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }
	
	$('.chosen').chosen();
	
	/* Select box errors */
	
	if($('.chosen-container-single .chosen-single').parents('.formElement').hasClass('error')) {
		$('.chosen-container-single .chosen-single').click(function() {
			$('.chosen-container-single .chosen-single').parents('.formElement').removeClass('error');
			$('.chosen-container-single .chosen-single').parents('.formElement').addClass('errorHide');
		});
	}
	
	/* Range Slider Config */
	$('[type=range]').change(function(){
   		var newv=$(this).val();
    	$(this).next().text(newv);
  	});
	
	/* File Upload */
	$('.upload').change(function(){
		 var value = $(this).val().replace(/C:\\fakepath\\/i, '');
    	$('.uploadFile').val(value);
	});
	
	/* Image Upload */
	$('.photoUpload').change(function(){
		 var value = $(this).val().replace(/C:\\fakepath\\/i, '');
    	$('.uploadImage').val(value);
	});
	
	/* Video Upload */
	$('.uploadVideo').change(function(){
		 var value = $(this).val().replace(/C:\\fakepath\\/i, '');
    	$('.videoUpload').val(value);
	});
	
		
	/* Required Indicator */
    $('[required]').each(function () {  
            var self = $(this);
            self.parent().addClass('required');
    });
	
	/* Toggle Show hide Password */
	$('.showPassword').change(function() {
	  if(this.checked) {
		  $('.password').attr('type','text');
	  } else {
		  $('.password').attr('type','password');
	  }
	});
	
	/* Check box */ 
	var $check = $("input[type=checkbox]"), el;
	$check
	   .data('checked',0)
	   .click(function() {
		   
			el = $(this);
					
			switch(el.data('checked')) {
				
				// unchecked, going checked
				case 0:
					el.data('checked',1);
					el.prop('indeterminate',false);
					el.prop('checked',true);
					el.attr('checked','checked');                    
					break;
				// checked, going indeterminate
				/*case 1:
					el.data('checked',2);
					el.prop('indeterminate',true);
					break;*/
				
				// checked, going unchecked
				default:  
					el.data('checked',0);
					el.prop('indeterminate',false);
					el.prop('checked',false);
					el.removeAttr('checked','');  
					
			}
        
    });
	
	
	/* Radio buttons Memory */
	  $("input[type='radio']").click(function()
	  {
		var previousValue = $(this).attr('previousValue');
		var name = $(this).attr('name');
	  
		if (previousValue === 'checked')
		{
		  $(this).removeAttr('checked');
		  $(this).attr('previousValue', false);
		}
		else
		{
		  $("input[name="+name+"]:radio").attr('previousValue', false);
		  $(this).attr('previousValue', 'checked');
		}
	  });
	
	/* ################################################################################################################# */
	/* ################################################################################################################# */
	/* ################################################################################################################# */
	
	/* ################################################################################################################# */
	/* ############################################## - CONTENT ITEMS - ################################################ */
	/* ################################################################################################################# */
	
	/* Tabs */
	
	$('.tabs.default .tab-links a').on('click',function(e){
	  var currentAttrValue=$(this).attr('href');
	  $('.tabs '+ currentAttrValue).show().siblings().hide();
	  $(this).parent('li').addClass('active').siblings().removeClass('active');
	  e.preventDefault();
	});
	// Fade Transition
	$('.tabs.fade .tab-links a').on('click',function(e){
	  var currentAttrValue=$(this).attr('href');
	  $('.tabs '+ currentAttrValue).fadeIn(400).siblings().hide();
	  $(this).parent('li').addClass('active').siblings().removeClass('active');
	  e.preventDefault();
	});
	// Slide Content Tab Transition
	$('.tabs.tabSlide .tab-links a').on('click',function(e){
	  var currentAttrValue=$(this).attr('href');
	  $('.tabs '+ currentAttrValue).siblings().slideUp(400);
	  $('.tabs '+ currentAttrValue).delay(400).slideDown(400);
	  $(this).parent('li').addClass('active').siblings().removeClass('active');
	  e.preventDefault();
	});
	// Slide Content - Static Tab Transition
	$('.tabs.contentSlide .tab-links a').on('click',function(e){
	  var currentAttrValue=$(this).attr('href');
	  $('.tabs '+ currentAttrValue).slideDown(400).siblings().slideUp(400);
	  $(this).parent('li').addClass('active').siblings().removeClass('active');
	  e.preventDefault();
	});
	
	
	/* Accordion */
	
	function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title.default').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
	
	 $('.accordion-section-title.over').mouseenter(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
	
	/* ################################################################################################################# */
	/* ################################################################################################################# */
	/* ################################################################################################################# */
	
	/* ################################################################################################################# */
	/* ################################################# - NAVIGATION - ################################################ */
	/* ################################################################################################################# */
	
	/* Responsive Navigation */
	   $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('.menu ul').toggleClass('active');
 
        e.preventDefault();
    });
	
	  $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('.menu ul.sub-menu').toggleClass('active');
 
        e.preventDefault();
    });
	
	/* ################################################################################################################# */
	/* ################################################################################################################# */
	/* ################################################################################################################# */
	
	/* ################################################################################################################# */
	/* ################################################## - CAROUSEL - ################################################# */
	/* ################################################################################################################# */
	
	/* Carousel */
	
	// Using custom configuration
	
	/*	CarouFredSel: a circular, responsive jQuery carousel.
	Configuration created by the "Configuration Robot"
	at caroufredsel.dev7studios.com
*/
/* Default $("#carousel").carouFredSel({
	width: "100%",
	height: 350,
	items: {
		visible: 3,
		minimum: 3
	},
	scroll: {
		easing: "linear",
		duration: 500,
		pauseOnHover: true
	},
	auto: {
		timeoutDuration: 1500,
		delay: 500,
		progress: "#bar",
		fx: "fade",
		duration: 550
	},
	prev: {
		button: "#prev",
		key: "left",
		fx: "fade"
	},
	next: {
		button: "#next",
		key: "right",
		fx: "fade"
	},
	pagination: {
		container: "#pager",
		keys: true,
		fx: "fade"
	},
	swipe: true,
	mousewheel: true
});*/
/* Highlight active slide */
  var $highlight = function() { 
    var $this = $("#carousel");
  
    //get all visible items (in this case 3 slides)
    var items = $this.triggerHandler("currentVisible");
    
    // remove all .active classes
    $this.children().removeClass("active");
    $this.children().addClass("inactive");
    
    //add .active class to 2nd / centered item
    items.filter(":eq(1)").addClass("active").removeClass("inactive");
};
  
    if($('#carousel').length) {
							  $('#carousel').carouFredSel({
								  direction            : "left",
								  circular: true,            // Determines whether the carousel should be circular
								  infinite: true,            // Determines whether the carousel should be infinite. Note: It is possible to create a non-circular, infinite carousel, but it is not possible to create a circular, non-infinite carousel..
								  responsive: true,        // Determines whether the carousel should be responsive. If true, the items will be resized to fill the carousel.
								  width:980,
								  padding: 20,
								  height: 350,
								  
								  
								  items: {
									  visible: 3,
									  minimum: 3,
									  start: -1,
									  width: 326
								  },		
								  scroll: {
									  items: 1,
									  duration: 1000,
									  timeoutDuration: 3000,
									  delay: 500,
									  progress: "#bar",
									  //fx: "scroll",
									  
									  // set active slide on scroll
									  onAfter : $highlight,
								  },
								  auto: {
									  play: true,
									  pauseOnHover: true
								  },
								  prev: {
									  button: '#prev',
									  key : "left"
								  },
								  next: {
									  button : '#next',
									  key : "right" 
								  },
								  pagination: {
									  container: '#pager',
									  deviation: 1
								  },
								  mousewheel: true,
								  swipe: {
									  onMouse: false,
									  onTouch: true
								  }
							  });
	}
	
	/* Add selected to Carousel Slide */
	
	
	/* Fade the active slide */
	if($('.carousel-slide').hasClass('active')) {
	$('.carousel-slide.active').mouseenter(function() {
		$('.carousel-slide.active h3.carousel-slide-title, .carousel-slide.active p.carousel-slide-text').css('opacity','0.9');
	});
	$('.carousel-slide.active').mouseleave(function() {
		$('.carousel-slide.active h3.carousel-slide-title, .carousel-slide.active p.carousel-slide-text').css('opacity','0.6');
	});
	}
	
	/* ################################################################################################################# */
	/* ################################################################################################################# */
	/* ################################################################################################################# */
	
	/* ################################################################################################################# */
	/* ################################################## - ******** - ################################################# */
	/* ################################################################################################################# */
	
	//End of jQuery Commands
});