// Slick Slider
$(document).ready(function () {
	$(".beach-slider-images").slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});
});
$('[data-toggle="datepicker"]').datepicker({
	format: "mm-dd-yyyy",
});
// Accordion
$(document).ready(function () {
	var acc = document.getElementsByClassName("package-content-program-header");
	var i;
	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var panelAcc = this.nextElementSibling;
			if (panelAcc.style.display === "block") {
				panelAcc.style.display = "none";
			} else {
				panelAcc.style.display = "block";
			}
		});
	}
});
// Price bar
$(document).ready(function () {
	var slider = document.getElementById("filter-price-progress");
	var output = document.getElementById("filter-label--value");
	output.innerHTML = slider.value;
	slider.oninput = function () {
		output.innerHTML = this.value;
	};
});
