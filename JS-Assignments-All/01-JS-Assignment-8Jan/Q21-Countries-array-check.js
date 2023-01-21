// Q21 Countries array check - Here - - - - - - - - - - - - - - - - - 

// This program is working for any country you want to add
alert('This program is working for any country you want to add or found')

let countries = ["USA", "Europe"];

function countryAdd(){
    let country = 'Ethiopia'

    if(window.confirm(`IF you want to search ${country} click ok or click cancel for search other country`)){
        if(countries.includes(country)){
            console.log(`${country.toUpperCase()}, is in list`);
            alert(`${country.toUpperCase()}, is in list`)
        }else {
            countries.push(country);
            alert(`${country} is not found in list, ${country} Added`);
            console.log(`${country} is not found in list, ${country} Added`)
        }
    }else {
        country = prompt('Enter Your Country :')
        if(countries.includes(country)){
            console.log(`${country.toUpperCase()}, is in list`);
            alert(`${country.toUpperCase()}, is in list`)
        }else {
            countries.push(country);
            alert(`${country} is not found in list, ${country} Added`);
            console.log(`${country} is not found in list, ${country} Added`)
        }
    }
}
countryAdd();