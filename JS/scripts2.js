const apiKey = 'efe8ac8b90ecabe89660222c3a3b36cf'; // this  weather api key is free

const searchForm = document.getElementById('searchForm');
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const statusMessage = document.getElementById('statusMessage');

const city = document.getElementById('city');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const weatherIcon = document.getElementById('weatherIcon');

const iconMap = {
  Clear: '☀️',
  Clouds: '☁️',
  Rain: '🌧️',
  Drizzle: '🌦️',
  Thunderstorm: '⛈️',
  Snow: '❄️',
  Mist: '🌫️',
  Smoke: '🌫️',
  Haze: '🌫️',
  Dust: '🌪️',
  Fog: '🌫️',
  Sand: '🌪️',
  Ash: '🌫️',
  Squall: '🌪️',
  Tornado: '🌪️'
};

function updateDate() {
  const today = new Date();
  date.textContent = today.toLocaleDateString('en', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const cityName = cityInput.value.trim();

  if (cityName === '') {
    statusMessage.textContent = 'Please enter a city name.';
    return;
  }

  getWeather(cityName);
});

searchBtn.addEventListener('click', () => {
  searchForm.requestSubmit();
});

async function getWeather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  statusMessage.textContent = 'Loading weather...';

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Weather not found.');
    }

    const weatherMain = data.weather?.[0]?.main || 'Clear';

    city.textContent = data.name;
    temp.textContent = `${Math.round(data.main.temp)}°C`;
    description.textContent = data.weather[0].description;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} km/h`;
    weatherIcon.textContent = iconMap[weatherMain] || '🌤️';
    statusMessage.textContent = `Showing weather for ${data.name}.`;
  } catch (error) {
    statusMessage.textContent = `Error: ${error.message}`;
    city.textContent = 'City';
    temp.textContent = '0°C';
    description.textContent = 'Weather Description';
    humidity.textContent = '0%';
    wind.textContent = '0 km/h';
    weatherIcon.textContent = '🌤️';
  }
}

updateDate();
getWeather('London');
