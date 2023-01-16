// Q28 Pattern Programs - - - - - - - - - - - - - - - - - - - - - - - 


let patternValue = prompt('Enter Number you want to create First pattern :');

// first Pattern
firstPattern(patternValue);
function firstPattern(patternValue){
    let patt = [];
    for(let i = 0; i < patternValue; i++){
        patt = []
        for(let j = 0; j <= i; j++){
            patt.push('*')
        }
        console.log(...patt);
    }
    return
}


// Second Pattern
patternValue = prompt('Enter Number you want to create Second pattern :');

secondPattern(patternValue);
function secondPattern(patternValue){
    let patt = [];
    for(let i = 0; i < patternValue; i++){
        patt = []
        for(let j = 0; j < patternValue; j++){
            patt.push('*')
        }
        console.log(...patt);
    }
    return
}


// Third Pattern
patternValue = prompt('Enter Number you want to create Third pattern :');

thirdPattern(patternValue);
function thirdPattern(patternValue){
    let patt = [];
    for(let i = 0; i < patternValue; i++ ){
        patt = []
        for(let j = 0; j < patternValue; j++){
            patt.push('*')
        }
        console.log(...patt);
    }
    return
}