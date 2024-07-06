// src/components/TemperatureChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TemperatureChart = ({ forecast }) => {
  if (!forecast || !Array.isArray(forecast)) {
    return <div>No forecast Dfata available</div>;
  }

  // Adjust the mapping if necessary based on the data structure
  const chartData = forecast.slice(0, 7).map((day, index) => ({
    day: `Day ${index + 1}`,
    temperature: day.temperature.day,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TemperatureChart;
