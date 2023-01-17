// Q18 Number of Days in a month with leap year  - - - - - - - - - - - - - - - 

function getValue(){
    let inputAll = prompt('Enter Month And Year in Digits(eg- 1, 2023 or 2, 2050) : ')

    let dateArray = inputAll.split(',');
    let month = dateArray[0].trim();
    let year = dateArray[1].trim();
    
    alert(monthDays(Number(month), Number(year)));
}
getValue();

function monthDays(month, year){

    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ){ // 1700 
        if(month === 2){
            return `29 days in ${month} month of ${year}`
        }
    }
    if(month === 2 ){
        return `28 days in ${month} month of ${year}`
    }
    if(month === 4 || month === 6 || month === 9 || month === 11 ){
        return `30 days in ${month} month of ${year}`
    }
    return `31 days in ${month} month of ${year}`
}