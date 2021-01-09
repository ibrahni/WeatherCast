import Weather from './Weather';
import Config from './../config.json';

const kelvinToCelisus = (kelvin) => {
    return Number(kelvin-273.15).toFixed(0)
}

const timestampToLocalTime = (timestamp) => {
    let time =  new Date(timestamp * 1000).toLocaleTimeString()
    return  time.substring(0,time.lastIndexOf(":"))
}

const timezoneFormat = (timezoneOffset) => {
    let offset = (timezoneOffset / 3600);
    return (((offset <= 0) || offset === 0 ) ? "" : "+") + offset + " GMT"

}

const iconOf = (isoCode) => {
    return Config.COUNTRY_FLAG_API.FLAG_BY_CODE.replace("{code}", isoCode);
}

const OpenWeatherConverter ={   
    async convert(openWeatherData){

        let weather = new Weather();

        weather.setName(openWeatherData.name);
        weather.setWind({
            "speed": openWeatherData.wind.speed
        });
        weather.setSunrise(timestampToLocalTime(openWeatherData.sys.sunrise));
        weather.setSunset(timestampToLocalTime(openWeatherData.sys.sunset));
        weather.setCoordination({
            "longitude" : openWeatherData.coord.lon,
            "latittude" :openWeatherData.coord.lat}
        );
        weather.setTemperature({
            "max": kelvinToCelisus(openWeatherData.main.temp_max),
            "min": kelvinToCelisus(openWeatherData.main.temp_min),
            "now": kelvinToCelisus(openWeatherData.main.temp), 
            "main": openWeatherData.weather[0].main,
            "description" : openWeatherData.weather[0].description,
            "icon": "http://openweathermap.org/img/wn/" + openWeatherData.weather[0].icon +"@4x.png"
        });
        weather.setCountry({
            "code" : openWeatherData.sys.country,
            "icon" : iconOf(openWeatherData.sys.country),
            "timezone" : timezoneFormat(openWeatherData.timezone)
        })
        weather.setHumidity(openWeatherData.main.humidity)
        return weather;
    }
}
export default OpenWeatherConverter;