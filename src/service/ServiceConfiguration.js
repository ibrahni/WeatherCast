import OpenWeatherClient from './OpenWeatherClient';
import WeatherService from './WeatherService';

const weatherService = new WeatherService(new OpenWeatherClient());

export default weatherService;