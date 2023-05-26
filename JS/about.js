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