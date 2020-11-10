//API KEY & URL
let api = {
  key: "15ec54435c2c6f6b94552199b0e2aa6b",
  base: "https://api.openweathermap.org/data/2.5/",
};

//CHECK TO HIT ENTER ON "SEARCH BOX"
//SETUP "ADDEVENTLISTENER" ON SEARCHBOX WHEN PRESS "KEYPRESS"
let searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);

//KEY TO BE LOOKING TO BE PRESS IS "13" WHICH IS THE ENTER KEY OR THE RETURN KEY ON KEYBOARD, RUN THE CODE ON LINE 16
function setQuery(event) {
  if (event.keyCode === 13) {
    getResults(searchBox.value);
    //console.log(searchBox.value);
  }
}

//ONCE THE CODE IS RAN ON LINE 16, FETCH REQUEST
//GET "API.BASE" ATTACHED THE WEATHER PASS THROUGH A "QUERY" GOT FROM THE SEARCHBOX.VALUE, SET THE UNITS TO CELSIUS, SET THE APPID TO "API.KEY"
//RETURN WEATHER AND CONFER TO JSON

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&appId=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

//PASS THROUGH JSON TO DISPLAYRESULTS NAMES AS "WEATHER"
function displayResults(weather) {
  //console.log(weather);

  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let currentDate = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(currentDate);

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_element = document.querySelector(".current .weather");
  weather_element.innerText = weather.weather[0].main;

  let hiLow = document.querySelector(".hi-low");
  hiLow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
    weather.main.temp_max
  )}°c`;
}

//d === date
//ARRAYS IN MONTHS AND DAYS GETTING THE RIGHT VALUES
function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
