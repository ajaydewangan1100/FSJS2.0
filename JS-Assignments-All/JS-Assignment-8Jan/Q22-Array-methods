// Q22 Array Methods - Here - - - - - - - - - - - - - - - - - 

// All things are under function

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()

// Sort the array and find the min and max age
function minMax(){ 
    console.log(ages[0])
    // Output = 19
    console.log(ages[ages.length-1])
    // Output = 26
}
minMax();


// Median age Here
function medianAge(){
    if(ages.lenght % 2 == 0){
        console.log((ages[ages.length % 2] + ages[(ages.length % 2) - 1])/2)
    }else {
        console.log((ages[Math.floor(ages.length % 2)])/2);
    }
}
medianAge();


// Average Age Here
let totalAge = 0;
function averageAge(){
    for(let x of ages){
        totalAge += x;
    }
    totalAge = totalAge/ages.length;
    console.log(totalAge);
}
averageAge();


// Range of ages
function ageRange(){
    console.log(ages[ages.length-1] - ages[0]);
}
ageRange();


// Compare the value of (min - average) and (max - average), use abs() method
function compareValue(){
    console.log(Math.abs((ages[0] - totalAge) - (ages[ages.length - 1] - totalAge)))
    alert(Math.abs((ages[0] - totalAge) - (ages[ages.length - 1] - totalAge)))
}
compareValue();