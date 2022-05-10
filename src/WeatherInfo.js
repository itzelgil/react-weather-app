import React from "react";
import FormattedDate from "./FormattedDate";
import ShowIcon from "./ShowIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <h1 className="cityName">{props.data.city}</h1>
        <p>
          <FormattedDate date={props.data.date} />
        </p>
      </div>
      <div className="row">
        <div className="col-6">
          <h2 className="icon">
            <ShowIcon icon={props.data.icon} />
          </h2>
          <h3 className="description">{props.data.description}</h3>
        </div>
        <div className="col-6">
          <span className="currentTemp">{props.data.temperature}</span>
          <span className="degrees">ºC</span>

          <h5>Feels like {props.data.feel}ºC</h5>
          <p>
            H: {props.data.high}º L: {props.data.low}º
          </p>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12">
          <p>Humidity: {props.data.humidity}%</p>
          <p>Wind speed: {props.data.wind} km/h</p>
        </div>
      </div>
    </div>
  );
}
