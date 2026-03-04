// Your code here
const API_KEY = "fdce303c9e953868ead855ba0432dbe2";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const loader = document.getElementById("loader");
const weatherCard = document.getElementById("weatherCard");
const errorText = document.getElementById("error");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) fetchWeather(city);
});

async function fetchWeather(city) {
  loader.classList.remove("hidden");
  weatherCard.classList.add("hidden");
  errorText.textContent = "";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (res.status === 401) throw new Error("Invalid API key");
    if (res.status === 404) throw new Error("City not found");

    const data = await res.json();
    updateUI(data);

  } catch (err) {
    errorText.textContent = err.message;
  } finally {
    loader.classList.add("hidden");
  }
}

function updateUI(data) {
  cityName.textContent = data.name;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  condition.textContent = data.weather[0].description;
  humidity.textContent = `${data.main.humidity}%`;
  wind.textContent = `${data.wind.speed} km/h`;

  weatherCard.classList.remove("hidden");
}