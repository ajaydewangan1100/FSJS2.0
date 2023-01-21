// Q24 two array "even" and "odd" for even and odd number. - - - - - - - - - - 

let evenArray = []
let oddArray = []

function fillArrays(){
    for (let i = 0; i <= 100; i++){
        if(i % 2 == 0){
            evenArray.push(i)
        }else {
            oddArray.push(i)
        }
    }
}
fillArrays();

console.log(`Even Array is :${evenArray} \nand Odd Array is : ${oddArray}`)
alert(`Even Array is :${evenArray} and Odd Array is : ${oddArray}`)