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

  const getData = async () => {
    const response = await fetch(
     `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a68a67ff52f8dcafe0829d6bd36c6ca9`
    );

    const items = await response.json();
    setData({
      clouds: items.clouds.all,
      humidity: items.main.humidity,
      wind: items.wind.speed,
      name: items.name,
      temp: items.main.temp,
      icon: items.weather[0].icon,
    });
  };
  useEffect(() => {
    getData();
  }, [search]);

  console.log(data);

  return (
    <div>
      <Home data={data} />
      <Cities setSearch={setSearch} search={search} data={data} />
      <News />
      <Footer />
    </div>
  );
};

export default App;