// Q26 Table of Any Given Number - - - - - - - - - - - - - - - - - - - - - - - 

function getNumber(){
    let number = prompt('Enter Number for table :');
    const table = tableMake(number)
    alert(table)
    return table
}
getNumber();

function tableMake(number){
    let table = [];
    for(let i = 1; i <= 10; i++){
        table.push(number * i);
        console.log(number * i);
    }
    return table
}