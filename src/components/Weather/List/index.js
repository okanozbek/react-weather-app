import WeatherCard from '../Card';
import { useWeather } from '../../../context/WeatherContext';

const WeatherList = () => {
  const { weather, days, currentDay, loading } = useWeather();
  return (
    <>
      <div className="weather__card_container">
        {weather?.daily?.map((item, index) => (
          <WeatherCard
            day={days[new Date(item?.dt * 1000).getDay()]}
            currentDay={currentDay}
            weather={item}
            key={index}
            loading={loading}
            className={`weather__card`}
          />
        ))}
      </div>
    </>
  );
};

export default WeatherList;
