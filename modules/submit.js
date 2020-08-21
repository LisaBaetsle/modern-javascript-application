import { handleFetch } from './fetch.js';
import { printNamesOfTheDays } from './dates.js';

// function to handle the sumbit when clicked on button
function handleSubmitButton() {
  document.getElementById('spinner').style.display = 'block';
  printNamesOfTheDays();

  let cityInput = document.getElementById('cityInput').value;

  const api = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=metric&appid=655a19af3d0a8572719255b11fb9c8d0`;

  fetch(api)
    .then((response) => {
      document.getElementById('spinner').style.display = 'none';
      return response.json();
    })
    .then(handleFetch);
}

export { handleSubmitButton };
