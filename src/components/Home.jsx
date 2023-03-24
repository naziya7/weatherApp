import React, { useState, useEffect } from 'react';
import './home.css'
import moment from 'moment';
import iconurl from '../images/Vector.png'

const Home = (props) => {
  const [date, setDate] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment());
    }, 1000); // update every second
    return () => clearInterval(interval);
  }, []);
  const data = props.data;
  // console.log(data);
  return (
    <div id="home-container">
      {/* Navbar  start */}
      <div id="navbar">
        <ul id="list">
          <li>Home</li>
          <li>Cities</li>
          <li>News</li>
        </ul>
      </div>
  
      <div id="details-box">
        <ul class="details">
          <h2>Weather Details</h2>
          <li>
            <span>Cloudy</span>
            <span>{data.clouds}%</span>
          </li>
          <li>
            <span>Humidity</span>
            <span>{data.humidity}%</span>
          </li>
          <li>
            <span>Wind</span>
            <span>{data.wind}km/h</span>
          </li>
        </ul>
      </div>

      <div id="temp-details">
        <div>
          <h1 class="temp">{parseInt(data.temp )}&#176;</h1>
          <div class="city-time">
            <h1 class="name">{ data.name}</h1>
            <small>
              <span class="time">{date.format('LT')}</span>
              <span class="date">{date.format('dddd D/M/YYYY')}</span>
            </small>
          </div>
        </div>
        <div class="weather">
          <img 
            src={iconurl}
            alt="icon"
            class="icon"
            // width="20"
            // height="20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;