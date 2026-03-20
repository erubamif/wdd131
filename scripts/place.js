const temp = 8;
const wind = 15;

// Get elements safely
const tempEl = document.getElementById("temp");
const windEl = document.getElementById("wind");
const chillEl = document.getElementById("chill");

// Display temperature and wind speed
if (tempEl && windEl) {
  tempEl.textContent = temp;
  windEl.textContent = wind;
}

// Wind chill function (ONE LINE as required)
function calculateWindChill(t, w) {
  return (13.12 + 0.6215*t - 11.37*Math.pow(w,0.16) + 0.3965*t*Math.pow(w,0.16)).toFixed(1);
}

// Check conditions
let chill = "N/A";

if (temp <= 10 && wind > 4.8) {
  chill = `${calculateWindChill(temp, wind)}°C`;
}

// Display wind chill
if (chillEl) {
  chillEl.textContent = chill;
}

// Footer updates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;