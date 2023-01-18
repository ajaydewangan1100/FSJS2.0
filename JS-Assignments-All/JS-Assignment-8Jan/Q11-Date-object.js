// Q11 Date() object Here - - - - - - - - - - - - - - - - - - - - - - - - - - 

const today = new Date()

console.log(today.getFullYear())
//  Output = 2023

console.log(today.getMonth());
//  Output = 0 - (because it is january)

console.log(today.getDate());
//  Output = 15

console.log(today.getDay());
//  Output = 0 - (because it is sunday)

console.log(today.getMinutes());
//  Output = 12

console.log(today.getHours());
//  Output = 42


// Finding out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Date.now());
//  Output = 42
