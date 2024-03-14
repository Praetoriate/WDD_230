const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.89&lon=-122.58&appid=7a0ebb7a38cc64dbc0a1d88697c39535&units=metric';

async function apiFetch() {
    try {
        const answer = await fetch(url);
        if (answer.ok) {
            const data = await answer.json();
            // console.log(data);
        displayResults(data);
        } else {
            throw Error(await answer.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
 
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp} &deg;C`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}
