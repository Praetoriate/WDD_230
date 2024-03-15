const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=39.522&lon=-122.0139&appid=7a0ebb7a38cc64dbc0a1d88697c39535&units=imperial';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=39.522&lon=-122.0139&exclude=hourly,minutely&appid=7a0ebb7a38cc64dbc0a1d88697c39535&units=imperial';

async function apiFetch() {
    try {
        const answer = await fetch(url);
        const answer2 = await fetch(forecastUrl);
        if (answer.ok) {
            const data = await answer.json();
            console.log(data);
        displayResults(data);
        } else {
            throw Error(await answer.text());
        }
        if (answer2.ok) {
            const data2 = await answer2.json();
            console.log(data2);
        // displayResults(data);
        } else {
            throw Error(await answer2.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
 
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp} &deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}
