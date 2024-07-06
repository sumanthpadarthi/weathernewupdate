// src/App.js
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { getWeatherData, getForecastData } from './services/WeatherServices';
import TemperatureChart from './components/TemperatureChart';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = async (city) => {
    try {
      const weatherData = await getWeatherData(city);
      const forecastData = await getForecastData(city);
      setWeather(weatherData); // Assuming weatherData is an object with current weather details
      setForecast(forecastData.list); // Assuming forecastData.list is an array of forecast details
    } catch (error) {
      console.error(error.message);
      alert('Failed to fetch weather data. Please try again.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Weather Dashboard
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {weather && <CurrentWeather weather={weather} />}
      {forecast && (
        <>
          <Forecast forecast={forecast} />
        </>
      )}
    </Container>
    
  );
}

export default App;
