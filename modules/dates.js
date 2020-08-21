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
    case 0:
      return `January`;
    case 1:
      return `February`;
    case 2:
      return `March`;
    case 3:
      return `April`;
    case 4:
      return `May`;
    case 5:
      return `June`;
    case 6:
      return `July`;
    case 7:
      return `August`;
    case 8:
      return `September`;
    case 9:
      return `October`;
    case 10:
      return `November`;
    case 11:
      return `December`;
  }
}

// Print the names of the days
function printNamesOfTheDays() {
  document.getElementById('date').textContent = `${getNameOfTheDay(TODAY)}, ${getNameOfTheMonth(THISMONTH)} ${THISDAY}, ${THISYEAR}`;
  document.getElementById("dayOneName").textContent = `${getNameOfTheDay(TODAYPLUSONE)}`;
  document.getElementById("dayTwoName").textContent = getNameOfTheDay(TODAYPLUSTWO);
  document.getElementById("dayThreeName").textContent = getNameOfTheDay(TODAYPLUSTHREE);
  document.getElementById("dayFourName").textContent = getNameOfTheDay(TODAYPLUSFOUR);
}

export {
  TODAY,
  THISDAY,
  THISMONTH,
  THISYEAR,
  THISHOUR,
  TODAYPLUSONE,
  TODAYPLUSTWO,
  TODAYPLUSTHREE,
  TODAYPLUSFOUR
};
export {
  getNameOfTheDay,
  getNameOfTheMonth,
  printNamesOfTheDays
};