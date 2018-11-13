jQuery(document).ready(function () {
  
	$('#customnotify').click(function(){
		$.notify({
			icon: '../assets/app/media/img/users/yash.jpg',
			title: 'Rocking star Yash',
			message: 'yash is a film actor of kannada film industry,He was acted in more than 20 films.,now his new Movie "KGF" is releasing in Dec 21 2018.'
		},{
			type: 'minimalist',
			delay: 5000,
			icon_type: 'image',
			template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
				'<img data-notify="icon" class="rounded-circle pull-left">' +
				'<span data-notify="title">{1}</span>' +
				'<span data-notify="message">{2}</span>' +
			'</div>'
		});
	});
  
  	$('.notifyInfo').click(function(){
  		$.notify({
			// options
			icon: '../assets/app/media/img/users/yash.jpg',
			title: 'Festival Offers..',
			message: '<div>Turning standard Bootstrap alerts into "notify" like notifications</div>',
			url: 'https://github.com/mouse0270/bootstrap-notify',
			target: '_blank'
		},{
			// settings
			element: '.m-subheader-search',
			icon_type: 'image',
			position: "absolute",
			type: "info",
			allow_dismiss: true,
			newest_on_top: true,
			showProgressbar: false,
			placement: {
				from: "top",
				align: "center"
			},
			offset: {
				x: 20,
				y: 50
			},
			spacing: 10,
			z_index: 1031,
			delay: 5000,
			timer: 1000,
			url_target: '_blank',
			mouse_over: null,
			animate: {
				enter: 'animated fadeInDown',
				exit: 'animated fadeOutUp'
			},
			onShow: null,
			onShown: null,
			onClose: null,
			onClosed: null,
			icon_type: 'class',
			template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
				'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
				'<span data-notify="icon"></span> ' +
				'<span data-notify="title">{1}</span> ' +
				'<span data-notify="message">{2}</span>' +
				'<div class="progress" data-notify="progressbar">' +
					'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
				'</div>' +
				'<a href="{3}" target="{4}" data-notify="url"></a>' +
			'</div>' 
		});
  		
  		$.notify({
			icon: "../assets/app/media/img/users/yash.jpg",
			message: "<div> I am using an image.</div>"
		},{
			icon_type: 'image',
			delay: 5000,
			icon_type: 'image',
			template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
				'<img data-notify="icon" class="img-responsive">' +
				'<span data-notify="title">{1}</span>' +
				'<span data-notify="message">{2}</span>' +
			'</div>'
		});
  		
  	});
  	
  	$('.notifyWarning').click(function(){
		$.notify({
			message: "Check out my twitter account by clicking on this notification!",
			url: "https://twitter.com/Mouse0270"
		},{
			url_target: "_self",
			type: "warning"
		});
		
		$.notify('I will not close until my delay is up.', {
			allow_dismiss: false,
			placement: {
				from: 'bottom',
				align: 'left',
				type: "warning",
			}
		});
		setTimeout(function() {
			$.notifyClose('top-right');
		}, 3000);
	});
  	
  	$('.notifyDanger').click(function(){
		$.notify({
			message: "Check out my twitter account by clicking on this notification!",
			url: "https://twitter.com/Mouse0270"
		},{
			url_target: "_self",
			type: "danger"
		});
		
		$.notify('I will not close until my delay is up.', {
			allow_dismiss: false,
			placement: {
				from: 'bottom',
				align: 'left',
				type: "danger"
			}
		});
		setTimeout(function() {
			$.notifyClose('top-right');
		}, 3000);
	});
  	
  	$('.notifySuccess').click(function(){
  		var notify = $.notify('<strong>Saving</strong> Do not close this page...', {
			type: 'success',
			allow_dismiss: false,
			showProgressbar: true
		});

		setTimeout(function() {
			notify.update('message', '<strong>Saving</strong> Page Data.');
		}, 1000);

		setTimeout(function() {
			notify.update('message', '<strong>Saving</strong> User Data.');
		}, 2000);

		setTimeout(function() {
			notify.update('message', '<strong>Saving</strong> Profile Data.');
		}, 3000);

		setTimeout(function() {
			notify.update('message', '<strong>Checking</strong> for errors.');
		},500);
	});
  	
});
