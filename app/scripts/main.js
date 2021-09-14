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
// Price bar
var slider = document.getElementById("filter-price-progress");
var output = document.getElementById("filter-label--value");
output.innerHTML = slider.value;
slider.oninput = function () {
	output.innerHTML = this.value;
};
