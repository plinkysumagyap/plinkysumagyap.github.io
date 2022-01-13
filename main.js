// fuction that set the height of the header
$(document).ready(function(){
 $('.header').height($(window).height());
});


// fuction that acknowledge submitted user inputs
function acknowledgeResponse() {
	alert("Hello, feel free to contact me directly at plinkysumagyap@gmail.com. Thank you and have a nice day!");
	document.getElementById("contact-form").reset();
	
}