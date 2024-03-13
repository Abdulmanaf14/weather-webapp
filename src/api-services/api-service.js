// api-service.js
import axios from 'axios';

const apiKey = 'W3SmwArtzeo4UTd3F5qOhFK28Yye82h3';
const apiUrl = 'https://api.tomorrow.io/v4/weather/realtime';

const fetchWeatherForecast = async (location) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        location: location,
        apikey: apiKey
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather forecast: ', error);
    throw error;
  }
};

export default fetchWeatherForecast;

