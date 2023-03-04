$(document).ready(function () {
	$(window).resize(function () {
		if ($(window).width() < 768) {
			$("#collection-content").removeClass("collections__content");
			runSlider();
		} else {
			$("#collection-content").addClass("collections__content");
		}
	});
});

function runSlider() {
	$(document).ready(function () {
		$(".collection-slider").slick({
			dots: true,
			slidesToShow: 1.25,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1700,
					settings: "unslick",
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1.25,
						slidesToScroll: 1,
					},
				},
			],
		});
	});
}
runSlider();
