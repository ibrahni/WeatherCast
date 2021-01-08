import ApiConfig from '../config.json'
import OpenWeatherConverter from './OpenWeatherConverter'
import axios from 'axios'

class OpenWeatherClient{

    constructor(){
        this.host = ApiConfig.OPEN_WEATHER_API.HOST;
    }

    async retrieveByCityName(cityName){
        return axios.get(this.host.concat(ApiConfig.OPEN_WEATHER_API.WEATHER.BY_NAME
            .replace("{name}", cityName))
            .concat(ApiConfig.OPEN_WEATHER_API.API_KEY)).then(
               (response) => {return OpenWeatherConverter.convert(response.data);}
            );
        
    }
}

export default OpenWeatherClient