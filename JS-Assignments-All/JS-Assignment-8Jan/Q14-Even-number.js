// Q14 Even-number - Here - - - - - - - - - - - - - - - - - 

function evenNumber(){
    const isEven = prompt("Enter Number to check Even");

    if (isEven % 2 == 0){
        alert("Number is Even")
    }else{
        alert("Number is not Even")
    }
}
evenNumber();