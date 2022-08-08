class UI {
    constructor() {
        this.city = document.getElementById('city');
        this.temperature = document.getElementById('temperature');
        this.humidity = document.getElementById('humidity');
        this.pressure = document.getElementById('pressure');
    }

    paint(data) {
        this.city.textContent = `City : ${data.name}`
        this.temperature.textContent = `Temperature : ${data.main.temp}`
        this.humidity.textContent = `Humidity : ${data.main.humidity}`
        this.pressure.textContent = `Pressure : ${data.main.pressure}`
    }
}