class WeatherService{

    constructor(openWeatherClient){
        this.openWeatherClient = openWeatherClient;
    }

    async retrieveByName(city){
        return await this.openWeatherClient.retrieveByCityName(city);
    }
}

export default WeatherService;