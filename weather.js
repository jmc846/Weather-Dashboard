const api = {
key: "9a249045513d63288116edcbd776a2ad", 
baseurl: "https://api.openweathermap.org/data/2.5",

}

const searchbox = document.querySelector('.search-box');

searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
if (evt.keyCode == 13){
 getResults(searchbox.value);
}
}

function getResults (query) {
fetch(`${api.baseurl}/weather?q=${query}&units=metric&APPID=${api.key}`)
.then(weather => {
  return weather.json();
}).then(displayResults);
}

function displayResults (weather) {
console.log(weather);
let city = document.querySelector('.location .city');
city.innerText = `${weather.name}, ${weather.sys.country}`;
//function to display date
let now = new Date();
let date = document.queryGetElementById('date');
date.innerText = dateBuilder(now);
//function to display temp
let temp = document.querySelector('.current .temp');
temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
//fuction to display current weather
let weather_el = document.querySelector('.current .weather');
weather_el.innerText = weather.weather[0].main;
//function to display hi-low temp
let hilow = document.querySelector('.hi-low');
hilow.innerText = `${Math.round(weather.main.temp_min)}°C/${Math.round(weather.main.temp_max)}°C`;
//function to display humidity
let humidity = document.querySelector('.humid');
humidity.innerText= weather.main[1]
//function to display windspeed
let windspeed = document.querySelector('windspeed');
windspeed.innerText= weather.wind.speed;

}
//date functions 
function dateBuilder (d) {
 let months = [ "January","February","March","April","May","June",
 "July","August","September","October","November","December"];

 let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();
}