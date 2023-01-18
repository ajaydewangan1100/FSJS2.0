// Q30 Simple Calculator Program - - - - - - - - - - - - - - - - - - - - - - - 


let expression = '45+3-2' // String(prompt('Enter your Calculation values (eg- 45x3+5):'));

function evaluateExpression(expression) {
  return eval(expression);
}
console.log(evaluateExpression(expression));
