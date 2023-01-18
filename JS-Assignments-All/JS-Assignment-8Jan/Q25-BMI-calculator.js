// Q25 BMI calculator Here - - - - - - - - - - - - - - - - - - - - - - - 

function getValues(){
    let weight = prompt('Enter Your Weight in KG :')
    let height = prompt('Enter Your height in Meter (eg : 1.57m = 157cm) :')
    bmiCalculate(weight, height)
}
getValues();

function bmiCalculate(weight, height){
    let bmi = weight/(height * height);
    if(bmi < 18.5){
        alert('Underweight')
        console.log('Underweight');
    }else if(bmi < 24.9){
        alert('Normal weight')
        console.log('Normal weight')
    }else if(bmi < 29.9){
        alert('Overweight')
        console.log('Overweight')
    }else {
        alert('Obese')
        console.log('Obese')
    }
}
