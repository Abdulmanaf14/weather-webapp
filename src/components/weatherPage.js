import React, { useState, useEffect } from 'react';
import './weather.css'
import fetchWeatherForecast from '../api-services/api-service'; 

const WeatherPage = () => {
 

  const [forecastData, setForecastData] = useState(null);
  // const location = 'bangalore'; // Example location

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherForecast(location);
        setForecastData(data);

      } catch (error) {
        console.log("error codeedeeeeeeeeeee",error)
        
      }
    };

    fetchData('bangalore');
  }, []);
  console.log("to inte",forecastData);

  const getLocationName = () => {
    if (forecastData && forecastData.location) {
      const nameParts = forecastData.location.name.split(','); // Split the string by comma
      return nameParts[0].trim(); // Take the first part and remove leading/trailing spaces
    }
    return ''; // Default value if forecastData or location is not available
  };






const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('Bangalore');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    console.log("locationnnnn",searchTerm);
    fetchWeatherForecast(searchTerm);
  };




  return (

    
    <div className="outer">
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Search Location"
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};
  return (
    


    <div class="outer">

<SearchBar onSearch={(searchTerm) => console.log('Search term:', searchTerm)} />
{forecastData == undefined && (
        <div className="error">
       	<div class="error"> ServerError </div>
        </div>
      )}
     {forecastData && (
        <div className="card">
          <h2>{getLocationName()} <br/>{new Date(forecastData.data.time).toLocaleDateString()}</h2>
          <h3>Cloudy<span>Wind {forecastData.data.values.windSpeed}km/h <span className="dot">•</span> Precip {forecastData.data.values.precipitationProbability}%</span></h3>
          <h1>{Math.round(forecastData.data.values.temperature)}°</h1>
          <div className="sky">
              <div className="sun"></div>
              <div className="cloud">
                  <div className="circle-small"></div>
                  <div className="circle-tall"></div>
                  <div className="circle-medium"></div>
              </div>
          </div>
          <table>
              <tbody>
                  <tr>
                      <td>TUE</td>
                      <td>WED</td>
                      <td>THU</td>
                      <td>FRI</td>
                      <td>SAT</td>
                  </tr>
                  <tr>
                      <td>30°</td>
                      <td>34°</td>
                      <td>36°</td>
                      <td>34°</td>
                      <td>37°</td>
                  </tr>
                  <tr>
                      <td>17°</td>
                      <td>22°</td>
                      <td>19°</td>
                      <td>23°</td>
                      <td>19°</td>
                  </tr>
              </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
