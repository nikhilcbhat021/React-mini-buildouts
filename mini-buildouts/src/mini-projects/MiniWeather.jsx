import { useCallback } from "react";
import { useState, useEffect } from "react";
import '../App.css';

const key = `32c7301e351c4b68931161402243011`;
const aqi = `no`;

const WeatherCard = ({title, data}) => {
    return <div className="weather-cards">
        <strong>{title}</strong>
        <p>{data}</p>
    </div>
}

const WeatherCardGrid = ({city}) => {
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (city) {
            setLoading(true);
            fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=${aqi}`)
                .then(raw => {
                    return raw.json();
                })
                .then(body => {
                    if (body.error) {
                        throw new Error(body.error.message);
                    }
                    console.log(body);
                    setWeather(body.current)
                })
                .catch(err => {console.error(`Error occured in weather api - ${err}`); alert('Failed to fetch weather data')})
                .finally(() => setLoading(false));
        }
    }, [city])

    return <div className="weather-cards">
        {
            loading ? <p style={{color: 'gray'}}>Loading data...</p> : (
                weather && <>
                    <WeatherCard data={weather.temp_c} title={"Temperature"} />
                    <WeatherCard data={weather.humidity} title="Humidity" />
                    <WeatherCard data={weather.condition.text} title="Condition" />
                    <WeatherCard data={weather.wind_kph} title="Wind Speed" />
                    {aqi==='yes' && <WeatherCard data={weather.air_quality.pm2_5} title="Air Quality (pm2.5)" /> }
                </>
            )
        }
    </div>
}

const SearchBar = ({setCity}) => {
    const [input, setInput] = useState("");

    return <>
        <div style={{display: 'flex', gap: '.5rem', justifyContent: 'center'}}>
            <input style={{padding: '1rem', marginLeft:'5px', fontSize: '1.5rem'}} placeholder='Enter city name' type="text" name="city" id="city" value={input} onChange={e => setInput(e.target.value)} />
            <button style={{padding: '1rem', marginRight:'5px', fontSize: '1.5rem', backgroundColor:'darkgreen', color:'white'}} onClick={() => setCity(input)} >Search</button>
        </div>
    </>
}

const MiniWeather = () => {
    const [city, setCity] = useState("");

    return <div>
        <SearchBar setCity={setCity} />
        <WeatherCardGrid city={city} />
    </div>
};

export default MiniWeather;
