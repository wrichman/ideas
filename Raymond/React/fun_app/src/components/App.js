// this is a weather api app

import React, { useRef } from "react";
import "../index.css";
import Clock from "./Clock";

function App() {
  let temp = useRef();
  
  function getLocation() {
    const successCallback = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeather(lat, lon);
    };
    const errorCallback = (error) => {
      console.log(error);
    };
    return navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }

  async function getWeather(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=923759f58546335644999ad6f712c2ad&units=metric`)
    const data = await response.json();
    console.log(data);
    temp.current.textContent = `${Math.round(data.main.temp)}°C`;
  }

  async function handleClick() {
    getLocation();
  }
  return (
    <div className="">
      <div className="bg-blue-500 m-auto text-center text-white rounded mb-5">
        <h1 className="text-black text-4xl">
          Welcome!
        </h1>
        <p className="text-2xl text-gray-200">
          Need to know the weather for your next big adventure?
        </p>
      </div>
      <Clock />
      <div className="text-center">
        <button onClick={handleClick} className="px-4 py-2 bg-gray-500 text-white rounded mb-5">
          Generate my weather
        </button>
        <div ref={temp} className="font-bold text-5xl">
  
        </div>
      </div>
    </div>
  );
}

export default App;