import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css'

import homeImg from '../assets/images/home2.jpg'



const HomePage = () => {
    return (
      <div className="home-page">
        <div className="content">
          <h5 className='header'>Welcome to Weather Forcast</h5>
          <Link to="/todays-weather" className="link-button">View Weather</Link>
        </div>
        <img src={homeImg} alt="Weather" className="weather-image" />
      </div>
    );
  };

export default HomePage;
