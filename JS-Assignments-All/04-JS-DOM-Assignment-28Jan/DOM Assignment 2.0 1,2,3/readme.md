# Dom Assigment 28-Jan - Q- 1, 2, 3

## Task - 1 - Here
Output Task-1 - 1st
![Q-1- 1st](firstAssignmentImage/task1Output.png)

Code --
```
let li_hireMe = document.querySelector("Header>nav>ul");
li_hireMe.lastElementChild.innerText = "Projects";

li_hireMe.innerHTML += `<li><a href="./contact/contact.html">Hire Me</a></li>`;
document.querySelector("footer").lastElementChild.innerHTML = "";
```


Output Task-1 - 2nd
![Q-1- 2nd](firstAssignmentImage/task2Output.png)

Code --
```
document.querySelector(".search-field").firstElementChild.placeholder = "Search My Project";
```


Output Task-1 - 3rd
![Q-1- 3rd](firstAssignmentImage/task3Output.png)

code --
```
let employee = document.querySelector(".hero-left-section").lastElementChild.firstElementChild.nextElementSibling.nextElementSibling;
employee.innerText = "an employee"
let ineuron = document.querySelector(".hero-left-section").lastElementChild.lastElementChild;
ineuron.innerText = "iNeuron Itelligence Pvt Ltd";
```


Output Task-1 - 4th
![Q-1- 4th](firstAssignmentImage/task4Output.png)

Code --
```
let hiteshImage = document.querySelector(".hero-right-section").firstElementChild;
hiteshImage.src = "./hiteshsirimage.jpg";
```


Output Task-1 - 5th
![Q-1- 5th](firstAssignmentImage/task5Output.png)

Code --
```
let chatWithMe = document.querySelector(".hero-right-section-btns");
let supportMe = chatWithMe.lastElementChild.cloneNode(true);
supportMe.innerText = "Support Me";
chatWithMe.appendChild(supportMe);
```


## Task - 2 - Here
Output Task-2 - 1st
![Q-2- 1st](secondAssignmentImage/task1Output.png)

Code --
```

```

Output Task-2 - 2nd
![Q-2- 2nd](secondAssignmentImage/task2Output.png)

Code --
```
let parent = document.querySelector(".accordian-wrapper");
let h3 = document.createElement("h3");
h3.innerText = "Skill";
let p = document.createElement("p");
p.innerText = "I posses very good command over the Full Stack Development Technologies like MERN which can be seen in my work over the github.";
let div = document.createElement("div");
div.appendChild(h3);
div.appendChild(p);
div.classList.add("accordian")
parent.appendChild(div);
```


## Task - 3 - Here
Output Task-3
![Q-3- 1st](thirdAssignmentImage/task1Output.png)

Code --
```
document.querySelector(".enterName").value = "FSJS 2.0";
document.querySelector(".userName").value = "FSJS 2.0";

document.querySelector(".enterMail").value = "fsjs@ineuron.ai";
document.querySelector(".userEmail").value = "fsjs@ineuron.ai";

document.querySelector(".enterMessage").value = "Hello World";
document.querySelector(".userMessage").value = "Hello World";
```


## Task - 4 - Here
Output Task-4 
![Q-4- Task](../04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)

code --
```
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
```


## Task - 5 - Here
Output Task-5
![Q-5- Task](../05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)

code --
```
// Pro Subscription - btn added here -- through createElement
const sub = document.createElement("a");
sub.classList.add("btn");
sub.innerText = "Pro Subscription";
sub.href = "index.html";
document.querySelector(".btn").parentElement.appendChild(sub);

// Card Added here -- through cloneNode method
let newCard = document.querySelector(".card").cloneNode(true);
document.querySelector(".recipe-gallery").appendChild(newCard);
```


## Task - 6 - Here
Output Task-6 - 1st
![Q-6- Task-1](../06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)

code -- 
```
document.querySelector(".logo").src = "./assets/ineuron-logo.png";
```

Output Task-6 - 2nd
![Q-6- Task-2](../06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)

code -- 
```
document.querySelector(".app_price").firstElementChild.innerText = "$10";
```


## Task - 7 - Here
Output Task-7 - 1st
![Task-7 - 1st](../DOM%20P7/DOM%20P7/ass7.1-after.png)

code --
```
let allElements = document.querySelectorAll(".main__languages>a");
for(let element of allElements){
    if(element.innerText.includes("2.0")){element.style.display = "none";}
}
```


Output Task-7 - 2nd
![Task-7 - 2nd](../DOM%20P7/DOM%20P7/ass7.2-after.png)

code --
```
document.querySelector(".main__form-btn").disabled = false;
document.querySelector(".main__form-input").disabled = false;
```


## Task - 8 - Here
Output Task-8 - 1st
![Task-8 - 1st](../DOM%20P8/DOM%20P8/ass8.1-after.png)

code --
```
let hr = document.querySelector(".hr-line");
let h2 = document.querySelector(".new-head");
h2.innerText = "This is custom heading";
let p = document.querySelector(".new-p");
p.innerText = "This is custom Paragraph under custom heading, this is DOM project";

let list = document.querySelector("aside");
list.style.overflow = "scroll";
list.appendChild(hr);
list.appendChild(h2);
list.appendChild(p);
```

Output Task-8 - 2nd
![Task-8 - 2nd](../DOM%20P8/DOM%20P8/ass8.2-after.png)

code --
```
document.body.style.background = "none";
```


utput Task-8 - 3rd
![Task-8 - 3rd](../DOM%20P8/DOM%20P8/ass8.3-after.png)

code --
```
let navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", function(){
document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse");
})
```


## Task - 9 - Here
Output Task-9 - 1st
![Task-9 - 1st](../DOM%20P9/DOM%20P9/ass9.1-after.png)

code --
```
document.querySelector("h1").style.color = "#dc143c";
```

Output Task-9 - 1st
![Task-9 - 2nd](../DOM%20P9/DOM%20P9/ass9.2-after.png)

code --
```
let cart = document.querySelector(".add-to-cart");
cart.addEventListener("mouseover",() => {  
cart.style.backgroundColor = "#da123a";
})
cart.addEventListener("mouseout",() => {  
cart.style.backgroundColor = "hsl(158, 36%, 37%)";
})
```