const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");

const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

const apiKey = "MY_API_KEY";
const lat = 19.44
const lon = -99.13;

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();

    currentTemp.textContent = Math.round(data.current.temp);
    weatherDesc.textContent = data.current.weather[0].description;
}

day1.textContent = Math.round(data.daily[1].temp.day);
day2.textContent = Math.round(data.daily[2].temp.day);
day3.textContent = Math.round(data.daily[3].temp.day);

getWeather();