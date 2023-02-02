
// Script for Task - 7

// removed duplicate courses Here
let useMe = "none";
function func1(event){
    // event.preventDefault();
    let allElements = document.querySelectorAll(".main__languages>a");
    for(let element of allElements){
        if(element.innerText.includes("2.0")){element.style.display = "none"}
    }
}
func1();


// 
document.querySelector(".main__form-input").value = "iNeuron";
document.querySelector(".main__form-btn").disabled = false;
document.querySelector("form").addEventListener("submit", (event) => {
    func1();
    // event.preventDefault();
    
})
