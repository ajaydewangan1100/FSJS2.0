
// getting all elements
let input = document.querySelector("#input");
let country = document.querySelector("#country");
let state = document.querySelector("#state");
let city = document.querySelector("#city");
let humidity = document.querySelector("#humidity");
let Wind_speed = document.querySelector("#Wind_speed");
let temprature = document.querySelector("#temprature");
let weather_icon = document.querySelector("#weather_icon");
let weather_type = document.querySelector("#weather_type");
let forecast_container = document.querySelector(".forecast_container");


for (let i = 0; i < 9; i++) {
    // const element = forecast_list[i];
    // let forecast_1 = document.cloneNode(forecast_list);
    createAppend(i);
}


// Create and Append child function
function createAppend (i) {
    let day = document.createElement("h5");
    day.innerText = "Api";
    let date = document.createElement("h5");
    day.innerText = "Api";
    let fore_icon = document.createElement("img");
    fore_icon.src = "Api";
    let min_temp = document.createElement("h5");
    day.innerText = "Api";
    let max_temp = document.createElement("h5");
    day.innerText = "Api";
    let wind_speed = document.createElement("h5");
    day.innerText = "Api";

    let forecast_div = document.createElement("div");
    forecast_div.innerHTML += day + date + fore_icon + min_temp + max_temp + wind_speed;

    forecast_container.innerHTML += forecast_div;

}