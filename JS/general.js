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
		let target = e.target.getAttribute('href');
  
		if (target !== '#commercial' && target !== '#interior' && target !== '#exterior') {
		  e.preventDefault();
		  transition_el.classList.add('is-active');
  
		  setTimeout(() => {
			window.location.href = target;
		  }, 500);
		}
	  });
	}
}
//End of function for page transition

//Start of function to animate text
function animateText() {
	const txts = document.querySelector(".animate-text").children;
	const txtsLen = txts.length;
	let index = 0;
	const textInTimer = 2800;
	const textOutTimer = 2600;
 
	for (let i = 0; i < txtsLen; i++) {
	   txts[i].classList.remove("slide-up", "slide-down");
	   txts[i].style.display = "none";
	}
 
	function showNextSpan() {
	   txts[index].style.display = "inline";
	   txts[index].classList.add("slide-up");
 
	   setTimeout(function () {
		  txts[index].classList.add("slide-down");
	   }, textOutTimer);
 
	   setTimeout(function () {
		  txts[index].style.display = "none";
		  if (index == txtsLen - 1) {
			 index = 0;
		  } else {
			 index++;
		  }
		  showNextSpan();
	   }, textInTimer);
	}
 
	showNextSpan();
}
//End of function to animate text

//Start of function for scroll-up button 
function initScrollUpButton() {
	window.onscroll = function () {
	   scrollFunction();
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

//Start of function to reveal content on scroll animation
function initRevealAnimation() {
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
}
//End of function to reveal content on scroll animation

//Start of function for active state for navbar links
function initNavbarLinks() {
	const links = document.querySelectorAll('.navbar ul li a');
	links.forEach(link => {
	   link.addEventListener('click', function () {
		  links.forEach(link => link.classList.remove('active'));
		  this.classList.add('active');
	   });
	});
}
//End of function for active state for navbar links

//Start of function for sticky navbar 
function initStickyHeader() {
	window.addEventListener("scroll", function () {
	   var header = document.querySelector("header");
	   header.classList.toggle("sticky", window.scrollY > 0);
	});
}
//End of function for sticky navbar 


//Start of function for dropdown menu
function initDropDownMenu() {
	const toggleBtn = document.querySelector('.toggle_btn');
	const toggleBtnIcon = document.querySelector('.toggle_btn i');
	const dropDownMenu = document.querySelector('.dropdown_menu');
 
	toggleBtn.onclick = function () {
	   dropDownMenu.classList.toggle('open');
	   const isOpen = dropDownMenu.classList.contains('open');
	   toggleBtnIcon.classList = isOpen ? 'fas fa-xmark' : 'fas fa-bars';
	};
}
//End of function for dropdown menu


//Start of function for automatic image slider
function initSliderInterval() {
	var counter = 2;
	setInterval(function () {
	   document.getElementById('radio' + counter).checked = true;
	   counter++;
	   if (counter > 4) {
		  counter = 1;
	   }
	}, 5000);
}
//End of function for automatic image slider

//Start of function for FAQs toggle
function initFAQs() {
	const faqs = document.querySelectorAll(".faq");
	faqs.forEach(faq => {
	   faq.addEventListener("click", () => {
		  faq.classList.toggle("active");
	   });
	});
}
//End of function for FAQs toggle

//Start of function for counter-up animation
function initValueDisplays() {
	let valueDisplays = document.querySelectorAll(".num");
	let interval = 2000;
	valueDisplays.forEach(valueDisplays => {
	   let startValue = 0;
	   let endValue = parseInt(valueDisplays.getAttribute("data-val"));
	   let duration = Math.floor(interval / endValue);
	   let counter = setInterval(function () {
		  startValue += 1;
		  valueDisplays.textContent = startValue;
		  if (startValue == endValue) {
			 clearInterval(counter);
		  }
	   }, duration);
	});
}

function initCounters() {
	const counters = document.querySelectorAll(".counters span");
	const container = document.querySelector(".counters");
	let activated = false;
 
	window.addEventListener("scroll", () => {
	   if (
		  pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false
	   ) {
		  counters.forEach(counter => {
			 counter.innerText = 0;
			 let count = 0;
 
			 function updateCount() {
				const target = parseInt(counter.dataset.count);
				if (count < target) {
				   count++;
				   counter.innerText = count;
				   setTimeout(updateCount, 10);
				} else {
				   counter.innerText = target;
				}
			 }
 
			 updateCount();
			 activated = true;
		  });
	   } else if (
		  pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true
	   ) {
		  counters.forEach(counter => {
			 counter.innerText = 0;
		  });
		  activated = false;
	   }
	});
}
//End of function for counter-up animation

//Start of function for swiper slider
function initSwiper() {
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
}
//End of function for swiper slider

//Runs the functions when page loads
window.onload = function () {
	initTransition();
	animateText();
	initScrollUpButton();
};

//Runs the functions when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
	initRevealAnimation();
	initNavbarLinks();
	initStickyHeader();
	initDropDownMenu();
	initSliderInterval();
	initFAQs();
	initValueDisplays();
	initSwiper();
	initCounters();
});
