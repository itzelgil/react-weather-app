import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    // console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: formatDate(response.data.timezone),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      feel: Math.round(response.data.main.feels_like),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = `a58132974e1508fb139cd5dab2b170ec`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function formatDate(timezone) {
    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    return new Date(utc + 1000 * timezone);
  }

  function getCoords(event) {
    event.preventDefault();

    return navigator.geolocation.getCurrentPosition(findLocation);
  }

  function findLocation(position) {
    console.log(findLocation);
    let apiKey = `a58132974e1508fb139cd5dab2b170ec`;
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="justify-content-evenly Weather">
        <div className="row">
          <form className="d-flex" onSubmit={handleSubmit}>
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
            <div className="col-1">
              <button
                className="button location-btn gpsIconButton"
                onClick={getCoords}
              >
                <FontAwesomeIcon icon={faLocationDot} className="gpsIcon" />
              </button>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <hr className="line" />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
