// Q-3 - toUpperCase - Here - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - 
let string1 = "Ineuron Team is very active!";
const stringUpper = string1.toUpperCase();
console.log(stringUpper);
// Output =  INEURON TEAM IS VERY ACTIVE!



// Q-4 - includes - Here  - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - 
console.log(string1.includes("very"));
// Output = true

console.log(string1.includes("much"));
// Output = false


// Q-5 - split - Here  - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - 
const split1 = string1.split("is ");
console.log(split1);
// Output = [ "Ineuron Team ", "very active!" ]

const split2 = string1.split(" ");
console.log(split2);
// Output = [ "Ineuron", "Team", "is", "very", "active!" ]