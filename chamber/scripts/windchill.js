//Calculate Windchill
const tempInput = document.querySelector('#temperature');
const speedInput = document.querySelector('#wind-speed');
const chillValue = document.querySelector('wind-chill');

function calculateChill() {
    const temp =parseFloat(tempInput.value);
    const speed =parseFloat(speedInput.value);

    chill = 35.74 + (0.6215 * temp) - (35.75 * (speed**0.16)) + (0.4275 * temp * (speed**0.16));

    document.querySelector("#wind-chill").textContent = chill.toFixed(2);
}

tempInput.addEventListener("input", calculateChill);
speedInput.addEventListener("input", calculateChill);
