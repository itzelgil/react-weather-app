import axios from "axios";
import React from "react";
import ShowIcon from "./ShowIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `a58132974e1508fb139cd5dab2b170ec`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <ShowIcon icon="01d" />
          <div className="WeatherForecast-temps">
            <span className="WeatherForecast-temp-max">19º</span>
            <span className="WeatherForecast-temp-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
