// Q23 number given by the user is prime or not. - - - - - - - - - - - - 

function getValue(){
    let value = prompt('Enter number to check prime or not :')
    alert(primeChecker(value))
}
getValue()

function primeChecker(value){
    if(value == 1){
        alert('1 is always Prime')
    }else if(value < 1){
        alert('Enter Valid Number')
        getValue()
    }else {
        let flag = false;
        for (let i = 2; i <= Math.floor(value/2); i++){
            if(value % i == 0){
                return "Not Prime"
            }else {
                flag = true;
            }
        }
        if(flag == true){
            return "Prime Number"
        }
    }
}