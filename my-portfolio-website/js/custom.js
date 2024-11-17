
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
});

// code to update and collect infor from the lambda func

const counter = document.querySelector(".counter-number");
async function updateCounter() {
	let response = await fetch("https://lafpbnraaaml5sp4w2mddygsxa0upxvy.lambda-url.ap-south-1.on.aws/")
	let data = await response.json();
	counter.innerHTML = `You are visitor number: ${data}`;
}
updateCounter();