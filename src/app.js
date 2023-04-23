function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours} ${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let feelslikeElement = document.querySelector("#feels-like");
  let windspeedElement = document.querySelector("#windspeed");
  let dateElement = document.querySelector("#date");

  dateElement.innerHTML = formatDate(response.data.time * 1000);
  windspeedElement.innerHTML = Math.round(response.data.wind.speed);
  feelslikeElement.innerHTML = response.data.temperature.feels_like;
  humidityElement.innerHTML = response.data.temperature.humidity;
  descriptionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

let apiKey = `aa400c4b71d997bat0f9483a58o681cf`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Munich&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
