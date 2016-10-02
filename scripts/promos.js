$(document).ready(function() {
	
	// ################################## 
	// ################################## Start of Doc ready
	// ################################## 
	
	// ################################## Colour Select or File upload action
	$("#color-select-box").chosen().change(function() {
		if($('#color-select-box option:selected').val() === 'blue') {
			$('.uploadPromo').hide();
			$('.newPromoColor').hide();
			$('.promoRoundelOutput').css({'background' : '#00a5e4' , 'border' : '1px solid #00a5e4'});
			$('.promoRoundelImage').hide();
			$('.promoTextOutput').css({'position':'relative' , 'bottom': '0'});
		} else if($('#color-select-box option:selected').val() === 'red') {
			$('.uploadPromo').hide();
			$('.newPromoColor').hide();
			$('.promoRoundelOutput').css({'background' : '#ee3a42' , 'border' : '1px solid #ee3a42'});
			$('.promoRoundelImage').hide();
			$('.promoTextOutput').css({'position':'relative' , 'bottom': '0'});
		} else if($('#color-select-box option:selected').val() === 'yellow') {
			$('.uploadPromo').hide();
			$('.newPromoColor').hide();
			$('.promoRoundelOutput').css({'background' : '#d28117' , 'border' : '1px solid #d28117'});
			$('.promoRoundelImage').hide();
			$('.promoTextOutput').css({'position':'relative' , 'bottom': '0'});
		} else if($('#color-select-box option:selected').val() === 'newFile') {
			$('.uploadPromo').show();
			$('.newPromoColor').hide();
			$('.promoRoundelOutput').css('border' , '1px solid #fff');
			$('.promoRoundelImage').show();
		} else if($('#color-select-box option:selected').val() === 'newColor') {
			$('.newPromoColor').show();
			$('.uploadPromo').hide();
			$('.promoRoundelOutput').removeAttr('style');
			$('.promoRoundelImage').hide();
			$('.promoTextOutput').css({'position':'relative' , 'bottom': '0'});
		} else {
			$('.uploadPromo').hide();
			$('.newPromoColor').hide();
			$('.promoRoundelOutput').removeAttr('style');
			$('.promoTextOutput').css({'position':'relative' , 'bottom': '0'});
		}
	});
	
	// ################################## Build Text and links for page
	
	  // Add Promotional Text 
	  $('#promoText').keyup(function(){
		  var promo = $('#promoText').val();
			$('.promoTextOutput').remove();
			$('.promoRoundelOutput').append('<p class="promoTextOutput">' + promo + '</p>');
			if($('.promoRoundelImage').is(':visible')) {
				$('.promoTextOutput').css({'position' : 'relative' , 'bottom' : '68px', 'z-index' : '2'});
			} 	  
			if(promo.length > 9) {
				$('.warning').show();
			} else if(promo.length < 10) {
				$('.warning').hide();
			}
	  });
	  
	  
	  
	  // ################################## Submit form and output values
	  
	  $('#uploader').submit(function(event) {
		  //alert($('.promoRoundelOutput').attr('style'));
		var promoRoundelOutput = $('.promoRoundelOutput').attr('style');
		var promoText = $('#promoText').val();
		var roundelColor = $('#color-select-box option:selected').val();
		$('#submitImageUploaderForm').click(function(){
			  if($('#color-select-box option:selected').val() === 'newFile') {
				  $('.uploadedDataImage').show();
				  $('#promoTextOutput').html(promoText);
				  $('#promoRoundelOutputCSS').html(promoRoundelOutput);
			  } else if($('#color-select-box option:selected').val() === 'newColor') {
				  $('.uploadedDataImage').show();
				  $('#promoTextOutput').html(promoText);
				  $('#promoRoundelOutputCSS').html(promoRoundelOutput);
				  $('#roundelColor').html(roundelColor);
				  $('.fileNameHeading').hide();
				  $('.fileSize').hide();
				  $('.fileType').hide();
				  $('#name').hide();
				  $('#size').hide();
				  $('#type').hide();
			  } else {
				  $('.uploadedDataImage').show();
				  $('#promoTextOutput').html(promoText);
				  $('#promoRoundelOutputCSS').html(promoRoundelOutput);
				  $('#roundelColor').html(roundelColor);
				  $('.fileNameHeading').hide();
				  $('.fileSize').hide();
				  $('.fileType').hide();
				  $('#name').hide();
				  $('#size').hide();
				  $('#type').hide();
			  }
		});
		event.preventDefault();
	  });

	// ################################## 
	// ##################################  End of Doc ready
	// ################################## 
});