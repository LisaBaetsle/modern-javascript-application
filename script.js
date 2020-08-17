const d = new Date();
const TODAY = d.getDay();
const THISDAY = d.getDate();
const THISMONTH = d.getMonth();
const THISYEAR = d.getFullYear();
const THISHOUR = d.getHours();

const TODAYPLUSONE = TODAY + 1;
const TODAYPLUSTWO = TODAY + 2;
const TODAYPLUSTHREE = TODAY + 3;
const TODAYPLUSFOUR = TODAY + 4;

function getNameOfTheDay(day) {
  switch (day) {
    case 1:
    case 8:
      return 'Monday';
    case 2:
    case 9:
      return 'Tuesday';
    case 3:
    case 10:
      return 'Wednesday';
    case 4:
    case 11:
      return 'Thursday';
    case 5:
    case 12:
      return 'Friday';
    case 6:
    case 13:
      return 'Saturday';
    case 7:
    case 14:
      return 'Sunday';
  }
}

function getNameOfTheMonth(month) {
  switch (month) {
    case 1:
      return `January`;
    case 2:
      return `February`;
    case 3:
      return `March`;
    case 4:
      return `April`;
    case 5:
      return `May`;
    case 6:
      return `June`;
    case 7:
      return `July`;
    case 8:
      return `August`;
    case 9:
      return `September`;
    case 10:
      `October`;
    case 11:
      return `November`;
    case 12:
      return `December`;
  }
}


document.getElementById('submit').addEventListener('click', function (event) {
  let cityInput = document.getElementById('cityInput').value;

  printNamesOfTheDays();

  const api = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=metric&appid=655a19af3d0a8572719255b11fb9c8d0`


  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(handleFetch)
})

//submit form when 'Enter' key is pressed while in myInputID
document.getElementById('cityInput').addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});

// Print the names of the days
function printNamesOfTheDays() {
  document.getElementById('date').textContent = `${getNameOfTheDay(TODAY)}, ${getNameOfTheMonth(THISMONTH)} ${THISDAY}, ${THISYEAR}`;
  document.getElementById("dayOneName").textContent = `${getNameOfTheDay(TODAYPLUSONE)}`;
  document.getElementById("dayTwoName").textContent = getNameOfTheDay(TODAYPLUSTWO);
  document.getElementById("dayThreeName").textContent = getNameOfTheDay(TODAYPLUSTHREE);
  document.getElementById("dayFourName").textContent = getNameOfTheDay(TODAYPLUSFOUR);
}

// Handle the fetch
function handleFetch(data) {
  // HEADER
  populateHeader(data);

  // TODAY INFO
  populateToday(data);

  // OTHER DAYS INFO
  populateTheNextFourDays(THISHOUR, data);

  // BUILD CHART WITH TEMPERATURE
  let ctx = document.getElementById('myChart');
  buildChart(ctx, data);
}

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

// check the time when city is inputted and change the index of the data to always show the min and max temp of the day and the icon of 12 o'clock
function populateTheNextFourDays(hour, data) {
  if (hour < 3) {
    firstDataPointID = 12;
  } else if (hour < 6) {
    firstDataPointID = 11;
  } else if (hour < 9) {
    firstDataPointID = 10;
  } else if (hour < 12) {
    firstDataPointID = 9;
  } else if (hour < 15) {
    firstDataPointID = 8;
  } else if (hour < 18) {
    firstDataPointID = 7;
  } else if (hour < 21) {
    firstDataPointID = 6;
  } else if (hour < 24) {
    firstDataPointID = 5;
  }

  //Day one
  document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[firstDataPointID].weather[0].icon}@2x.png`;
  document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[firstDataPointID - 3].main.temp_min)}°C ${Math.round(data.list[firstDataPointID + 1].main.temp_max)}°C`;
  //Day two
  firstDataPointID += 8;
  document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[firstDataPointID].weather[0].icon}@2x.png`;
  document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[firstDataPointID - 3].main.temp_min)}°C ${Math.round(data.list[firstDataPointID + 1].main.temp_max)}°C`;
  //Day three
  firstDataPointID += 8;
  document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[firstDataPointID].weather[0].icon}@2x.png`;
  document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[firstDataPointID - 3].main.temp_min)}°C ${Math.round(data.list[firstDataPointID + 1].main.temp_max)}°C`;
  //Day four
  firstDataPointID += 8;
  document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[firstDataPointID].weather[0].icon}@2x.png`;
  document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[firstDataPointID - 3].main.temp_min)}°C ${Math.round(data.list[firstDataPointID + 1].main.temp_max)}°C`;
}

// Build the chart for the temperature
function buildChart(ctx, data) {
  let myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [`${data.list[0].dt_txt.slice(10, 16)}`, `${data.list[1].dt_txt.slice(10, 16)}`, `${data.list[2].dt_txt.slice(10, 16)}`, `${data.list[3].dt_txt.slice(10, 16)}`, `${data.list[4].dt_txt.slice(10, 16)}`, `${data.list[5].dt_txt.slice(10, 16)}`, `${data.list[6].dt_txt.slice(10, 16)}`, `${data.list[7].dt_txt.slice(10, 16)}`, `${data.list[8].dt_txt.slice(10, 16)}`],
      datasets: [{
        data: [Math.round(data.list[0].main.temp), Math.round(data.list[1].main.temp), Math.round(data.list[2].main.temp), Math.round(data.list[3].main.temp), Math.round(data.list[4].main.temp), Math.round(data.list[5].main.temp), Math.round(data.list[6].main.temp), Math.round(data.list[7].main.temp), Math.round(data.list[8].main.temp)],
        backgroundColor: 'rgba(255, 66, 14, 0.7)',
        borderColor: 'rgba(255, 66, 14, 1)',
        borderWidth: 1,
      }, ]
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            min: Math.round(data.list[0].main.temp) - 15,
            max: Math.round(data.list[0].main.temp) + 15,
            fontColor: 'rgba(255, 255, 255, 0.6)',
            display: false,
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: 'rgba(255, 255, 255, 0.6)'
          }
        }],
      },
      plugins: {
        datalabels: {
          color: 'rgba(255, 66, 14, 1)',
          align: 'top',
          labels: {
            title: {
              font: {
                size: '14',
              }
            }
          }
        },

      }
    },
  });
}