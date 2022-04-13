let searchButtonEl = document.getElementById("search-button");
let cityEl = document.getElementById("enter-city");
let clearEl = document.getElementById("clear-history");
let nameEl = document.getElementById("city-name");
let currentTempEl = document.getElementById("temperature");
let currentHumidityEl = document.getElementById("humidity");
let currentWindEl = document.getElementById("wind-speed");
let currentUVEl = document.getElementById("UV-index");
let currentPicEl = document.getElementById("current-pic");
let historyEl = document.getElementById("history");
let fivedayEl = document.getElementById("fiveday-header");
let todayweatherEl = document.getElementById("today-weather");

// Open Weather API
const apiKey = "c1957ee73009ff71ba1fad4664bc9bee"

let todayweatherEl = {
    apiKey
}


// fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${apiKey}`);
// .then(response => response.json());
// .then(geoData => {
//     return fetch('');
// })
//     .then(response => response.json());
// .then(cityData => {
//         console.log(cityData);
//     })

