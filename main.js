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
	});
}
// Video slider----------
$(".video__content-mobile").slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 2.5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2.5,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2.5,
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

// Main product section----
$(".main-product__main-img-box").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: ".slider-nav-small",
});
$(".main-product__small-img-box").slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	asNavFor: ".slider-nav-main",
	dots: false,
	// centerMode: true,
	focusOnSelect: true,
});

// Counter Incrise Decrise---------
const counterParent = document.querySelector(
	".varient-quantity-box__quentity-item-box"
);
const value = document.querySelector(".count-value");
let count = 1;

counterParent.addEventListener("click", (e) => {
	if (e.target.className == "plus") {
		if (value.innerHTML < 10) {
			count++;
			value.innerHTML = count;
		}
	} else {
		if (value.innerHTML > 1) {
			count--;
			value.innerHTML = count;
		}
	}
});
