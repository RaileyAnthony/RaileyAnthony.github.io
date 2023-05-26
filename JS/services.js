window.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});
 
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
toggleBtn.onclick = function () {
	dropDownMenu.classList.toggle('open');
	const isOpen = dropDownMenu.classList.contains('open');
	toggleBtnIcon.classList = isOpen ? 'fas fa-xmark' : 'fas fa-bars';
};
 
var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
	   rotate: 0,
	   stretch: 0,
	   depth: 100,
	   modifier: 2,
	},
	navigation: {
	   nextEl: '.swiper-button-next',
	   prevEl: '.swiper-button-prev',
	}
});

function initScrollUpButton() {
	window.onscroll = function () {
	   scrollFunction()
	};
 
	function scrollFunction() {
	   var scrollup = document.getElementById("scrollup");
	   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		  scrollup.classList.add("show");
	   } else {
		  scrollup.classList.remove("show");
	   }
	}
 
	function scrollToTop() {
	   document.body.scrollTop = 0;
	   document.documentElement.scrollTop = 0;
	}
 
	const scrollupButton = document.getElementById("scrollup");
	scrollupButton.addEventListener("click", scrollToTop);
}

initScrollUpButton();