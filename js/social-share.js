$(document).ready(function() {

	$('.social-share a').on('click', function() {

		var url = $(this).attr('href');
		window.open(url, "_share","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=800,height=600");

		ga('send', 'event', 'button', 'click', 'social share buttons');

	  	return false;
	});

})
