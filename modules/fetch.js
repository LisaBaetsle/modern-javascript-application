import {populateHeader, populateToday} from './today.js';
import {THISHOUR} from './dates.js';
import {populateTheNextFourDays} from './next-days.js';
import {buildChart} from './chart.js';

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

export {handleFetch};