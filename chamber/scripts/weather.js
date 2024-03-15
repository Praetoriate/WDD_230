const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#current-phrase');

const foreMinTemp1 = document.querySelector('#min-temp1');
const foreMaxTemp1 = document.querySelector('#max-temp1');
const forePhrase1 = document.querySelector('#phrase1');

const foreMinTemp2 = document.querySelector('#min-temp2');
const foreMaxTemp2 = document.querySelector('#max-temp2');
const forePhrase2 = document.querySelector('#phrase2');

const foreMinTemp3 = document.querySelector('#min-temp3');
const foreMaxTemp3 = document.querySelector('#max-temp3');
const forePhrase3 = document.querySelector('#phrase3');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=39.522&lon=-122.0139&appid=7a0ebb7a38cc64dbc0a1d88697c39535&units=imperial';
// const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=39.522&lon=-122.0139&exclude=hourly,minutely&appid=7a0ebb7a38cc64dbc0a1d88697c39535&units=imperial';
const forecastUrl = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/2155444?apikey=fcHEQHxUxACs3b6E0LCcBGn0ru7Eh0xG';

async function apiFetch() {
    try {
        const answer = await fetch(url);
        const answer2 = await fetch(forecastUrl);
        if (answer.ok) {
            const data = await answer.json();
            console.log(data);
        displayCurrent(data);
        } else {
            throw Error(await answer.text());
        }
        if (answer2.ok) {
            const data2 = await answer2.json();
            console.log(data2);
        displayForecast(data2);
        } else {
            throw Error(await answer2.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
 
function displayCurrent(data) {
    currentTemp.innerHTML = `${data.main.temp} &deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function displayForecast(data2) {
    foreMinTemp1.innerHTML = `${data2.DailyForecasts[1].Temperature.Minimum.Value} &deg;F`
    foreMaxTemp1.innerHTML = `${data2.DailyForecasts[1].Temperature.Maximum.Value} &deg;F`
    forePhrase1.innerHTML = `${data2.DailyForecasts[1].Day.IconPhrase}`

    foreMinTemp2.innerHTML = `${data2.DailyForecasts[2].Temperature.Minimum.Value} &deg;F`
    foreMaxTemp2.innerHTML = `${data2.DailyForecasts[2].Temperature.Maximum.Value} &deg;F`
    forePhrase2.innerHTML = `${data2.DailyForecasts[2].Day.IconPhrase}`
    
    foreMinTemp3.innerHTML = `${data2.DailyForecasts[3].Temperature.Minimum.Value} &deg;F`
    foreMaxTemp3.innerHTML = `${data2.DailyForecasts[3].Temperature.Maximum.Value} &deg;F`
    forePhrase3.innerHTML = `${data2.DailyForecasts[3].Day.IconPhrase}`
}
