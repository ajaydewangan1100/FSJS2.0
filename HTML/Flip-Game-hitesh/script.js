
(function(){
// alert("Find mathes.\n their are 8 matches\n you win when you find all matches.");
// calling increse decrease
let Text_h1 = document.querySelector("h1");
text_f(Text_h1, 300);

let text_btn = document.querySelector("button");
text_f(text_btn, 300);

// Function letter increase decrease
function text_f(ele, time){
    let text_value = ele.innerText;
    let i = text_value.length ;
    let checker = -1;
    setInterval(() => {
        ele.innerText = text_value.slice(0, i);
        if (i <= 1) {
            checker = 1;
        }else if(i > text_value.length) {
            checker = -1;
        }
        i += checker;
    }, time);
};

// Background Gradient Changer
function bg_changer() {
    const colorCode = "0123456789ABCDEF";
    const colorCode2 = "0123456789"
    let color1 = "";
    let color2 = "";
    for (let i = 0; i < 6; i++) {
        color2 += colorCode[Math.floor(Math.random() * 16)]; 
        color1 += colorCode2[Math.floor(Math.random() * 10)]; 
    }
    document.body.style.backgroundImage = `linear-gradient(#${color1}, #${color2})`;
    // document.body.style.backgroundColor = "#999";
}


let allImages = document.querySelectorAll(".all_img");

// Variable Declaration Here
let bool = true;
let previous;
let current;
let var1 = 0;
let count = 0;


for (let i = 0; i < allImages.length; i++) {
    const element = allImages[i];
    const img = document.createElement("img");
    img.classList.add("under_img");
    img.src = "./images/icon2.png";
    element.appendChild(img);
}

// Counting Here
function counting(){
    count++;
    document.querySelector(".counter").innerText = count;
}

// Listener of button
document.querySelector(".btn").addEventListener("mousedown", shuffler);
// function for button
function shuffler(){
    for (let x = 0; x < allImages.length; x++) {
        const element = allImages[x];
        element.firstElementChild.style.display = "block";
    }
    shuffle();
    count = 0;
    document.querySelector(".counter").innerText = count;
}


// shuffle
function shuffle(){
    let arr16 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let i = 0;
    while (arr16.length > 0) {
        let ran_Num = Math.floor(Math.random() * 16);
        if(arr16.includes(ran_Num)){
            allImages[i].style.backgroundImage = `url(./images/${Math.floor((ran_Num + 2)/2)}.png)`;
            arr16.splice(arr16.indexOf(ran_Num), 1);
            i++;
        }
    }
    bg_changer();
    // count = 0;
}
shuffle();


// Adding Eventlistener for all
for (let xy = 0; xy < allImages.length; xy++) {
    const element = allImages[xy];
    element.firstElementChild.addEventListener("click", () => {
        flip(xy);
        if(bool){
            var1++;
            bool = false;
            previous = element;
        }else {
            var1++
            bool = true;
            current = element;
            success(xy);
        }
        counting();
    });
}


// Flip function here
function flip (img_selected){
    if (var1 >= 2) {
        show_icon();
    }
    allImages[img_selected].firstElementChild.style.display = "none";
}

// Success function
function success(img_selected){
    const first = window.getComputedStyle(previous).backgroundImage;
    const second = window.getComputedStyle(current).backgroundImage;
    if(first !== second){
        failure(img_selected);
    }else{
        var1 = 0;
    }
}

// failure function
function failure (img_selected){
    setTimeout(() => {
        if(var1 >= 2){
            show_icon();
        }
    }, 4000);
}

// function for showing same icon
function show_icon(){
    previous.firstElementChild.style.display = "block";
    current.firstElementChild.style.display = "block";
    var1 = 0;
};

})();

