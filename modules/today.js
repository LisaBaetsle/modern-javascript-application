// Populate the header 
function populateHeader(data) {
  document.getElementById('cityCountryName').textContent = `${data.city.name}, ${data.city.country}`;
}

// Populate today (main day)
function populateToday(data) {
  document.getElementById('temperature').textContent = `${Math.round(data.list[0].main.temp)}°`;
  document.getElementById('description').textContent = `${data.list[0].weather[0].description}`;
  document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`;
  document.getElementById('windSpeed').textContent = `Wind: ${Math.round(data.list[0].wind.speed)} km/h`;
  document.getElementById('humidity').textContent = `Humidity: ${data.list[0].main.humidity}%`;

}

export {populateHeader, populateToday};