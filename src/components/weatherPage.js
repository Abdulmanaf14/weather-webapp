import React, { useState, useEffect } from 'react';
import './weather.css';
import fetchWeatherForecast from '../api-services/api-service'; 

const WeatherPage = () => {
  const [forecastData, setForecastData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('Bangalore');
  const [apiError, setApiError] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherForecast(searchTerm); // Fetch data based on searchTerm
        setForecastData(data); // Update forecastData with new data
        setApiError(false); 
      } catch (error) {
        setApiError(true); 
        console.log("error", error);
      }
    };

    fetchData();
  }, [searchTerm]); // Update useEffect dependency to re-run when searchTerm changes

  const getLocationName = () => {
    if (forecastData && forecastData.location) {
      const nameParts = forecastData.location.name.split(',');
      return nameParts[0].trim();
    }
    return '';
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Update searchTerm state with the new value from the input
    setSearchTerm(event.target.elements.searchTerm.value);
  };

  return (
    <div className="outer">
      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <input style={{padding:"9px"}}
            type="text"
            placeholder="Search Location"
            defaultValue={searchTerm} // Set default value to searchTerm
            name="searchTerm"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>

      {apiError && (
        <div className="error">
          <div class="error"> Server Error </div>
        </div>
      )}

      {forecastData && !apiError && (
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
