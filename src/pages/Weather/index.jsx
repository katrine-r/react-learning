import { useEffect, useState } from "react"
import Input from "../../component/UI/Input"
import { useFetching } from '../../hooks/useFetching'
import { GetWeathers } from '../../api/Weather'

const Weather = () => {

    const [cityName, setCityName] = useState('')
    const [weather, setWeather] = useState([])

    const [fetching, isLoading, error] = useFetching(async () => {
        const response = await GetWeathers.getWeather(cityName)
        const weatherGet = await response.json()
        setWeather(weatherGet)
      })

      console.log('weather', weather);


    const handleSubmitWeather = (ev) => {
        ev.preventDefault()
        fetching()
    }
    console.log('cityName', cityName);

    return (
        <>
            <h1>Weather</h1>
            <form onSubmit={handleSubmitWeather}>
                <Input type='text' onChange={(ev) => setCityName(ev.target.value)} />
                {weather?.main?.temp}
            </form>

        </>
    )
}

export default Weather