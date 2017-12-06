/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    console.log("yeah");
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

/// SLIDER en el home
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

var playing = true;

function pauseSlideshow() {
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    playing = true;
    slideInterval = setInterval(nextSlide, 4000);
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function () {
    pauseSlideshow();
    nextSlide();
    playSlideshow();
};
previous.onclick = function () {
    pauseSlideshow();
    previousSlide();
    playSlideshow();
};

// Focus al search
var elm_rows = document.getElementsByClassName("main-search-form")[0];
elm_rows.addEventListener("click", function (e) {
    this.getElementsByTagName("input")[0].focus();
});

//# sourceMappingURL=site.js.map