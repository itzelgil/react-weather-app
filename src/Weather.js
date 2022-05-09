import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1>BARCELONA</h1>
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
          <h3>Few Clouds</h3>
        </div>
        <div className="col-6">
          <span className="currentTemp">21</span>
          <span className="degrees">ºC</span>

          <h5>Feels like 21ºC</h5>
          <p>H: 26º L: 19º</p>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12">
          <p>Humidity: 60%</p>
          <p>Wind speed: 4 km/h</p>
        </div>
      </div>
    </div>
  );
}
