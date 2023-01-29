
(function (){
	
	// Getting alements
	let typingValues = document.querySelector('.typing_Values');
	let allButtons = document.getElementsByClassName('all_Btn');
	let paraShow = document.querySelector('.showing_Values');

	window.addEventListener('DOMContentLoaded', () => typingValues.value = "");
	let allExpression = [];
	let equalToken = false;
	let bracesToken = 0;
	let percentToken = true;
	let 

	// Loop for all buttons Eventlistener
	for(let i = 0; i < allButtons.length; i++){
		allButtons[i].addEventListener('click', () => changeData(i))
	}

	// Function for changing data 
	function changeData(useme) {
		if(percentToken == false){
			typingValues.value = "";
			percentToken = true;
		}

		if (allExpression.length == 0 || equalToken == true){typingValues.value = "";}
		equalToken = false;
		
		// Condition for All Clear
		if (allButtons[useme].value == "erase"){
			percentToken = true;
			typingValues.value = "";
			paraShow.innerHTML = "";
			allExpression = [] ;
			return
		}

		// Condition for number input 
		else if(String(allButtons[useme].value) === '.' || String(parseFloat(allButtons[useme].value)) !== "NaN"){
			numberInput(useme);
		}

		// Conidtion for braces
		else if(allButtons[useme].value === "(" || allButtons[useme].value === ")") {
			bracesInput(useme);
		}

		// Condition for Percentage ---- %
		else if(allButtons[useme].value === "%" && percentToken == true) {
			percentageInput(useme);
		}

		// Condition for Expressions -- function for expression call here
		else if( 
				allButtons[useme].value == "/" || 
				allButtons[useme].value == "*" || 
				allButtons[useme].value == "-" || 
				allButtons[useme].value == "+" )
			{
				calcSignFunc(useme) 
			}

		// Condition for submission ----- "=" 
		else if (allButtons[useme].value == "=") {
			for(let i = 0; i < bracesToken; i++){
				typingValues.value += ")";
			}
			
			let lll = eval(typingValues.value);
			paraShow.innerHTML = typingValues.value;
			alert(lll);
			typingValues.value = eval(typingValues.value);
			equalToken = true;
			bracesToken = 0;
			return
		}
	}

	// function for number - input
	function numberInput(useme) {
		if(String(typingValues.value[typingValues.value.length-1]) === ")"){
			typingValues.value += '*';
			allExpression += '*';
		}
		if(String(allButtons[useme].value) === ')'){
			typingValues.value += '*';
			allExpression += '*';
		}
		if(String(allButtons[useme].value) === '.'){
			typingValues.value += allButtons[useme].value;
			allExpression += allButtons[useme].value;
		}else{
			typingValues.value += parseFloat(allButtons[useme].value);
			allExpression += parseFloat(allButtons[useme].value);
		}
	}

	// Function for Braces input
	function bracesInput(useme) {
		
		if(String(allButtons[useme].value) === '('){
			let checkMe = typingValues.value[typingValues.value.length-1];

			if(typingValues.value.length !== 0) {
				if(checkMe === '('){
					typingValues.value += '(';
					allExpression += '(';
					bracesToken++;
				}
				else if(typeof(Number(checkMe)) !== "NaN" || String(checkMe) === ')'){
					typingValues.value += '*(';
					allExpression += '*(';
					bracesToken++;
				}
				
			}
			if(checkMe === '+' || checkMe === '-' || checkMe === '*' || checkMe === '/'){
				bracesToken += 1;
				typingValues.value = typingValues.value.slice(0, typingValues.value.length - 1) + allButtons[useme].value;
				allExpression = typingValues.value.slice(0, typingValues.value.length - 1) + allButtons[useme].value;
			}
		}else if (String(allButtons[useme].value) === ')' && bracesToken > 0){
			if(typingValues.value.length !== 0) {
				if(typingValues.value[typingValues.value.length-1] !== '('){
					bracesToken -= 1;
					typingValues.value += allButtons[useme].value;
					allExpression += allButtons[useme].value;
				}
			}
		}
		if(typingValues.value.length == 0){
			typingValues.value += '(';
			allExpression += '(';
			bracesToken++;
		}
	}

	// Funciton for Percentage
	function percentageInput(useme){
		percentToken = false;
		let checkMe = typingValues.value[typingValues.value.length-1];
		let percent = typingValues.value.length-1;
		if(Number(typingValues.value[percent]) >= 0 && Number(typingValues.value[percent]) <= 9){ 
			
			while (Number(typingValues.value[percent]) >= 0 && Number(typingValues.value[percent]) <= 9) {
				percent--;
			} ;
			percent++;

			const per = 1 * Number(typingValues.value.slice(percent)) / 100;
			typingValues.value = typingValues.value.slice(0, percent) + per;
		}
	}

	// Function For Expression -- +, -, x, /
	function calcSignFunc(useme){

		if (typingValues.value.length == 0){
			console.log("Return because no input")
			return
		}
		
		let checkMe = typingValues.value[typingValues.value.length-1];

		if (checkMe === ".") { 
			typingValues.value = typingValues.value.slice(0, typingValues.value.length - 1);
		}

		if(checkMe === "/" || checkMe === "*" || checkMe === "-" || checkMe === "+") { 
			typingValues.value = typingValues.value.slice(0, typingValues.value.length - 1) + allButtons[useme].value; 
			allExpression += allButtons[useme].value;
			return
		 }

		if (checkMe !== "/" || checkMe !== "*" || checkMe !== "-" || checkMe !== "+") {
			typingValues.value += allButtons[useme].value; 
			allExpression += allButtons[useme].value; 
			return
		}
	}
})();


