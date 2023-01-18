// Q15 Student Grades - Here - - - - - - - - - - - - - - - - - 

let grade = prompt("Enter Your percentage, I give you your grade :")

if(grade > 100 || grade < 0){
    alert("Wrong Perccentage!")
}else if(grade >= 80){
    alert("Your grade is - A")
}else if(grade >= 70){
    alert("Your grade is - B")
}else if(grade >= 60){
    alert("Your grade is - C")
}else if(grade >= 50){
    alert("Your grade is - D")
}else if(grade >= 0){
    alert("Your grade is - E")
}