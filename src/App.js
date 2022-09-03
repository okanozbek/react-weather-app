import "./App.scss";
import CitySelect from "./components/CitySelect";
import WeatherCard from "./components/Weather";

function App() {
  return (
    <div className="App">
      <h1 className="weather__app-title">Okan's Weather APP</h1>
      <CitySelect />
      <WeatherCard />
    </div>
  );
}

export default App;
