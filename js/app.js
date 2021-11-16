//=======================================================================//
//=======================================================================//
//===== TYPEWRITER EFFECT ON HERO BANNER ================================//
//=======================================================================//
//=======================================================================//

//array to hold the text to be typed
// let text = ["human..." , "legend..." , "web developer!"];

// let a = 0;
// let b = 1;
// let reverse = false;
// let interval = setInterval(type, 150);

// function type() {
//     let nowText = text[a];
//     document.getElementById("typewriter").innerText = nowText.substring(0 , b);
//     //reverse direction (delete) if end of string reached
//     if (b == nowText.length + 5) { //+5 makes it stall for a moment before typing
//         reverse = true;
//     }
//     b += reverse ? -2 : 1;
//     //reset b and go forward again
//     if (b <= 0) {
//         b = 1;
//         reverse = false;
//         a++;
//     }
//     //reached end of list then start over 
//     if (a == text.length) { setTimeout(() => {
//         a = 0;
//     }, 5000);
        
//     } 
// };

//=======================================================================//
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

const fadeIn = document.querySelectorAll('.fade-in'); //faders in tutorial
const slideIn = document.querySelectorAll('.slide-in'); //sliders in tutorial

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
const classCheck = document.querySelector('.form-control') ;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //show success message
    if(classCheck.classList.contains('success')) {
        popup.classList.add('congrats');
    }
});

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
function isEmail(email) {
    return /^[a-zA-Z0-9\.!#$%&'*+/=?^_`{|}~-]{2,64}@[a-zA-Z0-9-]+\.[a-zA-Z]{2,8}(\.[a-zA-Z]{2,8})?$/.test(email);
}

function validate(e) {
    console.log(e.target.name);
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
        } else if(firstNameValue.length < 4) {
            setErrorFor(firstName, 'First Name must be more than 4 characters');
        } else {
            //add success class
            setSuccessFor(firstName);
        }
    }

    if(target.name == "lastname" ) {
        if(lastNameValue === "") {
            //show error 
            //add error class
            setErrorFor(lastName, 'Last Name cannot be blank');
        } else if(lastNameValue.length < 4) {
            setErrorFor(lastName, 'Last Name must be more than 4 characters');
        } else {
            //add success class
            setSuccessFor(lastName);
        }
    }

    if(target.name == "email" ) {
        if(emailValue === "") {
            //show error 
            //add error class
            setErrorFor(email, 'Email cannot be blank');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Email is not valid');
        } else {
            //add success class
            setSuccessFor(email);
        }
    }

    if(target.name == "subject" ) {
        if(subjectValue === "") {
            //show error 
            //add error class
            setErrorFor(subject, 'Subject cannot be blank');
        } else {
            //add success class
            setSuccessFor(subject);
        }
    }

    if(target.name == "message" ) {
        if(textValue === "") {
            //show error 
            //add error class
            setErrorFor(text, 'Message cannot be blank');
        } else {
            //add success class
            setSuccessFor(text);
        }
    }
}
    

// if(setSuccessFor(firstName) && setSuccessFor(lastName) && setSuccessFor(email) && setSuccessFor(subject) && setSuccessFor(text)) {
//     popup.classList.add('congrats');
// }














