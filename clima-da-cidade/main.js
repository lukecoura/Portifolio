//Variáveis e seletores
const apiKey = "c05c71d6cf3a7be9812b956a832d91f1";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector('[data-input]');
const searchButton = document.querySelector('[data-search]');
const weatherContainer = document.querySelector('[data-weather]');
const cityElement = document.querySelector('[data-city]');
const countryElement = document.querySelector('[data-country]');
const temperatureElement = document.querySelector('[data-temperature]');
const descriptionElement = document.querySelector('[data-description]');
const weatherIconElement = document.querySelector('[data-icon]');
const humidityElement = document.querySelector('[data-humidity]');
const windElement = document.querySelector('[data-wind]');

//Funções
const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const apiResponse = await fetch(apiWeatherURL);
    const apiData = await apiResponse.json();
    
    return apiData;
}

const showWeatherData = async (city) => {
    try {
        const data = await getWeatherData(city);

        cityElement.innerText = data.name;
        temperatureElement.innerText = parseInt(data.main.temp);
        descriptionElement.innerText = data.weather[0].description;
        weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        countryElement.setAttribute('src', apiCountryURL + data.sys.country);
        humidityElement.innerText = `${data.main.humidity}%`;
        windElement.innerText = `${data.wind.speed}km/h`;
    console.log(data)
        weatherContainer.classList.remove('hide');
    } catch {
        alert('Cidade não encontrada. Por favor, digite uma cidade válida.');
    }
}


//Eventos
searchButton.addEventListener('click', () => {
    const city = cityInput.value;

    showWeatherData(city);
});

cityInput.addEventListener('keyup', (evento) => {
    if (evento.code === 'Enter' || evento.code === 'NumpadEnter') {
        const city = evento.target.value;
        showWeatherData(city);
    }
});
