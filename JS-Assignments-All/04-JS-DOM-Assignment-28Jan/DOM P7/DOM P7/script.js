
// Script for Task - 7

// removed duplicate courses Here
let allElements = document.querySelectorAll(".main__languages>a");
for(let element of allElements){
    if(element.innerText.includes("2.0")){element.style.display = "none";}
}


// 
(function(){
    document.querySelector(".main__form-input").value = "FSJS2.0";
    if(document.querySelector(".main__form-input").value.length > 0){
        document.querySelector(".main__form-btn").disabled = false;
    }
    document.querySelector(".main__form-btn").addEventListener("click", function(){
        document.querySelector(".main__form-input").value = "";
    })
})();
