
// Q-9

// Task - 1
document.querySelector("h1").style.color = "#dc143c";

// Task - 2
let cart = document.querySelector(".add-to-cart");
cart.addEventListener("mouseover",() => {  
  cart.style.backgroundColor = "#da123a";
})
cart.addEventListener("mouseout",() => {  
  cart.style.backgroundColor = "hsl(158, 36%, 37%)";
})