
// Dom Project -- 28Jan - 5th 

// Button added here -- Pro Subscription -- through createElement
const sub = document.createElement("a");
sub.classList.add("btn");
sub.innerText = "Pro Subscription";
sub.href = "index.html";
document.querySelector(".btn").parentElement.appendChild(sub);


// Card Added here -- through cloneNode method
let newCard = document.querySelector(".card").cloneNode(true);
// alert(newCard.firstElementChild.firstElementChild);
document.querySelector(".recipe-gallery").appendChild(newCard);
