import React from "react";

export default function ShowIcon(props) {
  const iconMapping = {
    Clear: "☀️",
    Snow: "🌨",
    Clouds: "⛅️",
    Thunderstorm: "⛈",
    Rain: "🌧",
    Mist: "🌫",
    Fog: "🌫",
    Smoke: "🌫",
    Haze: "🌫",
    Dust: "🌫",
    Sand: "🌫",
    Ssh: "🌫",
    Squal: "🌫",
    Tornado: "🌪",
  };

  return iconMapping[props.icon];
}
