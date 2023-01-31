
// Dom Project -- 28Jan - 4th 

// The Archer Name Change
document.querySelector(".clash-card__level--archer").nextElementSibling.innerHTML = "The Archer";

// The Goblin Name Change
document.querySelector(".clash-card__level--goblin").nextElementSibling.innerHTML = "The Goblin";

// Details Text color -- #fff
document.querySelectorAll(".clash-card__unit-stats").forEach((all) => {all.style.color = "#fff"});
document.querySelectorAll(".no-border").forEach((all) => {all.style.color = "#fff"});

// Details Background Color Given here
document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#eb9a3d";
document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#ed5486";
document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#f58f1f";
document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#80ba35";
document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#50acfd";