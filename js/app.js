//array to hold the text to be typed
let text = ["human..." , "legend..." , "web developer!"];

let a = 0;
let b = 1;
let reverse = false;
let interval = setInterval(type, 150);

function type() {
    let nowText = text[a];
    document.getElementById("typewriter").innerText = nowText.substr(0 , b);
    //reverse direction (delete) if end of string reached
    if (b == nowText.length + 5) { //+5 makes it stall for a moment before typing
        reverse = true;
    }
    b += reverse ? -2 : 1;
    //reset b and go forward again
    if (b <= 0) {
        b = 1;
        reverse = false;
        a++;
    }
    //reached end of list then start over 
    if (a == text.length) {
        a = 0;
    } 
};