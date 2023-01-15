// Q16 Season checking - Here - - - - - - - - - - - - - - - - - 

const months = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"]

let month = prompt("Enter month for finding season :").toLowerCase()
month = capitalizeFirst(month)

function capitalizeFirst(month){
    return month.charAt(0).toUpperCase() + month.slice(1);
}

let index = months.indexOf(month);

if(index == -1){
    alert(`${month} Is Not a Month`)
}
else if(index < 3){
    alert("It's Winter Season")
}else if(index < 6){
    alert("It's Spring Season")
}else if(index < 9){
    alert("It's Summer Season")
}else{
    alert("It's Autumn Season")
}