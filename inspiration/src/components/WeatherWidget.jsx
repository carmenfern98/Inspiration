/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react"
import React from "react"
import { getWeatherByCoords } from "../../utils/weatherapi";
import styled from '@emotion/styled';

const TemperatureText = styled.h2`
    color: #FFFFFF;
    font-family: 'Rubik', sans-serif;
`
const WeatherText = styled.h3`
    color: #FFFFFF;
    font-family: 'Rubik', sans-serif;
`
const WeatherTextContainer = styled.div`
`
const WeatherContainer = styled.div`
display: flex;
justify-content: end;
`

export const WeatherWidget = () => {
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
const apiKey = '7192a1e295f4ffed224ee81c88e50340';

    useEffect(()=>{
        if(!navigator.geolocation){
            console.error('Geolocation is not supported by your browser.');
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {latitude, longitude } = position.coords;
                setLocation({lat:latitude, lon: longitude})
            },
        (error) => {
            console.error('Error getting location', error)}
        )
    }, []);

    useEffect(()=>{
        if(!location) return;
        console.log('Location detected', location)
        setLoading(true);
        setError(null);

        getWeatherByCoords(location.lat, location.lon, apiKey)
        .then(data =>{
            console.log('Weather data', data);
            setWeather(data);
            setLoading(false)
        })
        .catch(err=>{
            setError(err.message);
            setLoading(false)
        })

        }, [location])






return(
    <div>
    {weather && weather.main && weather.weather && weather.weather[0]? (
    <WeatherContainer>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
        <WeatherTextContainer>
        <TemperatureText>{weather.main.temp}°C</TemperatureText>
        <WeatherText>{weather.weather[0].description}</WeatherText>
        </WeatherTextContainer>
    </WeatherContainer>
    ) : (!loading && <p>No weather data available</p>)
    }
    </div>
)
}