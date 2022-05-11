import React from "react";
import FormattedDate from "./FormattedDate";
import ShowIcon from "./ShowIcon";
import WeatherTemperature from "./WeatherTemperature";

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
          <br />
          <WeatherTemperature
            celsius={props.data.temperature}
            feel={props.data.feel}
            high={props.data.high}
            low={props.data.low}
          />
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
