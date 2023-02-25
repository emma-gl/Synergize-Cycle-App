import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("inputDate").setAttribute("max", today);

function getNextMenstruationDate(inputDate) {
  const date = new Date(inputDate); // Convert inputDate to a JavaScript date object
  date.setDate(date.getDate() + 28); // Add 28 days to the date object
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-indexed, so add 1 and pad with zeros
  const day = date.getDate().toString().padStart(2, '0'); // Pad day with zeros if necessary
  return `${year}-${month}-${day}`; // Return date in YYYY-MM-DD format
}

function getCyclePhase(inputDate, currentDate) {
  const cycleLength = 28; // Standard cycle length
  const msPerDay = 86400000; // Number of milliseconds in a day
  const msPerWeek = msPerDay * 7; // Number of milliseconds in a week
  const timeDiff = currentDate.getTime() - new Date(inputDate).getTime(); // Difference between current date and input date in milliseconds
  const dayDiff = Math.floor(timeDiff / msPerDay); // Difference between current date and input date in days
  const weekDiff = Math.floor(timeDiff / msPerWeek); // Difference between current date and input date in weeks
  const cycleDay = (dayDiff % cycleLength) + 1; // Day of the cycle, starting from 1
  
  if (cycleDay <= 7) {
    return 'Menstrual (Week 1)';
  } else if (cycleDay <= 14) {
    return 'Follicular (Week 2)';
  } else if (cycleDay <= 21) {
    return 'Ovulatory (Week 3)';
  } else {
    return 'Luteal (Week 4)';
  }
}  

ReactDOM.render(
  <React.StrictMode>
    <App showNextMenstruationDate={showNextMenstruationDate} />
  </React.StrictMode>,
  document.getElementById('root')
);



function showNextMenstruationDate() {
  const inputDate = document.getElementById('inputDate').value;
  const nextCycle = getNextMenstruationDate(inputDate);
  const currentDate = new Date();
  const cycleLength = document.getElementById('cycleLength').value; // assuming a 28-day cycle length, modify as needed
  const timeDiff = Math.abs(currentDate.getTime() - new Date(inputDate).getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const cycleDay = (diffDays % cycleLength) + 1;
  let cyclePhase;

  if (cycleDay >= 1 && cycleDay <= 7) {
    cyclePhase = 'Menstrual';
  } else if (cycleDay >= 8 && cycleDay <= 14) {
    cyclePhase = 'Follicular';
  } else if (cycleDay >= 15 && cycleDay <= 21) {
    cyclePhase = 'Ovulatory';
  } else if (cycleDay >= 22 && cycleDay <= 28) {
    cyclePhase = 'Luteal';
  }

  window.confirm(`Your next menstruation date should occur on: ${nextCycle} \n You're currently in your ${cyclePhase} phase.`);
}

reportWebVitals();
