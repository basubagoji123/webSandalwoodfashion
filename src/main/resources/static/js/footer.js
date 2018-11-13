function formelements(){
	$('.form-element1').addClass('col-lg-1 col-md-1 col-sm-12 form-group');
	$('.form-element2').addClass('col-lg-2 col-md-2 col-sm-12 form-group');
	$('.form-element3').addClass('col-lg-3 col-md-3 col-sm-12 form-group');
	$('.form-element4').addClass('col-lg-4 col-md-4 col-sm-12 form-group');
	$('.form-element5').addClass('col-lg-5 col-md-5 col-sm-12 form-group');
	$('.form-element6').addClass('col-lg-6 col-md-6 col-sm-12 form-group');
	$('.form-element7').addClass('col-lg-7 col-md-7 col-sm-12 form-group');
	$('.form-element8').addClass('col-lg-8 col-md-8 col-sm-12 form-group');
	$('.form-element9').addClass('col-lg-9 col-md-9 col-sm-12 form-group');
	$('.form-element10').addClass('col-lg-10 col-md-10 col-sm-12 form-group');
	$('.form-element11').addClass('col-lg-11 col-md-11 col-sm-12 form-group');
	$('.form-element12').addClass('col-lg-12 col-md-12 col-sm-12 form-group');
	
	$('form').addClass('m-form m-form--fit m-form--label-align-right');
	$('form').attr('autocomplete','off');
//	$('.m-portlet__body').addClass('container-fluid');
//	$('.m-portlet').addClass('m-portlet--rounded');
	 
//	$('form').addClass('m-form m-form--fit m-form--label-align-right');
//	$('.single-select').attr({"data-size" : "7", "data-selected-text-format" : "count > 2"});
//	$(".selectpicker").selectpicker();
	 
}


$(document).ready(function(){
	formelements();
	userRatings();
	
	// Initiate zoom effect:
	imageZoom("myimage", "myresult");
	
//	loadDatePickers();
});


/* script for toast message */
function toastrMsg(msg,type){
	if(type == 'info'){
		toastr.info(msg);
	}else if(type == 'success'){
		toastr.success(msg);
	}else if(type == 'error'){
		toastr.error(msg);
	}else if(type == 'warning'){
		toastr.warning(msg);
	}
}

/* for user Ratings */
function userRatings(){
	var ratings = document.getElementsByClassName('rating');
	for (var i = 0; i < ratings.length; i++) {
	    var r = new SimpleStarRating(ratings[i]);
	    ratings[i].addEventListener('rate', function(e) {
	        console.log('Rating: ' + e.detail);
	    });
	}
}


//script for expand image in description page
function expandImageonhover(imgs) {
    var expandImg = document.getElementById("myimage");
//    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
//    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

// for image zoomover
function imageZoom(imgID, resultID) {
	  var img, lens, result, cx, cy;
	  img = document.getElementById(imgID);
	  result = document.getElementById(resultID);
	  /*create lens:*/
	  lens = document.createElement("DIV");
	  lens.setAttribute("class", "img-zoom-lens");
	  /*insert lens:*/
	  img.parentElement.insertBefore(lens, img);
	  /*calculate the ratio between result DIV and lens:*/
	  cx = result.offsetWidth / lens.offsetWidth;
	  cy = result.offsetHeight / lens.offsetHeight;
	  /*set background properties for the result DIV:*/
	  result.style.backgroundImage = "url('" + img.src + "')";
	  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
	  /*execute a function when someone moves the cursor over the image, or the lens:*/
	  lens.addEventListener("mousemove", moveLens);
	  img.addEventListener("mousemove", moveLens);
	  /*and also for touch screens:*/
	  lens.addEventListener("touchmove", moveLens);
	  img.addEventListener("touchmove", moveLens);
	  function moveLens(e) {
	    var pos, x, y;
	    /*prevent any other actions that may occur when moving over the image:*/
	    e.preventDefault();
	    /*get the cursor's x and y positions:*/
	    pos = getCursorPos(e);
	    /*calculate the position of the lens:*/
	    x = pos.x - (lens.offsetWidth / 2);
	    y = pos.y - (lens.offsetHeight / 2);
	    /*prevent the lens from being positioned outside the image:*/
	    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
	    if (x < 0) {x = 0;}
	    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
	    if (y < 0) {y = 0;}
	    /*set the position of the lens:*/
	    lens.style.left = x + "px";
	    lens.style.top = y + "px";
	    /*display what the lens "sees":*/
	    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
	  }
	  function getCursorPos(e) {
	    var a, x = 0, y = 0;
	    e = e || window.event;
	    /*get the x and y positions of the image:*/
	    a = img.getBoundingClientRect();
	    /*calculate the cursor's x and y coordinates, relative to the image:*/
	    x = e.pageX - a.left;
	    y = e.pageY - a.top;
	    /*consider any page scrolling:*/
	    x = x - window.pageXOffset;
	    y = y - window.pageYOffset;
	    return {x : x, y : y};
	  }
	}


//for side nav bar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function loadDatePickers(){
	
	$(".datepicker").datepicker({
		rtl:mUtil.isRTL(),
		todayBtn:"linked",
		clearBtn:!0,
		autoclose:!0,
		format:"dd/mm/yyyy",
		todayHighlight:!0,
		orientation:"bottom left",
		templates:{leftArrow:'<i class="la la-angle-left"></i>',rightArrow:'<i class="la la-angle-right"></i>'}
	});
	
	$(".datetimepicker").datetimepicker({
		orientation:"bottom left",
		todayHighlight:!0,
		autoclose:!0,
		showMeridian:!0,
		format:"dd/mm/yyyy hh:ii",
		clearBtn:!0,
		todayBtn:"linked"
	});
	
	$('.timepicker').timepicker({minuteStep:1,showSeconds:!1,showMeridian:!1,snapToStep:!0,defaultTime:"00:00"});
	
	$('.datetimepicker,.datepicker').attr('readonly','readonly');
	$('.datepicker,.datetimepicker,.timepicker').mouseout(function(){$(this).blur()});
}