//Start of function for sticky navbar
window.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});
//End of function for sticky navbar

//Start of function for dropdown menu
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
toggleBtn.onclick = function () {
	dropDownMenu.classList.toggle('open');
	const isOpen = dropDownMenu.classList.contains('open');
	toggleBtnIcon.classList = isOpen ? 'fas fa-xmark' : 'fas fa-bars';
};
//End of function for dropdown menu

//Start of function for swiper slider
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
//End of function for swiper slider

//Start of function fro scroll-up button
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
//End of function fro scroll-up button
