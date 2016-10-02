$(document).ready(function() {
	
	// ################################## 
	// ################################## Start of Doc ready
	// ################################## 
	
	// ################################## Select File upload type action
	$("#file-type-select-box").chosen().change(function() {
		if($('#file-type-select-box option:selected').val() === 'carousel') {
		} else if($('#file-type-select-box option:selected').val() === 'banner') {
		} else if($('#file-type-select-box option:selected').val() === 'content-spot') {
		}
	});
	
	// ################################## Select File upload type action
	$("#file-type-select-box").chosen().change(function() {
		if($('#file-type-select-box option:selected').val() === 'image') {
			$('.imageFile').show();
			$('.videoFile').hide();
		} else if($('#file-type-select-box option:selected').val() === 'video') {
			$('.imageFile').hide();
			$('.videoFile').show();
		}
	});
	
	// ################################## Build Text and links for page
	
	  // Add Title Text 
	  $('#title').change(function(){
		  var title = $('#title').val();
			$('.heading1').remove();
			$('.heading2').remove();
			$('.heading3').remove();
			$('.heading4').remove();
			$('.heading5').remove();
			$('.heading6').remove();
			$('.paragraph').remove();
			$('#slideTitleText').append('<p class="paragraph slideTitleText">' + title + '</p>');
	  });
	  // Add Sub Title Text 
	  $('#subText').change(function(){
		  var subText = $('#subText').val();
			$('.subheading1').remove();
			$('.subheading2').remove();
			$('.subheading3').remove();
			$('.subheading4').remove();
			$('.subheading5').remove();
			$('.subheading6').remove();
			$('.subparagraph').remove();
			$('#slideSubTitleText').append('<p class="subparagraph slideSubTitleText">' + subText + '</p>');
	  });
	  // Add Link Text 
	  $('#linkText').change(function(){
		var linkText = $('#linkText').val();
		  $('.linkheading1').remove();
		  $('.linkheading2').remove();
		  $('.linkheading3').remove();
		  $('.linkheading4').remove();
		  $('.linkheading5').remove();
		  $('.linkheading6').remove();
		  $('.linkparagraph').remove();
		  $('#slideLinkText').append('<p class="linkparagraph slideLinkText">' + linkText + '</p>');
		  
	  });
	  
	  // Add Link 
	  $('#url').change(function(){
		  var url = $('#url').val();
		  $('#slideLinkUrl').attr('href' , url);
	  });
	
	
	// ################################## Set Font's 
	
	// Select Title Font 
	$("#title-font-select-box").chosen().change(function() {
		if($('#title-font-select-box option:selected').val() === 'baskervilleItalic') {
			$('.slideTitleText').css('font-family' , 'Baskerville Italic');
		} else if($('#title-font-select-box option:selected').val() === 'baskervilleMedium') {
			$('.slideTitleText').css('font-family' , 'Baskerville Medium');
		} else if($('#title-font-select-box option:selected').val() === 'baskervilleMediumItalic') {
			$('.slideTitleText').css('font-family' , 'Baskerville Medium Italic');
		} else if($('#title-font-select-box option:selected').val() === 'itcAvantGardeGothicBold') {
			$('.slideTitleText').css('font-family' , 'ITC AvantGardeGothic Bold');
		} else if($('#title-font-select-box option:selected').val() === 'itcAvantGardeGothicBook') {
			$('.slideTitleText').css('font-family' , 'ITC AvantGardeGothic Book');
		} else if($('#title-font-select-box option:selected').val() === 'itcAvantGardeGothicDemi') {
			$('.slideTitleText').css('font-family' , 'ITC AvantGardeGothic Demi');
		} else if($('#title-font-select-box option:selected').val() === 'itcAvantGardeGothicMedium') {
			$('.slideTitleText').css('font-family' , 'ITC AvantGardeGothic Medium');
		}
	});
	
	// Select Sub Title Font 
	$("#subtitle-font-select-box").chosen().change(function() {
		if($('#subtitle-font-select-box option:selected').val() === 'baskervilleItalic') {
			$('.slideSubTitleText').css('font-family' , 'Baskerville Italic');
		} else if($('#subtitle-font-select-box option:selected').val() === 'baskervilleMedium') {
			$('.slideSubTitleText').css('font-family' , 'Baskerville Medium');
		} else if($('#subtitle-font-select-box option:selected').val() === 'baskervilleMediumItalic') {
			$('.slideSubTitleText').css('font-family' , 'Baskerville Medium Italic');
		} else if($('#subtitle-font-select-box option:selected').val() === 'itcAvantGardeGothicBold') {
			$('.slideSubTitleText').css('font-family' , 'ITC AvantGardeGothic Bold');
		} else if($('#subtitle-font-select-box option:selected').val() === 'itcAvantGardeGothicBook') {
			$('.slideSubTitleText').css('font-family' , 'ITC AvantGardeGothic Book');
		} else if($('#subtitle-font-select-box option:selected').val() === 'itcAvantGardeGothicDemi') {
			$('.slideSubTitleText').css('font-family' , 'ITC AvantGardeGothic Demi');
		} else if($('#subtitle-font-select-box option:selected').val() === 'itcAvantGardeGothicMedium') {
			$('.slideSubTitleText').css('font-family' , 'ITC AvantGardeGothic Medium');
		}
	});
	
	// Select Link Font 
	$("#link-font-select-box").chosen().change(function() {
		if($('#link-font-select-box option:selected').val() === 'baskervilleItalic') {
			$('.slideLinkText').css('font-family' , 'Baskerville Italic');
		} else if($('#link-font-select-box option:selected').val() === 'baskervilleMedium') {
			$('.slideLinkText').css('font-family' , 'Baskerville Medium');
		} else if($('#link-font-select-box option:selected').val() === 'baskervilleMediumItalic') {
			$('.slideLinkText').css('font-family' , 'Baskerville Medium Italic');
		} else if($('#link-font-select-box option:selected').val() === 'itcAvantGardeGothicBold') {
			$('.slideLinkText').css('font-family' , 'ITC AvantGardeGothic Bold');
		} else if($('#link-font-select-box option:selected').val() === 'itcAvantGardeGothicBook') {
			$('.slideLinkText').css('font-family' , 'ITC AvantGardeGothic Book');
		} else if($('#link-font-select-box option:selected').val() === 'itcAvantGardeGothicDemi') {
			$('.slideLinkText').css('font-family' , 'ITC AvantGardeGothic Demi');
		} else if($('#link-font-select-box option:selected').val() === 'itcAvantGardeGothicMedium') {
			$('.slideLinkText').css('font-family' , 'ITC AvantGardeGothic Medium');
		}
	});
	
	// ################################## Set Font Sizes
	// Select Title Font Size 
	$("#title-font-size-select-box").chosen().change(function() {
		var title = $('#title').val();
		if($('#title-font-size-select-box option:selected').val() === 'heading1') {
			$('.heading1').remove();
			$('#slideTitleText').append('<h1 class="heading1 slideTitleText">' + title + '</h1>');
			$('.heading2').remove();
			$('.heading3').remove();
			$('.heading4').remove();
			$('.heading5').remove();
			$('.heading6').remove();
			$('.paragraph').remove();
		} else if($('#title-font-size-select-box option:selected').val() === 'heading2') {
			$('.heading1').remove();
			$('.heading2').remove();
			$('#slideTitleText').append('<h2 class="heading2 slideTitleText">' + title + '</h2>');
			$('.heading3').remove();
			$('.heading4').remove();
			$('.heading5').remove();
			$('.heading6').remove();
			$('.paragraph').remove();
		} else if($('#title-font-size-select-box option:selected').val() === 'heading3') {
			$('.heading1').remove();
			$('.heading2').remove();
			$('.heading3').remove();
			$('#slideTitleText').append('<h3 class="heading3 slideTitleText">' + title + '</h3>');
			$('.heading4').remove();
			$('.heading5').remove();
			$('.heading6').remove();
			$('.paragraph').remove();
		} else if($('#title-font-size-select-box option:selected').val() === 'heading4') {
			$('.heading1').remove();
			$('.heading2').remove();
			$('.heading3').remove();
			$('.heading4').remove();
			$('#slideTitleText').append('<h4 class="heading4 slideTitleText">' + title + '</h4>');
			$('.heading5').remove();
			$('.heading6').remove();
			$('.paragraph').remove();
		} else if($('#title-font-size-select-box option:selected').val() === 'heading5') {
			$('.heading1').remove();
			$('.heading2').remove();
			$('.heading3').remove();
			$('.heading4').remove();
			$('.heading5').remove();
			$('#slideTitleText').append('<h5 class="heading5 slideTitleText">' + title + '</h5>');
			$('.heading6').remove();
			$('.paragraph').remove();
		} else if($('#title-font-size-select-box option:selected').val() === 'heading6') {
			$('.heading1').remove();
			$('.heading2').remove();
			$('.heading3').remove();
			$('.heading4').remove();
			$('.heading5').remove();
			$('.heading6').remove();
			$('#slideTitleText').append('<h6 class="heading6 slideTitleText">' + title + '</h6>');
			$('.paragraph').remove();
		} else if($('#title-font-size-select-box option:selected').val() === 'paragraph') {
			$('.heading1').remove();
			$('.heading2').remove();
			$('.heading3').remove();
			$('.heading4').remove();
			$('.heading5').remove();
			$('.heading6').remove();
			$('.paragraph').remove();
			$('#slideTitleText').append('<p class="paragraph slideTitleText">' + title + '</p>');
		} else {
			$('#slideTitleText').html(title);
		}
	});
	
	// Select Sub Title Font Size 
	$("#subtitle-font-size-select-box").chosen().change(function() {
		var title = $('#subText').val();
		if($('#subtitle-font-size-select-box option:selected').val() === 'heading1') {
			$('.subheading1').remove();
			$('#slideSubTitleText').append('<h1 class="subheading1 slideSubTitleText">' + title + '</h1>');
			$('.subheading2').remove();
			$('.subheading3').remove();
			$('.subheading4').remove();
			$('.subheading5').remove();
			$('.subheading6').remove();
			$('.subparagraph').remove();
		} else if($('#subtitle-font-size-select-box option:selected').val() === 'heading2') {
			$('.subheading1').remove();
			$('.subheading2').remove();
			$('#slideSubTitleText').append('<h2 class="subheading2 slideSubTitleText">' + title + '</h2>');
			$('.subheading3').remove();
			$('.subheading4').remove();
			$('.subheading5').remove();
			$('.subheading6').remove();
			$('.subparagraph').remove();
		} else if($('#subtitle-font-size-select-box option:selected').val() === 'heading3') {
			$('.subheading1').remove();
			$('.subheading2').remove();
			$('.subheading3').remove();
			$('#slideSubTitleText').append('<h3 class="subheading3 slideSubTitleText">' + title + '</h3>');
			$('.subheading4').remove();
			$('.subheading5').remove();
			$('.subheading6').remove();
			$('.subparagraph').remove();
		} else if($('#subtitle-font-size-select-box option:selected').val() === 'heading4') {
			$('.subheading1').remove();
			$('.subheading2').remove();
			$('.subheading3').remove();
			$('.subheading4').remove();
			$('#slideSubTitleText').append('<h4 class="subheading4 slideSubTitleText">' + title + '</h4>');
			$('.subheading5').remove();
			$('.subheading6').remove();
			$('.subparagraph').remove();
		} else if($('#subtitle-font-size-select-box option:selected').val() === 'heading5') {
			$('.subheading1').remove();
			$('.subheading2').remove();
			$('.subheading3').remove();
			$('.subheading4').remove();
			$('.subheading5').remove();
			$('#slideSubTitleText').append('<h5 class="subheading5 slideSubTitleText">' + title + '</h5>');
			$('.subheading6').remove();
			$('.subparagraph').remove();
		} else if($('#subtitle-font-size-select-box option:selected').val() === 'heading6') {
			$('.subheading1').remove();
			$('.subheading2').remove();
			$('.subheading3').remove();
			$('.subheading4').remove();
			$('.subheading5').remove();
			$('.subheading6').remove();
			$('#slideSubTitleText').append('<h6 class="subheading6 slideSubTitleText">' + title + '</h6>');
			$('.subparagraph').remove();
		} else if($('#subtitle-font-size-select-box option:selected').val() === 'paragraph') {
			$('.subheading1').remove();
			$('.subheading2').remove();
			$('.subheading3').remove();
			$('.subheading4').remove();
			$('.subheading5').remove();
			$('.subheading6').remove();
			$('.subparagraph').remove();
			$('#slideSubTitleText').append('<p class="subparagraph slideSubTitleText">' + title + '</p>');
		} else {
			$('#slideSubTitleText').html(title);
		}
	});
	
// Select Link Font Size 
	$("#link-font-size-select-box").chosen().change(function() {
		var title = $('#linkText').val();
		if($('#link-font-size-select-box option:selected').val() === 'heading1') {
			$('.linkheading1').remove();
			$('#slideLinkText').append('<h1 class="linkheading1 slideLinkText">' + title + '</h1>');
			$('.linkheading2').remove();
			$('.linkheading3').remove();
			$('.linkheading4').remove();
			$('.linkheading5').remove();
			$('.linkheading6').remove();
			$('.linkparagraph').remove();
			//$('#slideLinkText').remove(title);
		} else if($('#link-font-size-select-box option:selected').val() === 'heading2') {
			$('.linkheading1').remove();
			$('.linkheading2').remove();
			$('#slideLinkText').append('<h2 class="linkheading2 slideLinkText">' + title + '</h2>');
			$('.linkheading3').remove();
			$('.linkheading4').remove();
			$('.linkheading5').remove();
			$('.linkheading6').remove();
			$('.linkparagraph').remove();
		} else if($('#link-font-size-select-box option:selected').val() === 'heading3') {
			$('.linkheading1').remove();
			$('.linkheading2').remove();
			$('.linkheading3').remove();
			$('#slideLinkText').append('<h3 class="linkheading3 slideLinkText">' + title + '</h3>');
			$('.linkheading4').remove();
			$('.linkheading5').remove();
			$('.linkheading6').remove();
			$('.linkparagraph').remove();
		} else if($('#link-font-size-select-box option:selected').val() === 'heading4') {
			$('.linkheading1').remove();
			$('.linkheading2').remove();
			$('.linkheading3').remove();
			$('.linkheading4').remove();
			$('#slideLinkText').append('<h4 class="linkheading4 slideLinkText">' + title + '</h4>');
			$('.linkheading5').remove();
			$('.linkheading6').remove();
			$('.linkparagraph').remove();
		} else if($('#link-font-size-select-box option:selected').val() === 'heading5') {
			$('.linkheading1').remove();
			$('.linkheading2').remove();
			$('.linkheading3').remove();
			$('.linkheading4').remove();
			$('.linkheading5').remove();
			$('#slideLinkText').append('<h5 class="linkheading5 slideLinkText">' + title + '</h5>');
			$('.linkheading6').remove();
			$('.linkparagraph').remove();
		} else if($('#link-font-size-select-box option:selected').val() === 'heading6') {
			$('.linkheading1').remove();
			$('.linkheading2').remove();
			$('.linkheading3').remove();
			$('.linkheading4').remove();
			$('.linkheading5').remove();
			$('.linkheading6').remove();
			$('#slideLinkText').append('<h6 class="linkheading6 slideLinkText">' + title + '</h6>');
			$('.linkparagraph').remove();
		} else if($('#link-font-size-select-box option:selected').val() === 'paragraph') {
			$('.linkheading1').remove();
			$('.linkheading2').remove();
			$('.linkheading3').remove();
			$('.linkheading4').remove();
			$('.linkheading5').remove();
			$('.linkheading6').remove();
			$('.linkparagraph').remove();
			$('#slideLinkText').append('<p class="linkparagraph slideLinkText">' + title + '</p>');
		} else {
			$('#slideLinkText').html(title);
		}
	});
	
	
	
	// ################################## Position Text Container on Slide
	$("input[type='radio']").click(function()
	  {
		 if($('#topLeft').attr('previousvalue') === 'checked') { 
		   $('#slideTextContainer').css({'top' : '0' , 'bottom' : '66%' , 'left' : '0'});
		 } else if($('#topMiddle').attr('previousvalue') === 'checked') {
		   $('#slideTextContainer').css({'top' : '0' , 'bottom' : '66%'  , 'left' : '33%'});
		 } else if($('#topRight').attr('previousvalue') === 'checked') {
		   $('#slideTextContainer').css({'top' : '0' , 'bottom' : '66%'  , 'left' : '66%'});
		 } else if($('#middleLeft').attr('previousvalue') === 'checked') {
		   $('#slideTextContainer').css({'top' : '33%'  , 'bottom' : '33%' , 'left' : '0'});
		 } else if($('#middleMiddle').attr('previousvalue') === 'checked') {
		   $('#slideTextContainer').css({'top' : '33%' , 'bottom' : '33%'  , 'left' : '33%'});
		 } else if($('#middleRight').attr('previousvalue') === 'checked') {
		   $('#slideTextContainer').css({'top' : '33%' , 'bottom' : '33%'  , 'left' : '66%'});
		 } else if($('#bottomLeft').attr('previousvalue') === 'checked') {
		   $('#slideTextContainer').css({'top' : '66%' , 'bottom' : '0' , 'left' : '0'});
		 } else if($('#bottomMiddle').attr('previousvalue') === 'checked') {
		   $('#slideTextContainer').css({'top' : '66%' , 'bottom' : '0' , 'left' : '33%'});
		 } else if($('#bottomRight').attr('previousvalue') === 'checked') {
		   $('#slideTextContainer').css({'top' : '66%' , 'bottom' : '0' , 'left' : '66%'});
		 } 
	  });
	  
	  // ################################## Text background actions 
	  
	  // Opacity Change
	  $('#bgOpacity').change(function(){
		var bgOpacity = $('#bgOpacity').val();
		var bgHeight = $('#slideTextContainer').height() + 10;
		var bgWidth = $('#slideTextContainer').width() + 10;
    	$('#slideTextContainerBG').css({'opacity' : bgOpacity, 'height' : bgHeight, 'width' : bgWidth });
	  });
	  
	// Background shape
	$('#bgShape').change(function(){
		var bgTop = $('#bgTop').val();
		var bgLeft = $('#bgLeft').val();
		var bgLeftSkew = $('#bgLeftSkew').val();
		var bgRightSkew = $('#bgRightSkew').val();
		var bgRotateLeft = $('#bgRotateLeft').val();
		var bgRotateRight = $('#bgRotateRight').val();
		var matrix = 'matrix(' + bgRotateRight + ',' + bgLeftSkew+ ',' + bgRotateLeft+ ',' + bgRightSkew + ',' + bgLeft + ',' + bgTop + ')';
    	$('#slideTextContainerBG').css({
			'-webkit-transform' : matrix, 
			'-moz-transform' : matrix, 
			' -ms-transform' : matrix, 
			'-o-transform' : matrix, 
			'transform' : matrix });
	  });
	  
	  // Reset Background positions to default
	  $('#resetBackgroundPositions').click(function() {
		$('#bgTop').val('0');
		$('#bgLeft').val('0');
		$('#bgLeftSkew').val('0.9');
		$('#bgRightSkew ').val('0');
		$('#bgRotateLeft').val('0.9');
		$('#bgRotateRight').val('0');
    	$('#slideTextContainerBG').removeAttr('style');
	  });
	  
	  
	   
	  // ################################## Trunk8
	  // ##################################  This will only apply to the outputted text and will do so intelligently IE at the last word not half way through a word. 
	  
	  // Images
		// Title Trunk8 
		
	/*	$('#title').keyup(function() {
		  $('#title').trunk8({
			lines: 2,
			fill: '&nbsp;&raquo;&nbsp;',
			side: 'right',
			tooltip: 'false',
			width:'auto',
			parseHTML: 'true'
		  });
		});
		
		// Sub Title Trunk8
		  $('#slideSubTitleTextOutput').trunk8({
			lines: 2,
			fill: '&nbsp;&raquo;&nbsp;',
			side: 'right',
			tooltip: 'false',
			width:'auto',
			parseHTML: 'true'
		  });
		
		// Link Trunk8
		  $('#slideLinkTextOutput').trunk8({
			lines: 2,
			fill: '&nbsp;&raquo;&nbsp;',
			side: 'right',
			tooltip: 'true',
			width:'auto',
			parseHTML: 'true'
		  });
	   
	  // Videos
		// Title Trunk8 
		  $('#vid-slideTitleTextOutput').trunk8({
			lines: 2,
			fill: '&nbsp;&raquo;&nbsp;',
			side: 'right',
			tooltip: 'false',
			width:'auto',
			parseHTML: 'true'
		  });
		
		// Sub Title Trunk8
		  $('#vid-slideSubTitleTextOutput').trunk8({
			lines: 2,
			fill: '&nbsp;&raquo;&nbsp;',
			side: 'right',
			tooltip: 'false',
			width:'auto',
			parseHTML: 'true'
		  });
		
		// Link Trunk8
		  $('#vid-slideLinkTextOutput').trunk8({
			lines: 2,
			fill: '&nbsp;&raquo;&nbsp;',
			side: 'right',
			tooltip: 'true',
			width:'auto',
			parseHTML: 'true'
		  });  */
	  
	  // ################################## Submit form and output values
	  
	  $('#uploader').submit(function(event) {
		var slideTextContainer = $('#slideTextContainer').attr('style');
		var slideTextContainerBG = $('#slideTextContainerBG').attr('style');
		var title = $('#title').val();
		var slideTitleText = $('.slideTitleText').attr('style');
		var slideSubTitleText = $('.slideSubTitleText').attr('style');
		var subText = $('#subText').val();
		var linkText = $('#linkText').val();
		var slideLinkUrl = $('#slideLinkUrl').attr('href');
		var slideLinkText = $('.slideLinkText').attr('style');
		var fileLocation = $('#slide-select-box option:selected').val();
		$('#submitImageUploaderForm').click(function(){
			  if($('#file-type-select-box option:selected').val() === 'image') {
				  $('.uploadedDataImage').show();
				  $('#slideTextContainerStyle').text(slideTextContainer);
				  $('#slideTextContainerBGStyle').text(slideTextContainerBG);
				  $('#fileLocation').text(fileLocation);
				  $('#slideTitleTextOutput').html(title);
				  $('#slideTitleTextStyle').text(slideTitleText);
				  $('#slideSubTitleTextOutput').html(subText);
				  $('#slideSubTitleTextStyle').text(slideSubTitleText);
				  $('#slideLinkTextOutput').html(linkText);
				  $('#slideLinkUrlStyle').text(slideLinkUrl);
				  $('#slideLinkTextStyle').text(slideLinkText);
			  } else if($('#file-type-select-box option:selected').val() === 'video') {
				  $('.uploadedDataVideo').show();
				  $('#vid-slideTextContainerStyle').text(slideTextContainer);
				  $('#vid-slideTextContainerBGStyle').text(slideTextContainerBG);
				  $('#vid-fileLocation').text(fileLocation);
				  $('#vid-slideTitleTextOutput').html(title);
				  $('#vid-slideTitleTextStyle').text(slideTitleText);
				  $('#vid-slideSubTitleTextOutput').html(subText);
				  $('#vid-slideSubTitleTextStyle').text(slideSubTitleText);
				  $('#vid-slideLinkTextOutput').html(linkText);
				  $('#vid-slideLinkUrlStyle').text(slideLinkUrl);
				  $('#vid-slideLinkTextStyle').text(slideLinkText);
			  }
		});
		event.preventDefault();
	  });

	// ################################## 
	// ##################################  End of Doc ready
	// ################################## 
});