const maxTemp = document.querySelector('#max-temp');

const currentTemp = document.querySelector('#current-temp');
const currentHumid = document.querySelector('#current-humid');
const currentIcon = document.querySelector('#current-icon');
const currentDesc = document.querySelector('#current-phrase');


const futureTemp = document.querySelector('#future-temp');
const futureHumid = document.querySelector('#future-humid');
const futureIcon = document.querySelector('#future-icon');
const futureDesc = document.querySelector('#future-phrase');

const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=20.4230&lon=-86.9223&appid=ba4544e3b9ce714ac934b37ff2c3167b&units=imperial';

async function apiFetch() {
    try {
        const answer = await fetch(url);
        if (answer.ok) {
            const data = await answer.json();
            console.log(data);
        displayCurrent(data);
        } else {
            throw Error(await answer.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayCurrent(data) {
    maxTemp.innerHTML = `${data.daily[0].temp.day} &deg;F `

    currentTemp.innerHTML = `Temperature: ${data.current.temp} &deg;F`
    currentHumid.innerHTML = `Humidity: ${data.current.humidity} %`
    const iconsrc = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`;
    let desc = `Condition: ${data.current.weather[0].description}`;
    currentIcon.setAttribute('src', iconsrc);
    currentIcon.setAttribute('alt', desc);
    currentDesc.textContent = `${desc}`;

    
    futureTemp.innerHTML = `Temperature: ${data.daily[1].temp.max} &deg;F`
    futureHumid.innerHTML = `Humidity: ${data.daily[1].humidity} %`
    const jconsrc = `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}.png`;
    desc = `Condition: ${data.daily[1].weather[0].description}`;
    futureIcon.setAttribute('src', jconsrc);
    futureIcon.setAttribute('alt', desc);
    futureDesc.textContent = `${desc}`;
}

