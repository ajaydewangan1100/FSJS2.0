// Q30 Simple Calculator Program - - - - - - - - - - - - - - - - - - - - - - - 

function evaluateMe(){
  let expression = String(prompt('Enter your Calculation values (eg- 45*3+5):'));
  expression = expression.replace(/\s/g,'');
  console.log(eval(expression));
  document.write(eval(expression));
}
evaluateMe();

// let expression = '45.7+3-2';
// expression = expression.replace(/\s/g,'');
// let numArray = [];
// let signArray = [];
// let prev = 0;
// for (let i = 0; i < expression.length; i++){
//   if(isNaN(expression[i]) && expression[i] != '.'){
//     numArray.push(parseFloat(expression.slice(prev, i)));
//     numArray.push(expression[i]);
//     prev = ++i;
//   }
//   if(i == expression.length - 1){
//     numArray.push(parseFloat(expression.slice(prev)));
//   }
// }
// console.log(numArray);
