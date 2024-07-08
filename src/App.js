import React, { useState } from "react";
import Forecast from "./components/Forecast";
import CurrentWeather from "./components/CurrentWeather";
import { getWeatherData, getForecastData } from "./services/WeatherServices";
import { Button, TextField, Container, Typography, Alert } from "@mui/material";
import './App.css';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      setError(null); // Clear previous errors
      const weatherData = await getWeatherData(city);
      setCurrentWeather(weatherData);

      const forecastData = await getForecastData(city);
      setForecast(forecastData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data. Please check the city name and try again.");
    }
  };

  return (
    <div className="background">
      <Container>
        <div className="center-container">
          <Typography variant="h4" gutterBottom>
           Sai Weather Dashboard
          </Typography>
          <div className="search-container">
            <TextField
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              variant="outlined"
              style={{ marginRight: '8px' }}
            />
            <Button variant="contained" onClick={fetchWeatherData}>
              Know your Weather
            </Button>
          </div>
        </div>
        {error && (
          <Alert severity="error" style={{ marginTop: '16px' }}>
            {error}
          </Alert>
        )}
        {currentWeather && <CurrentWeather weather={currentWeather} />}
        {forecast && <Forecast forecast={forecast} />}
      </Container>
    </div>
  );
};

export default App;
