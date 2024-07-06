// src/components/Forecast.js
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import OpacityIcon from '@mui/icons-material/Opacity';
import GrainIcon from '@mui/icons-material/Grain';

const Forecast = ({ forecast }) => {
  console.log('Forecast data:', forecast);

  if (!forecast || !Array.isArray(forecast)) {
    return <div>No forecast data available</div>;
  }

  const getWeatherIcon = (description) => {
    switch (description) {
      case 'clear sky':
        return <WbSunnyIcon />;
      case 'overcast clouds':
      case 'broken clouds':
      case 'scattered clouds':
        return <CloudIcon />;
      case 'rain':
      case 'shower rain':
        return <OpacityIcon />;
      case 'snow':
        return <GrainIcon />;
      default:
        return <CloudIcon />;
    }
  };

  return (
    <Grid container spacing={2}>
      {forecast.map((day, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">Day {index + 1}</Typography>
              <Typography variant="body1">Temp: {day.temperature.day} °C</Typography>
              <Typography variant="body1">Min Temp: {day.temperature.minimum} °C</Typography>
              <Typography variant="body1">Max Temp: {day.temperature.maximum} °C</Typography>
              <Typography variant="body1">Weather: {day.condition.description} {getWeatherIcon(day.condition.description)}</Typography>
              <Typography variant="body1">Humidity: {day.temperature.humidity} %</Typography>
              <Typography variant="body1">Wind Speed: {day.wind.speed} m/s</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Forecast;

