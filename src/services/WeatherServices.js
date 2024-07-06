
import axios from 'axios';

const API_KEY = 'b03a640e5ef6980o4da35b006t5f2942';
const BASE_URL = 'https://api.shecodes.io/weather/v1';

const getWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/current`, {
      params: {
        query: city,
        key: API_KEY,
        units: 'metric',
      },
    });
    console.log('Weather data response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('Failed to fetch weather data');
  }
};

const getForecastData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        query: city,
        key: API_KEY,
        units: 'metric',
      },
    });
    console.log('Forecast data response:', response.data.daily);
    return response.data.daily;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw new Error('Failed to fetch forecast data');
  }
};

export { getWeatherData, getForecastData };
