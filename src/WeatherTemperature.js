import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function fahrenheitFeel() {
    return (props.feel * 9) / 5 + 32;
  }

  function fahrenheitHigh() {
    return (props.high * 9) / 5 + 32;
  }

  function fahrenheitLow() {
    return (props.low * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="currentTemp">{props.celsius}</span>
        <span className="degrees">
          ºC |{" "}
          <a href="/" onClick={showFahrenheit}>
            ºF
          </a>
        </span>
        <br />

        <h5>Feels like {props.feel}ºC</h5>
        <p>
          H: {props.high}º L: {props.low}º
        </p>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="currentTemp">{Math.round(fahrenheit())}</span>
        <span className="degrees">
          <a href="/" onClick={showCelsius}>
            ºC{" "}
          </a>{" "}
          | ºF
        </span>

        <h5>Feels like {Math.round(fahrenheitFeel())}ºC</h5>
        <p>
          H: {Math.round(fahrenheitHigh())}º L: {Math.round(fahrenheitLow())}º
        </p>
      </div>
    );
  }
}
