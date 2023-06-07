// Day and Time
let now = new Date();

let h4 = document.querySelector("h4");

let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = weekday[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h4.innerHTML = `${day} ${hour}:${minutes}`;

// HW Task 1
function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  document.querySelector("h2").innerHTML = response.data.name;
  document.querySelector("h1").innerHTML = `${temperature}°F`;
  document.querySelector(".description").innerHTML =
    response.data.weather[0].main;
}

function submitCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  citySearch(city);
}

function citySearch(city) {
  let units = "imperial";
  let apiKey = "34ae1065362d42545661451bda2b8a1f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemp);
}

let search = document.querySelector("form");
search.addEventListener("submit", submitCity);

citySearch("Dallas");

// Bonus Feature

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCurrentLocation);
}

function searchCurrentLocation(position) {
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  let units = "imperial";
  apiKey = "8161b4309ee03faae957729ba7104797";
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemp);
}

let currentLocationButton = document.querySelector(".current-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

// Conversion

//function convertFahrenheit(event) {
//event.preventDefault();
//let temperature = document.querySelector(".temperature");
//temperature.innerHTML = 87;
//}

//function convertCelsius(event) {
//event.preventDefault();
//let temperature = document.querySelector(".temperature");
//temperature.innerHTML = 31;
//}

//let changeCelsius = document.querySelector(".fahrenheit");
//changeCelsius.addEventListener("click", convertFahrenheit);

//let changeFahrenheit = document.querySelector(".celsius");
//changeFahrenheit.addEventListener("click", convertCelsius);
