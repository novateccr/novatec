/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("main-nav").style.transform = "translate3d(0, 0, 0)";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("main-nav").style.transform = "translate3d(-100%, 0, 0)";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

// Focus al search
var elm_rows = document.getElementsByClassName("main-search-form")[0];
elm_rows.addEventListener("click", function (e) {
    this.getElementsByTagName("input")[0].focus();
});

$(document).ready(function(){
	$('#slides').slick({
		infinite: true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		lazyLoad: 'ondemand',
	});
});
