// Humbrger Menu -----------
const menu = document.querySelector(".nav__menu-content-mobile");
const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".toggle-btn");

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

$(document).ready(function () {
	// Main product section----
	$(".main-product__main-img-box").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: ".main-product__small-img-box",
	});
	$(".main-product__small-img-box").slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: false,
		// centerMode: true,
		focusOnSelect: true,
		asNavFor: ".main-product__main-img-box",
		infinite: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				arrows: true,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				arrows: true,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
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

//Accrodion-------
$(document).ready(function () {
	//toggle the component with class accordion_body
	$(".innovation__faq-heading").click(function () {
		if ($(".innovation__faq-details").is(":visible")) {
			$(".innovation__faq-details").slideUp(500);
			$(".plusminus").text("+");
			$(".innovation__faq-heading").removeClass("active");
		}
		if ($(this).next(".innovation__faq-details").is(":visible")) {
			$(this).next(".innovation__faq-details").slideUp(500);
			// $(this).children(".plusminus").text("+");
			$(this).removeClass("active");
		} else {
			$(this).next(".innovation__faq-details").slideDown(500);
			// $(this).children(".plusminus").text("-");
			$(this).addClass("active");
		}
	});
});
