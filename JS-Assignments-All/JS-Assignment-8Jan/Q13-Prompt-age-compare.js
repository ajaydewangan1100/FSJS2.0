// Q13 Prompt - Here - - - - - - - - - - - - - - - - - 

function promptAge(){
  const age = prompt("Enter Your Age :");

  if (age < 18) {
    alert(`Wait for the ${18-age} of years, needs to turn 18`);
  }else{
      alert("You are old enough to drive!")
  }
}
promptAge();