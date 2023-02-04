
// Q-8

// Task - 1st ---------------------------------------
// let hr = document.querySelector(".hr-line");
// let h2 = document.querySelector(".new-head");
// h2.innerText = "This is custom heading";
// let p = document.querySelector(".new-p");
// p.innerText = "This is custom Paragraph under custom heading, this is DOM project";

// let list = document.querySelector("aside");
// list.style.overflow = "scroll";
// list.appendChild(hr);
// list.appendChild(h2);
// list.appendChild(p);


// Task - 2nd ---------------------------------------
document.body.style.background = "none";


// Task - 3rd ---------------------------------------
let navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", function(){
document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse");
})