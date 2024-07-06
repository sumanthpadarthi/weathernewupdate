// src/components/CurrentWeather.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CurrentWeather = ({ weather }) => {
  console.log('Current weather data:', weather);

  if (!weather || !weather.temperature || !weather.condition) {
    return <div>No weather data available</div>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{weather.city}</Typography>
        <Typography variant="h6">{weather.condition.description}</Typography>
        <Typography variant="body1">Temperature: {weather.temperature.current} °C</Typography>
        <Typography variant="body1">Humidity: {weather.temperature.humidity} %</Typography>
        <Typography variant="body1">Wind Speed: {weather.wind.speed} m/s</Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
