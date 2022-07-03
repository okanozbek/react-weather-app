import React, { memo } from "react";

const WeatherCard = ({ ...props }) => {
  return (
    <div className={props?.className}>
      <h4 className="weather__card-title">{props?.day}</h4>

      {props?.loading ? (
        <div className={"loading__wrapper"}>
          <div className="loading"></div>
        </div>
      ) : (
        <img
          alt={props?.weather?.weather[0].description}
          src={`http://openweathermap.org/img/wn/${props?.weather?.weather[0].icon}@2x.png`}
        />
      )}
      <p className="weather__card-desc">
        {props?.weather?.weather[0].description}
      </p>
      <p className="weather__card-temp">
        {`${Math.floor(props?.weather?.temp?.max)}°C`}{" "}
        <small>{`${Math.floor(props?.weather?.temp.min)}°C`}</small>
      </p>
    </div>
  );
};

export default memo(WeatherCard);
