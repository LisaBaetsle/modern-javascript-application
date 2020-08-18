// check the time when city is inputted and change the index of the data to always show the min and max temp of the day and the icon of 12 o'clock
function populateTheNextFourDays(hour, data) {
  let firstDataPointID;
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

export {populateTheNextFourDays};