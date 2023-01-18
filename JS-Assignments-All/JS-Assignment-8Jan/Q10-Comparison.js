// Q10 Comparisons Here - - - - - - - - - - - - - - - - - - - - - - - - - - 

function comparisonExp(){
    4 > 3
    // Output = true

    4 >= 3
    // Output = true

    4 < 3
    // Output = false

    4 <= 3
    // Output = false

    4 == 4
    // Output = true

    4 === 4
    // Output = true

    4 != 4
    // Output = false

    4 !== 4
    // Output = false

    4 != '4'
    // Output = false

    4 == '4'
    // Output = true

    4 === '4'
    // Output = false


    // Find the length of python and jargon and make a falsy comparison statement.
    console.log(`
    lenght of python -- ${"python".length} \n 
    length of jargon -- ${"jargon".length}
    `);
    // Output = 
    // lenght of python -- 6 
    // length of jargon -- 6

    console.log("python" == "jargon");
    // Output = false
}
comparisonExp();