import React, { useState, useEffect } from "react";
import WeatherCard from "../Card";
import { useWeather } from "../../../context/WeatherContext";
import { useCity } from "../../../context/CityContext";

const WeatherList = () => {
  const { weather, days, currentDay, loading } = useWeather();
  const { currentCity } = useCity();
  return (
    <>
      <div className="weather__card_container">
        {weather?.daily?.map((item) => (
          <>
            <WeatherCard
              day={days[new Date(item?.dt * 1000).getDay()]}
              currentDay={currentDay}
              weather={item}
              loading={loading}
              className={`weather__card`}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default WeatherList;
