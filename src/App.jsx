import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import SearchPart from "./components/SearchPart";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const fetchData = async () => {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=c424c079f917e13915d2d1e53a199bbe&units=metric`;
    try {
      const response = await fetch(API);
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data); 
      } else {
        setWeatherData(null); 
      }
    } catch (err) {
      console.error(err);
      setWeatherData(null); 
    }
  };

  function handleInputChange(e) {
    setSearchInput(e.target.value);
  }

  function handleBtnClick() {
    if (searchInput) {
      fetchData();
    }
  }

  return (
    <>
      <SearchPart
        onClick={handleBtnClick}
        onChange={handleInputChange}
        value={searchInput}
      />
      {weatherData && <Card weather={weatherData} />}
      {!weatherData && searchInput && <p className="notFound">No data found for {searchInput}</p>}
    </>
  );
}

export default App;
