//slide to next button


let slideIndex = 1;
showSlides(slideIndex);
setInterval(showSlides,4000);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if(n==undefined)
    {
        slideIndex=slideIndex+1;
        if(slideIndex>slides.length) {slideIndex = 1;}
    }
  let i;
  //let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var droppedFiles = false;
var fileName = '';
var $dropzone = $('.dropzone');
var $button = $('.upload-btn');
var uploading = false;
var $syncing = $('.syncing');
var $done = $('.done');
var $bar = $('.bar');
var timeOut;

$dropzone.on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
	e.preventDefault();
	e.stopPropagation();
})
	.on('dragover dragenter', function () {
		$dropzone.addClass('is-dragover');
	})
	.on('dragleave dragend drop', function () {
		$dropzone.removeClass('is-dragover');
	})
	.on('drop', function (e) {
		droppedFiles = e.originalEvent.dataTransfer.files;
		fileName = droppedFiles[0]['name'];
		$('.filename').html(fileName);
		$('.dropzone .upload').hide();
	});

$button.bind('click', function () {
	startUpload();
});

$("input:file").change(function () {
	fileName = $(this)[0].files[0].name;
	$('.filename').html(fileName);
	$('.dropzone .upload').hide();
});

function startUpload() {
	if (!uploading && fileName != '') {
		uploading = true;
		$button.html('Uploading...');
		$dropzone.fadeOut();
		$syncing.addClass('active');
		$done.addClass('active');
		$bar.addClass('active');
		timeoutID = window.setTimeout(showDone, 3200);
	}
}

function showDone() {
	$button.html('Done');
}