//Start of function for page transition
function initTransition() {
	const transition_el = document.querySelector('.transition');
	const anchors = document.querySelectorAll('a');
 
	setTimeout(() => {
	   transition_el.classList.remove('is-active');
	}, 500);
 
	for (let i = 0; i < anchors.length; i++) {
	   const anchor = anchors[i];
 
	   anchor.addEventListener('click', e => {
		  e.preventDefault();
		  let target = e.target.href;
 
		  transition_el.classList.add('is-active');
 
		  setTimeout(() => {
			 window.location.href = target;
		  }, 500);
	   });
	}
}
//End of function for page transition

//Start of function for comparison slider
function initComparisonSlider() {
	const slider = document.querySelector(".comparison-slider input");
	const img = document.querySelector(".comparison-images .img-2");
	const dragLine = document.querySelector(".comparison-slider .drag-line");
 
	slider.oninput = () => {
	   let sliderVal = slider.value;
	   dragLine.style.left = sliderVal + "%";
	   img.style.width = sliderVal + "%";
	}
}
//End of function for comparison slider

//Start of function for filterable image gallery
function initFilterButtons() {
	const filterBtns = document.querySelectorAll('.filter-btn');
	const portfolioItems = document.querySelectorAll('.portfolio-item');
 
	filterBtns.forEach(function (btn) {
	   btn.addEventListener('click', function () {
		  const filterValue = btn.getAttribute('data-filter');
 
		  filterBtns.forEach(function (btn) {
			 btn.classList.remove('active');
		  });
		  btn.classList.add('active');
		  portfolioItems.forEach(function (item) {
			 if (filterValue === 'all' || item.classList.contains(filterValue)) {
				item.style.display = 'block';
			 } else {
				item.style.display = 'none';
			 }
		  });
	   });
	});
}
//End of function for filterable image gallery

//Start of function for scroll-up button 
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
//End of function for scroll-up button 

window.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});
 
//Start of function to reveal content on scroll animation
window.addEventListener('scroll', reveal);
 
 function reveal() {
	var reveals = document.querySelectorAll('.reveal');
 
	for (var i = 0; i < reveals.length; i++) {
 
	   var windowheight = window.innerHeight;
	   var revealtop = reveals[i].getBoundingClientRect().top;
	   var revealpoint = 150;
 
	   if (revealtop < windowheight - revealpoint) {
		  reveals[i].classList.add('active');
	   }
	}
}
//End of function to reveal content on scroll animation

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

//Runs the functions when page loads
window.onload = function () {
	initTransition();
	initComparisonSlider();
	initScrollUpButton();
};

//Runs the functions when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
	initFilterButtons();
});
 
