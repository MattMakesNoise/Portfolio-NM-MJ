"use strict";

//=======================================================================//
//=======================================================================//
//===== TYPEWRITER EFFECT ON HERO BANNER ================================//
//=======================================================================//
//=======================================================================//
//array to hold the text to be typed
var text = ["human...", "legend...", "web developer!"];
var a = 0;
var b = 1;
var reverse = false;
var interval = setInterval(type, 150);

function type() {
  var nowText = text[a];
  document.getElementById("typewriter").innerText = nowText.substring(0, b); //reverse direction (delete) if end of string reached

  if (b == nowText.length + 5) {
    //+5 makes it stall for a moment before typing
    reverse = true;
  }

  b += reverse ? -2 : 1; //reset b and go forward again

  if (b <= 0) {
    b = 1;
    reverse = false;
    a++;
  } //reached end of list then start over 


  if (a == text.length) {
    setTimeout(function () {
      a = 0;
    }, 5000);
  }
}

; //=======================================================================//
//=======================================================================//
//===== CHANGE COLOUR OF LOGO AND BURGER DEPENDING ON PAGE BACKROUND ====//
//=======================================================================//
//=======================================================================//
// const burgerWrapper = document.querySelector('.burger-wrapper');
// const burgerOne = document.querySelector('.burger-lineOne');
// const burgerTwo = document.querySelector('.burger-lineTwo');
// const burgerThree = document.querySelector('.burger-lineThree');
// const heroSection = document.querySelector('.hero-wrapper');
// const cardsSection = document.querySelector('.cards-wrapper');
// const contactSection = document.querySelector('.contact-wrapper');
// const heroSectionOptions = {
//     root: null, //it is the viewport
//     threshold: 0,
//     rootMargin: "0px"
// };
// const heroSectionObserver = new IntersectionObserver(function(entries, heroSectionObserver) {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting) {
//             // logoBorder.classList.add('logo-wrapper-dark');
//             // logo.classList.add('logo-dark');
//             burgerOne.classList.add('burger-dark');
//             burgerTwo.classList.add('burger-dark');
//             burgerThree.classList.add('burger-dark');
//         } else {
//             // logoBorder.classList.remove('logo-wrapper-dark');
//             // logo.classList.remove('logo-dark');
//             burgerOne.classList.remove('burger-dark');
//             burgerTwo.classList.remove('burger-dark');
//             burgerThree.classList.remove('burger-dark');
//         }
//     });
// }, heroSectionOptions);
// heroSectionObserver.observe(heroSection);
//=======================================================================//
//=======================================================================//
//===== BRING CARDS IN FROM THE SIDE AS THE PAGE IS SCROLLED ============//
//=======================================================================//
//=======================================================================//

var fadeIn = document.querySelectorAll('.fade-in'); //faders in tutorial

var slideIn = document.querySelectorAll('.slide-in'); //sliders in tutorial

var appearOnScrollOptions = {
  root: null,
  //it is the viewport
  threshold: 0,
  rootMargin: "-100px"
};
var appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOnScrollOptions);
fadeIn.forEach(function (fadeIn) {
  appearOnScroll.observe(fadeIn);
});
slideIn.forEach(function (slideIn) {
  appearOnScroll.observe(slideIn);
}); //=======================================================================//
//=======================================================================//
//===== CONTACT FORM VALIDATION =========================================//
//=======================================================================//
//=======================================================================//