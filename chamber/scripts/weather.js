const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

const apiKey = "52d1e79df11cc63a35e6767ce21a6f2e";
const lat = 19.44;
const lon = -99.13;

const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
  const response = await fetch(weatherURL);
  const data = await response.json();

  currentTemp.textContent = `${Math.round(data.list[0].main.temp)}°C`;
  weatherDesc.textContent = data.list[0].weather[0].description;

  day1.textContent = `${Math.round(data.list[8].main.temp)}°C`;
  day2.textContent = `${Math.round(data.list[16].main.temp)}°C`;
  day3.textContent = `${Math.round(data.list[24].main.temp)}°C`;
}

getWeather();
