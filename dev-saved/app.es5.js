"use strict";

//=======================================================================//
//=======================================================================//
//===== TYPEWRITER EFFECT ON HERO BANNER ================================//
//=======================================================================//
//=======================================================================//
var toType = "I'm a web developer!";
var speed = 100;
var i = 0;
var typingElement = document.getElementById('typewriter');

function typeWriter() {
  if (i < toType.length) {
    typingElement.innerHTML += toType.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter(); //=======================================================================//
//=======================================================================//
//===== BRING CARDS IN FROM THE SIDE AS THE PAGE IS SCROLLED ============//
//=======================================================================//
//=======================================================================//

var fadeIn = document.querySelectorAll('.fade-in');
var slideIn = document.querySelectorAll('.slide-in');
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
var formContOne = document.querySelector('#fname');
var formContTwo = document.querySelector('#lname');
var formContThree = document.querySelector('#email');
var formContFour = document.querySelector('#subject');
var formContFive = document.querySelector('#text');
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
      inputOne = false;
    } else if (firstNameValue.length < 2) {
      setErrorFor(firstName, 'First Name must be at least 2 characters');
      inputOne = false;
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
      inputTwo = false;
    } else if (lastNameValue.length < 2) {
      setErrorFor(lastName, 'Last Name must be at least 2 characters');
      inputTwo = false;
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
      inputThree = false;
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Email is not valid');
      inputThree = false;
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
      inputFour = false;
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
      inputFive = false;
    } else {
      //add success class
      setSuccessFor(text);
      inputFive = true;
    }
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (inputOne === true && inputTwo === true && inputThree === true && inputFour === true && inputFive === true) {
    popup.classList.add('congrats');
    form.reset();
    setTimeout(function () {
      popup.classList.remove('congrats');
    }, 3000);
    setTimeout(function () {
      inputOne = false;
      inputTwo = false;
      inputThree = false;
      inputFour = false;
      inputFive = false; //Clear input green borders

      formContOne.parentElement.classList.remove('success');
      formContTwo.parentElement.classList.remove('success');
      formContThree.parentElement.classList.remove('success');
      formContFour.parentElement.classList.remove('success');
      formContFive.parentElement.classList.remove('success');
    }, 3000);
  }

  if (inputOne === false) {
    setErrorFor(firstName, 'First Name cannot be blank');
    console.log("First name is ".concat(inputOne));
  }

  if (inputTwo === false) {
    setErrorFor(lastName, 'Last Name cannot be blank');
    console.log("Last name is ".concat(inputTwo));
  }

  if (inputThree === false) {
    setErrorFor(email, 'Email cannot be blank');
    console.log("Email name is ".concat(inputThree));
  }

  if (inputFour === false) {
    setErrorFor(subject, 'Subject cannot be blank');
    console.log("Subject name is ".concat(inputFour));
  }

  if (inputFive === false) {
    setErrorFor(text, 'Message cannot be blank');
    console.log("First name is ".concat(inputFive));
  }
});