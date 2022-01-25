const API_URL_WEATHER = process.env.REACT_APP_API_URL_WEATHER


export class GetWeathers {
    static getWeather(cityName) {
        // return fetch(`${API_URL_WEATHER}/posts?_limit=${limit}&_page=${page}`)
        return fetch(`${API_URL_WEATHER}/weather?q=${cityName}&appid=886705b4c1182eb1c69f28eb8c520e20`)
    }
}


// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}