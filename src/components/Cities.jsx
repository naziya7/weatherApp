import React from "react";
import City_card from "./City_card";
import image1 from "../images/thunder.png";
import image2 from "../images/cloudy.png";
import image3 from "../images/sunny.jpg";
import { BsSearch } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import earth from "../images/earth.png"
import '../components/cities.css'
const Cities = (props) => {

  const setSearch = props.setSearch;
  const search = props.search;
  const data = props.data;

 

  return (
    <div id="Cities-container">
      <h1>Cities</h1>
      <div id="card-container">
        <City_card
          image={image1}
          name="Thunder"
          temp="24"
          cityname="Delhi"
          date="09/03/23"
        />
        <City_card
          image={image2}
          name="Cloudy"
          temp={parseInt(data.temp)}
          cityname={data.name}
          date="09/03/23"
        />
        <City_card
          image={image3}
          name="Sunny"
          temp="40"
          cityname="Jaipur"
          date="09/03/23"
        />
      </div>

      {/* Search Box  */}

      <div className="search-box">
        <input
          type="text"
          value={search}
          placeholder="Search city"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <span>
          <BsSearch />
        </span>
      </div>

      {/* Earth */}

      <div className="earth">
        <div className="content-overlay"></div>
        <img src={earth} className="earth-img" />
        <div className="content-details fadeIn-bottom earth-details">
          <div className="earth-content">
            <h1 style={{ fontSize: "2.5rem" }}>
              {parseInt(data.temp)}
              <sup>o</sup>
            </h1>
            <h3>{data.name}</h3>
            <span style={{ fontSize: "40px" }}>
              <FiPlus />
            </span>
          </div>
          <div className="earth-content">
            <h1 style={{ fontSize: "3rem" }}>
              {parseInt(data.temp)}
              <sup>o</sup>
            </h1>
            <h3>{data.name}</h3>
            <span style={{ fontSize: "40px" }}>
              <FiPlus />
            </span>
          </div>
          <div className="earth-content">
            <h1 style={{ fontSize: "3rem" }}>
              {parseInt(data.temp)}
              <sup>o</sup>
            </h1>
            <h3>{data.name}</h3>
            <span style={{ fontSize: "40px" }}>
              <FiPlus />
            </span>
          </div>

          <div className="earth-content">
            <h1 style={{ fontSize: "3rem" }}>
              {parseInt(data.temp)}
              <sup>o</sup>
            </h1>
            <h3>{data.name}</h3>
            <span style={{ fontSize: "40px" }}>
              <FiPlus />
            </span>
          </div>
          <div className="earth-content">
            <h1 style={{ fontSize: "3rem" }}>
              {parseInt(data.temp)}
              <sup>o</sup>
            </h1>
            <h3>{data.name}</h3>
            <span style={{ fontSize: "40px" }}>
              <FiPlus />
            </span>
          </div>
          <div className="earth-content">
            <h1 style={{ fontSize: "2.5rem" }}>
              {parseInt(data.temp)}
              <sup>o</sup>
            </h1>
            <h3>{data.name}</h3>
            <span style={{ fontSize: "40px" }}>
              <FiPlus />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
