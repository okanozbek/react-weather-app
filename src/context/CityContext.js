import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const CityContext = createContext();

const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState({
    id: 35,
    latitude: "38.4189",
    longitude: "27.1287",
    name: "İzmir",
    population: 4168415,
    region: "Ege",
  });
  const [loading, setLoading] = useState(false);
  const values = {
    cities,
    currentCity,
    setCurrentCity,
    loading,
  };

  const getCity = async () => {
    setLoading(true);
    await axios(
      `https://gist.githubusercontent.com/okanozbek/9a560b583b4a6af1e73f8d778ad2ed2f/raw/e128ee3495f7b967e3b9d2373b9d3bed8ff498e7/cities_of_turkey.json`
    )
      .then((res) => {
        setCities(res.data);
        setLoading(false);
        console.log("cities : ", res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCity();
  }, []);

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity = () => useContext(CityContext);

export default CityProvider;
