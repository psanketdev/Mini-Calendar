console.log('This is a mini calendar');

const localDate = new Date();
const language = navigator.language;

let monthName = localDate.toLocaleString(language, { month: 'long' })
let dayName = localDate.toLocaleString(language, {weekday: 'long'})
let dateNumber = localDate.getDate();
let year = localDate.getFullYear();

document.getElementById('month').innerHTML = monthName;
document.getElementById('day').innerHTML = dayName;
document.getElementById('date').innerHTML = dateNumber;
document.getElementById('year').innerHTML = year;

