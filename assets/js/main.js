/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("main-nav").classList.add('expanded');
    document.body.style.overflow = "hidden";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("main-nav").classList.remove("expanded");
    document.body.style.backgroundColor = "white";
    document.body.style.overflow = "auto";
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
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});
});

$(function () {
	$('.lazy').Lazy();
});
