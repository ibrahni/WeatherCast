import Weather from './Weather';

const OpenWeatherConverter ={
    async convert(openWeatherData){

        let weather = new Weather();

        weather.setName(openWeatherData.name);
        weather.setWind({
            "speed": openWeatherData.wind.speed
        });
        weather.setSunrise(openWeatherData.sys.sunrise);
        weather.setSunset(openWeatherData.sys.sunset);
        weather.setCoordination({
            "longitude" : openWeatherData.coord.lon,
            "latittude" :openWeatherData.coord.lat}
        );
        weather.setTemperature({
            "max": openWeatherData.main.temp_max,
            "min": openWeatherData.main.temp_min,
            "now": openWeatherData.main.temp, 
            "description" : openWeatherData.weather[0].description,
            "icon": "http://openweathermap.org/img/wn/" + openWeatherData.weather[0].icon +"@4x.png"
        })  
        weather.setHumidity(openWeatherData.main.humidity)
        return weather;
    }
}
export default OpenWeatherConverter;