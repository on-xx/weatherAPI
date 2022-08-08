const weather = new Weather('Seoul');
const ui = new UI();
const submit = document.getElementById('submit');

document.addEventListener('DOMContentLoaded', getWeatherData);

function getWeatherData() {
    weather.getWeather()
        .then(data => {
            ui.paint(data);
            console.log(data);
        })
}

submit.addEventListener('click', () => {
    const city = document.getElementById('input-city').value;
    weather.changeLocation(city);
    console.log('clicked', city);
    getWeatherData();
});



