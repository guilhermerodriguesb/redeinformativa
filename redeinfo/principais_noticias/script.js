// Substitua pela sua chave da API
const apiKey = '2cc65ca384271a62d90bf9231f7a8cb2';
const city = 'São Paulo';

async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`);
    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) {
    document.getElementById('city').querySelector('span').textContent = data.name;
    document.getElementById('temperature').querySelector('span').textContent = data.main.temp;
    document.getElementById('description').querySelector('span').textContent = data.weather[0].description;
}

window.onload = getWeather;
