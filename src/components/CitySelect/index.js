import { useCity } from '../../context/CityContext';

const CitySelect = () => {
  const { setCurrentCity, currentCity, cities, loading } = useCity();

  const handleSelect = (e) => {
    cities.filter((city) => {
      return city.id === Number(e.target.value) && setCurrentCity(city);
    });
  };

  return (
    <div className="weather__select-city">
      <h5>Select City</h5>
      <select onChange={(e) => handleSelect(e)}>
        {!loading ? (
          cities.map((data) => (
            <option selected={data.id === 35} value={data.id} key={data.id}>
              {data.name}
            </option>
          ))
        ) : (
          <>
            <option value={currentCity.id}>{currentCity.name}</option>
          </>
        )}
      </select>
    </div>
  );
};

export default CitySelect;
