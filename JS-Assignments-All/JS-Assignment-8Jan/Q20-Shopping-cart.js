// Q20 Shopping Cart - Here - - - - - - - - - - - - - - - - - 

let cart = ['Milk', 'Coffee', 'Tea', 'Honey']

// Added Meat on start
if(cart.includes('Meat') == false){
    cart.unshift('Meat')
    alert(cart)
}

// Added sugar on end
if(cart.includes('Sugar') == false){
    cart.push('Sugar')
    alert(cart)
}

// Removing Honey
if(cart.includes('Honey')){
    cart.splice(cart.indexOf('Honey'), 1)
    alert(cart)
}

// Modifying Tea to Green Tea
if(cart.includes('Tea')){
    cart.splice(cart.indexOf('Tea'), 1, "Green Tea")
    alert(cart)
}