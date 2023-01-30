// Script for firstAssignmentImage
// Task - 1 
let li_hireMe = document.querySelector("Header>nav>ul");
li_hireMe.lastElementChild.innerText = "Projects";

li_hireMe.innerHTML += `<li><a href="./contact/contact.html">Hire Me</a></li>`;
 

// Task - 2
document.querySelector(".search-field").firstElementChild.placeholder = "Search My Project";


// Task - 3
// All things same on output


// Task - 4
let hiteshImage = document.querySelector(".hero-right-section").firstElementChild;
hiteshImage.src = "./hiteshsirimage.jpg";


// Task - 5
let chatWithMe = document.querySelector(".hero-right-section-btns");
let supportMe = chatWithMe.lastElementChild.cloneNode(true);
supportMe.innerText = "Support Me";
chatWithMe.appendChild(supportMe);