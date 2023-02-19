
// getting all elements
let input = document.querySelector("#input");
let country = document.querySelector("#country");
let state = document.querySelector("#state");
let city = document.querySelector("#city");
let humidity = document.querySelector("#humidity");
let wind_speed = document.querySelector("#Wind_speed");
let temprature = document.querySelector("#temprature");
let weather_icon = document.querySelector("#weather_icon");
let weather_type = document.querySelector("#weather_type");
let forecast_container = document.querySelector(".forecast_container");



async function fetch_run (event) {
    event.preventDefault();
    if (input.value.length === 0) { alert("Type city name"); return;  }
    let city = input.value;
    function fetching () {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=a8a49ab93eb0400296f124836232002&q=${city}&days=14&aqi=no&alerts=no`)
        .then((result) => result.json())
        .then((data) => loop_forecast(data))
    }
    await fetching();
}

// Current Weather updater
function current_updater (data) {
    country.innerHTML = data.location.country;
    state.innerHTML = data.location.region;
    city.innerHTML = data.location.name;
    humidity.innerHTML = data.current.humidity;
    wind_speed.innerHTML = data.current.wind_mph + "mph";
    temprature.innerHTML = data.current.temp_c + " \u00B0C";
    weather_icon.src = data.current.condition.icon;
    weather_icon.style.height = "30px";
    weather_type.innerHTML = data.current.condition.text;
}

// forecast updater
function loop_forecast (data) {
    current_updater (data);
    forecast_container.innerHTML = "";
    for (let i = 0; i < 14; i++) {
        // const element = forecast_list[i];
        // let forecast_1 = document.cloneNode(forecast_list);
        createAppend(data, i);
    }
}


// Create and Append child function
function createAppend (apiOg, i) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurseday", "Friday", "Saturday"]
    const api = apiOg.forecast.forecastday;

    const day = new Date(api[i].date)
    let dayName = document.createElement("h5");
    dayName.innerText = dayNames[day.getDay()];
    if (i === 0) dayName.innerText = "Today";
    if (i === 1) dayName.innerText = "Tomorrow";

    let date = document.createElement("h5");
    date.innerText = api[i].date;
    let fore_icon = document.createElement("img");
    fore_icon.src = api[i].day.condition.icon;
    fore_icon.style.height = "40px";
    let min_temp = document.createElement("h5");
    min_temp.innerText = api[i].day.mintemp_c + " \u00B0C";
    let max_temp = document.createElement("h5");
    max_temp.innerText = api[i].day.maxtemp_c + " \u00B0C";
    let wind_speed = document.createElement("h5");
    wind_speed.innerText = api[i].day.maxwind_mph + "mph";

    let forecast_div = document.createElement("div");
    forecast_div.classList.add("forecast_div")
    // forecast_div.innerHTML += day + date + fore_icon + min_temp + max_temp + wind_speed;
    forecast_div.appendChild(dayName);
    forecast_div.appendChild(date);
    forecast_div.appendChild(fore_icon);
    forecast_div.appendChild(min_temp);
    forecast_div.appendChild(max_temp);
    forecast_div.appendChild(wind_speed);

    forecast_container.appendChild(forecast_div);

}