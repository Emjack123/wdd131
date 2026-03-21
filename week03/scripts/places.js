const currentYear = new Date().getFullYear();
// inject into the element
// get current year
document.getElementById("year").textContent = currentYear;
// select the element and update it text
document.getElementById("lastModified").textContent = document.lastModified;

const area = document.getElementById("area");
const population = document.getElementById("population");
const capital = document.getElementById('capital');
const language = document.getElementById('lang');
const currency = document.getElementById('currency');
const timeZone = document.getElementById('timezone');
const callingCode = document.getElementById('call');
const internetTld = document.getElementById('tld');
 
area.textContent = "200000km^2"; 
population.textContent = "24million";
capital.textContent = "provo";
language.textContent = "English";
currency.textContent = "Dollar";
timeZone.textContent = "Ut3";
callingCode.textContent = "+1";
internetTld.textContent = ".us";

// selecting the element //
const temperature = document.getElementById("temperature");
const condition = document.getElementById('condition');
const windSpeed = document.getElementById('speed');
const chill  = document.getElementById('chill');
 
// using the innerHtml to populate the element //
temperature.textContent = "10F";
condition.textContent  = "very cold";
windSpeed.textContent = "5mph";



