import React, { useEffect, useState } from "react";
import Cities from "./components/Cities";
import Home from "./components/Home";
import News from "./components/News";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState({
    clouds: undefined,
    humidity: undefined,
    wind: undefined,
    name: undefined,
    temp: undefined,
    date: undefined,
    icon: undefined,
  });
  const [search, setSearch] = useState("Mumbai");
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ed23fbb154659399265499dba92d629b`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const items = await response.json();

      setData({
        clouds: items.clouds ? items.clouds.all : undefined,
        humidity: items.main ? items.main.humidity : undefined,
        wind: items.wind ? items.wind.speed : undefined,
        name: items.name,
        temp: items.main ? items.main.temp : undefined,
        icon: items.weather && items.weather.length > 0 ? items.weather[0].icon : undefined,
      });
      setError(null);
    } catch (err) {
      setError(err.message);
      setData({
        clouds: undefined,
        humidity: undefined,
        wind: undefined,
        name: undefined,
        temp: undefined,
        date: undefined,
        icon: undefined,
      });
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  console.log(data);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <Home data={data} />
      <Cities setSearch={setSearch} search={search} data={data} />
      <News />
      <Footer />
    </div>
  );
};

export default App;
