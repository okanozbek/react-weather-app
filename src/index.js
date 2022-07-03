import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WeatherProvider from "./context/WeatherContext";
import CityProvider from "./context/CityContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CityProvider>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </CityProvider>
);
