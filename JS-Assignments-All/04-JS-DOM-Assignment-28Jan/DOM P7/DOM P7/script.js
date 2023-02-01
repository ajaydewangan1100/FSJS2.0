
// Script for Task - 7

// removed duplicate courses Here
let useMe = "none";
function func1(useMe){
    // event.preventDefault();
    let allElements = document.querySelectorAll(".main__languages>a");
    for(let element of allElements){
        if(element.innerText.includes("2.0")){element.style.display = useMe}
    }
}
func1(useMe);


// 
document.querySelector(".main__form-input").value = "iNeuron";
document.querySelector(".main__form-btn").disabled = false;
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    // useMe = "inline";
    // func1(useMe);
    let allElements = document.querySelectorAll(".main__languages>a");
    for(let element of allElements){
        if(element.innerText.includes("2.0")){element.style.display = "inline"}
    }
})
