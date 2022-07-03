import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useCity } from "./CityContext";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentDay, setCurrentDay] = useState("");
  const { currentCity } = useCity();
  const apiKey = "14cec8cbc9dc8d620bb3af62c387c6aa";

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const values = {
    weather,
    setWeather,
    currentDay,
    days,
    apiKey,
    setLoading,
    loading,
  };

  const getWeather = async () => {
    setLoading(true);
    await axios
      .get(`https://api.openweathermap.org/data/2.5/onecall`, {
        params: {
          lat: currentCity?.latitude,
          lon: currentCity?.longitude,
          exclude: "hourly,minutely,alerts",
          units: "metric",
          appid: apiKey,
        },
      })
      .then((res) => {
        setWeather(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getWeather();
  }, [currentCity]);

  useEffect(() => {
    days.filter((item, index) => {
      if (index === new Date().getDay()) {
        setCurrentDay(item);
      }
    });
  }, []);

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);

export default WeatherProvider;
