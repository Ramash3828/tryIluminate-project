// Humbrger Menu -----------
const menu = document.querySelector(".nav__menu-content-mobile");
const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".toggle-btn");
console.log(menu, closeBtn, toggleBtn);
closeBtn.addEventListener("click", () => {
	menu.style.transform = `translateX(-100%)`;
});
toggleBtn.addEventListener("click", () => {
	menu.style.transform = `translateX(0)`;
});

// Window Resize---
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
			dots: false,
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
// Allcollection Slider
$(".all-collections__slider").slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2.25,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2.25,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2.25,
				slidesToScroll: 1,
			},
		},
	],
});

// Video slider----------
$(".video__content").slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2.5,
				slidesToScroll: 1,
			},
		},
	],
});
