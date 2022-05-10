import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "",
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      feel: Math.round(response.data.main.feels_like),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <h1 className="cityName">{weatherData.city}</h1>
            <p>Monday | May 9, 2022 | 18:22</p>
          </div>
          <div className="col-6">
            <form className="d-flex">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />

              <input type="submit" value="Search" className="btn btn-primary" />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h2 className="icon">⛅️</h2>
            <h3 className="description">{weatherData.description}</h3>
          </div>
          <div className="col-6">
            <span className="currentTemp">{weatherData.temperature}</span>
            <span className="degrees">ºC</span>

            <h5>Feels like {weatherData.feel}ºC</h5>
            <p>
              H: {weatherData.high}º L: {weatherData.low}º
            </p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12">
            <p>Humidity: {weatherData.humidity}%</p>
            <p>Wind speed: {weatherData.wind} km/h</p>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `a58132974e1508fb139cd5dab2b170ec`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
