"use strict";

//=======================================================================//
//=======================================================================//
//===== TYPEWRITER EFFECT ON HERO BANNER ================================//
//=======================================================================//
//=======================================================================//
// array to hold the text to be typed
var typing = ["human...", "legend...", "web developer!"];
var a = 0;
var b = 1;
var reverse = false;
var interval = setInterval(type, 150);

function type() {
  var nowText = typing[a];
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


  if (a == typing.length) {
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

var form = document.getElementById('form');
var firstName = document.getElementById('fname');
var lastName = document.getElementById('lname');
var email = document.getElementById('email');
var subject = document.getElementById('subject');
var text = document.getElementById('text');
var popup = document.querySelector('.success-popup');
var classCheck = document.querySelector('.form-control');
var inputOne = false;
var inputTwo = false;
var inputThree = false;
var inputFour = false;
var inputFive = false;
firstName.addEventListener('input', validate);
lastName.addEventListener('input', validate);
email.addEventListener('input', validate);
subject.addEventListener('input', validate);
text.addEventListener('input', validate);

function setErrorFor(input, message) {
  var formControl = input.parentElement;
  var small = formControl.querySelector('small'); //add error message inside small tag

  small.innerText = message; //add error class 

  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  var formControl = input.parentElement; //add error class 

  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^[a-zA-Z0-9\.!#$%&'*+/=?^_`{|}~-]{2,64}@[a-zA-Z0-9-]+\.[a-zA-Z]{2,8}(\.[a-zA-Z]{2,8})?$/.test(email);
}

function validate(e) {
  var target = e.target; //get the values from the inputs

  var firstNameValue = firstName.value.trim();
  var lastNameValue = lastName.value.trim();
  var emailValue = email.value.trim();
  var subjectValue = subject.value.trim();
  var textValue = text.value.trim();

  if (target.name == "firstname") {
    if (firstNameValue === "") {
      //show error 
      //add error class
      setErrorFor(firstName, 'First Name cannot be blank');
    } else if (firstNameValue.length < 4) {
      setErrorFor(firstName, 'First Name must be more than 4 characters');
    } else {
      //add success class
      setSuccessFor(firstName);
      inputOne = true;
    }
  }

  if (target.name == "lastname") {
    if (lastNameValue === "") {
      //show error 
      //add error class
      setErrorFor(lastName, 'Last Name cannot be blank');
    } else if (lastNameValue.length < 4) {
      setErrorFor(lastName, 'Last Name must be more than 4 characters');
    } else {
      //add success class
      setSuccessFor(lastName);
      inputTwo = true;
    }
  }

  if (target.name == "email") {
    if (emailValue === "") {
      //show error 
      //add error class
      setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Email is not valid');
    } else {
      //add success class
      setSuccessFor(email);
      inputThree = true;
    }
  }

  if (target.name == "subject") {
    if (subjectValue === "") {
      //show error 
      //add error class
      setErrorFor(subject, 'Subject cannot be blank');
    } else {
      //add success class
      setSuccessFor(subject);
      inputFour = true;
    }
  }

  if (target.name == "message") {
    if (textValue === "") {
      //show error 
      //add error class
      setErrorFor(text, 'Message cannot be blank');
    } else {
      //add success class
      setSuccessFor(text);
      inputFive = true;
    }
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (inputOne == true && inputTwo == true && inputThree == true && inputFour == true && inputFive == true) {
    popup.classList.add('congrats');
    setTimeout(function () {
      popup.classList.remove('congrats');
    }, 3000);
  }

  if (inputOne == false) {
    setErrorFor(firstName, 'First Name cannot be blank');
  }

  if (inputTwo == false) {
    setErrorFor(lastName, 'Last Name cannot be blank');
  }

  if (inputThree == false) {
    setErrorFor(email, 'Email cannot be blank');
  }

  if (inputFour == false) {
    setErrorFor(subject, 'Subject cannot be blank');
  }

  if (inputFive == false) {
    setErrorFor(text, 'Message cannot be blank');
  }
});