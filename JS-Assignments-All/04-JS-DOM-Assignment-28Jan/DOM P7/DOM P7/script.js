
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


// submit and refresh
document.querySelector(".main__form-btn").disabled = false;
document.querySelector(".main__form-input").value = "iNeuron";

document.querySelector("form").addEventListener("submit", (event) => {
        let allElements = document.querySelectorAll(".main__languages>a");
        for(let element of allElements){
            if(element.innerText.includes("2.0")){element.style.display = "inline"}
        }
        
        document.querySelector(".main__form-input").value = "";
        // event.preventDefault();
    })

