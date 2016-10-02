$(document).ready(function() {
	//check if browser supports file api and filereader features
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		
	   //Not Required just a function to mate the file size format friendlier
	   //http://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable
		function humanFileSize(bytes, si) {
			var thresh = si ? 1000 : 1024;
			if(bytes < thresh) return bytes + ' B';
			var units = si ? ['kB','MB','GB','TB','PB','EB','ZB','YB'] : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
			var u = -1;
			do {
				bytes /= thresh;
				++u;
			} while(bytes >= thresh);
			return bytes.toFixed(1)+' '+units[u];
		}
	
	
	  // input loads image
		function renderImage(file){
			var reader = new FileReader();
			reader.onload = function(event){
				the_url = event.target.result
		 
				$('#preview').html("<img src='"+the_url+"' /><div id='slideTextContainer'><div id='slideTextContainerBG'></div><div id='slideTitleText'></div><div id='slideSubTitleText'></div><a id='slideLinkUrl' href=''><div id='slideLinkText'></div></a></div>")
				$('#name').html(file.name)
				$('#size').html(humanFileSize(file.size, "MB"))
				$('#type').html(file.type)
			}
		
			reader.readAsDataURL(file);
		}
	
	  
	  // input loads a video
		function renderVideo(file){
			var reader = new FileReader();
			reader.onload = function(event){
				the_url = event.target.result
		  
		  $('#data-vid').html("<video width='400' controls><source id='vid-source' src='"+the_url+"' type='video/mp4'></video><div id='slideTextContainer'><div id='slideTextContainerBG'></div><div id='slideTitleText'></div><div id='slideSubTitleText'></div><a id='slideLinkUrl' href=''><div id='slideLinkText'></div></a></div>")
		   $('#name-vid').html(file.name)
				$('#size-vid').html(humanFileSize(file.size, "MB"))
				$('#type-vid').html(file.type)
	
			}
	
			reader.readAsDataURL(file);
		}
	
	  
	
	  // Output to preview
		$( "#photoUpload" ).change(function() {
			console.log("photo file has been chosen")
			// Grab the first image in the fileList
			// For Single File only.
			console.log(this.files[0].size)
			renderImage(this.files[0])
	
		});
	  
		$( "#videoUpload" ).change(function() {
			console.log("video file has been chosen")
			// Grab the first image in the fileList
			// For Single File only.
			console.log(this.files[0].size)
			renderVideo(this.files[0])
	
		});
	
	} else {
	
	  alert('The HTML 5 File upload APIs are not fully supported in this browser.  Please upgrade your browser.');
	
	}
});