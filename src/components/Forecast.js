// src/components/Forecast.js
import React from 'react';
import './Forecast.css';

import { Card, CardContent, Typography, Grid, Paper } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Forecast = ({ forecast }) => {
  if (!forecast || !Array.isArray(forecast)) {
    return <div>No forecast data available</div>;
  }

  const data = forecast.slice(0, 7).map((day, index) => ({
    day: `Day ${index + 1}`,
    temperature: day.temperature.day,
  }));

  return (
    <div className="forecast">
      <Typography variant="h4" gutterBottom>7-Day Forecast</Typography>
      <Grid container spacing={2}>
        {forecast.slice(0, 7).map((day, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{`Day ${index + 1}`}</Typography>
                {day.condition.icon_url && (
                  <img
                    src={day.condition.icon_url}
                    alt={day.condition.description}
                    style={{ width: '50px', height: '50px' }}
                  />
                )}
                <Typography variant="body1">
                  {Math.round(day.temperature.minimum)}°/ <span>{Math.round(day.temperature.maximum)}°</span>
                </Typography>
                <Typography variant="body2">Weather: {day.condition.description}</Typography>
                <Typography variant="body2">Humidity: {day.temperature.humidity}%</Typography>
                <Typography variant="body2">Wind Speed: {day.wind.speed} m/s</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography style={{marginTop:'20px'}} variant="h4" gutterBottom>Temperature Trends</Typography>
      <Paper style={{ padding: '16px', marginTop: '16px' }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </div>
  );
};

export default Forecast;
