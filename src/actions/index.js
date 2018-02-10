import axios from 'axios';

const API_KEY = '1022461e43de439424516d1e4aecdd21';
//const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    console.log(city)
    const url = `${ROOT_URL}?q=${city},us&appid=${API_KEY}`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}