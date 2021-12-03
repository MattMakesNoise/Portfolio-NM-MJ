//=======================================================================//
//=======================================================================//
//===== TYPEWRITER EFFECT ON HERO BANNER ================================//
//=======================================================================//
//=======================================================================//
let toType = "I'm a web developer!";
let speed = 100;
let i = 0;
let typingElement = document.getElementById('typewriter');

function typeWriter() {
    if (i < toType.length) {
      typingElement.innerHTML += toType.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter();
//=======================================================================//
//=======================================================================//
//===== BRING CARDS IN FROM THE SIDE AS THE PAGE IS SCROLLED ============//
//=======================================================================//
//=======================================================================//
const fadeIn = document.querySelectorAll('.fade-in');
const slideIn = document.querySelectorAll('.slide-in');

const appearOnScrollOptions = {
    root: null, //it is the viewport
    threshold: 0,
    rootMargin: "-100px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOnScrollOptions);

fadeIn.forEach(fadeIn => {
    appearOnScroll.observe(fadeIn);
});

slideIn.forEach(slideIn => {
    appearOnScroll.observe(slideIn);
});
//=======================================================================//
//=======================================================================//
//===== CONTACT FORM VALIDATION =========================================//
//=======================================================================//
//=======================================================================//
const form = document.getElementById('form');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const text = document.getElementById('text');
const popup = document.querySelector('.success-popup');

const formContOne = document.querySelector('#fname');
const formContTwo = document.querySelector('#lname');
const formContThree = document.querySelector('#email');
const formContFour = document.querySelector('#subject');
const formContFive = document.querySelector('#text');

let inputOne = false;
let inputTwo = false;
let inputThree = false;
let inputFour = false;
let inputFive = false;

firstName.addEventListener('input', validate);
lastName.addEventListener('input', validate);
email.addEventListener('input', validate);
subject.addEventListener('input', validate);
text.addEventListener('input', validate);

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    //add error message inside small tag
    small.innerText = message;
    //add error class 
    formControl.className = 'form-control error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    //add error class 
    formControl.className = 'form-control success';
}
function isFirstName(fName) {
    return /^[a-zA-Z]{2,16}$/.test(fName);
}
function isLastName(lName) {
    return /^[a-zA-Z]{2,16}$/.test(lName);
}
function isEmail(email) {
    return /^[a-zA-Z0-9\.!#$%&'*+/=?^_`{|}~-]{3,32}@[a-zA-Z0-9-]{3,16}\.[a-zA-Z]{2,8}(\.[a-zA-Z]{2,8})?$/.test(email);
}
function isSubject(subj) {
    return /^[a-zA-Z0-9_ ]{2,64}$/.test(subj);
}

function validate(e) {
    let target = e.target;
    //get the values from the inputs
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let subjectValue = subject.value.trim();
    let textValue = text.value.trim();
    
    if(target.name == "firstname" ) {
        if(firstNameValue === "") {
            //show error 
            //add error class
            setErrorFor(firstName, 'First Name cannot be blank');
            inputOne = false;
        } else if(!isFirstName(firstNameValue)) {
            setErrorFor(firstName, 'First Name must be between 2 and 16 characters with only letters');
            inputOne = false;
        } else {
            //add success class
            setSuccessFor(firstName);
            inputOne = true;
        }
    }

    if(target.name == "lastname" ) {
        if(lastNameValue === "") {
            //show error 
            //add error class
            setErrorFor(lastName, 'Last Name cannot be blank');
            inputTwo = false;
        } else if(!isLastName(lastNameValue)) {
            setErrorFor(lastName, 'Last Name must be between 2 and 16 characters with only letters');
            inputTwo = false;
        } else {
            //add success class
            setSuccessFor(lastName);
            inputTwo = true;
        }
    }

    if(target.name == "email" ) {
        if(emailValue === "") {
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

    if(target.name == "subject" ) {
        if(subjectValue === "") {
            //show error 
            //add error class
            setErrorFor(subject, 'Subject cannot be blank');
            inputFour = false;
        } else if(!isSubject(subjectValue)) {
            setErrorFor(subject, 'Subject can only be between 2 and 64 characters and contain letters and numbers');
            inputFour = false;
        } else {
            //add success class
            setSuccessFor(subject);
            inputFour = true;
        }
    }

    if(target.name == "message" ) {
        if(textValue === "") {
            //show error 
            //add error class
            setErrorFor(text, 'Message cannot be blank');
            inputFive = false;
        } else if(textValue.length <= 2 || textValue.length > 500) {
            setErrorFor(text, "Message must be between 2 and 500 characters");
            inputFive = false;
        } else {
            //add success class
            setSuccessFor(text);
            inputFive = true;
        }
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (inputOne === true && inputTwo === true && inputThree === true && inputFour === true && inputFive === true) {
        popup.classList.add('congrats');
        form.reset();
        setTimeout(() => {
            inputOne = false;
            inputTwo = false;
            inputThree = false;
            inputFour = false;
            inputFive = false;
            //Clear input green borders
            formContOne.parentElement.classList.remove('success');
            formContTwo.parentElement.classList.remove('success');
            formContThree.parentElement.classList.remove('success');
            formContFour.parentElement.classList.remove('success');
            formContFive.parentElement.classList.remove('success');
        }, 100);
        setTimeout(() => {
            popup.classList.remove('congrats');
        }, 5000);
    } 
    if(inputOne === false ) {
        setErrorFor(firstName, 'First Name cannot be blank');
        console.log(`First name is ${inputOne}`);
    } 
    if(inputTwo === false) {
        setErrorFor(lastName, 'Last Name cannot be blank');
        console.log(`Last name is ${inputTwo}`);
    } 
    if(inputThree === false) {
        setErrorFor(email, 'Email cannot be blank');
        console.log(`Email name is ${inputThree}`);
    } 
    if(inputFour === false) {
        setErrorFor(subject, 'Subject cannot be blank');
        console.log(`Subject name is ${inputFour}`);
    } 
    if(inputFive === false) {
        setErrorFor(text, 'Message cannot be blank');
        console.log(`First name is ${inputFive}`);
    }
});