//Calculate Windchill
let temp = Number(document.querySelector('#temperature').textContent);
let speed = Number(document.querySelector('#wind-speed').textContent);

const chill = 35.74 + (0.6215 * temp) - (35.75 * (speed**0.16)) + (0.4275 * temp * (speed**0.16));

document.querySelector("#wind-chill").textContent = chill.toFixed(2);
