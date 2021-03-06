import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Barcelona" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://ubiquitous-gnome-f8865b.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Itzel Gil{" "}
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/itzelgil/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
