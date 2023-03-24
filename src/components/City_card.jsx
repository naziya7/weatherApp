import React, { useState, useEffect } from 'react';
import moment from 'moment';
// import image from "../images/clear.jpg"
const City_card = (props) => {
  const [date, setDate] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment());
    }, 1000 * 60 * 60 * 24); // update once per day
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="card">
      <div id="card-img">
        <img src={props.image} alt="img" />
        <h3 id="city-condition">{props.name}</h3>
      </div>

      <div id="card-content">
        <h1>
          {props.temp}
          <sup>&#176;</sup>
        </h1>
        <div>
          <h3>{props.cityname}</h3>
          <p>{date.format('D/M/YYYY')}</p>
        </div>
      </div>
    </div>
  );
};

export default City_card;