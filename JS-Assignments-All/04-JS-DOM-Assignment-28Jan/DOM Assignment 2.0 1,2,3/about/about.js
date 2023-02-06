
// Task - 2 - here
// 1st 
let all_h3 = document.querySelectorAll("h3");
for(let h3 of all_h3){
  h3.style.backgroundColor = "#d9d9f7";
}


// 2nd 
let parent = document.querySelector(".accordian-wrapper");
let h3 = document.createElement("h3");
h3.style.backgroundColor = "#d9d9f7";
h3.innerText = "Skill";
let p = document.createElement("p");
p.innerText = "I posses very good command over the Full Stack Development Technologies like MERN which can be seen in my work over the github.";
let div = document.createElement("div");
div.appendChild(h3);
div.appendChild(p);
div.classList.add("accordian")
parent.appendChild(div);


let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  }); 
});