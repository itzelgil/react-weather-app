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
        <span className="celsius">
          ºC {""}
          <a href="/" onClick={showFahrenheit} className="degrees">
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
        <span className="currentTemp">
          {Math.round(fahrenheit())}
          <span className="celsius">
            <a href="/" onClick={showCelsius} className="degrees">
              ºC{" "}
            </a>{" "}
            | ºF
          </span>
        </span>

        <h5 className="feelsLike">
          Feels like {Math.round(fahrenheitFeel())}ºC
        </h5>
        <p className="high-low">
          H: {Math.round(fahrenheitHigh())}º L: {Math.round(fahrenheitLow())}º
        </p>
      </div>
    );
  }
}
