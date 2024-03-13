import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/homePage';
import WeatherPage from './components/weatherPage';

const App = () => {
  return (
    <Router>
    <div>


      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/todays-weather" element={<WeatherPage />} />
       
      </Routes>
    </div>
  </Router>
  );
};

export default App;
