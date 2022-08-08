class Weather {
    constructor(city) {
        this.apiKEY = 'd31f6ff5680429023aadeb6086955b34';
        this.city = city;
    }

    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKEY}`)

        const data = response.json();

        return data;
    }

    changeLocation(city) {
        this.city = city;
    }

    
}