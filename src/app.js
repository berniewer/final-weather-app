function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  descriptionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

let apiKey = `aa400c4b71d997bat0f9483a58o681cf`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Munich&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
