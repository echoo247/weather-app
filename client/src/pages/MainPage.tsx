import { useState } from "react";
import axios from "axios";

const { VITE_API_URL_WEATHER, VITE_API_URL } = import.meta.env;
const MainPage = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const fetchWeather = async () => {
    const response = await axios.get(`${VITE_API_URL}/weather?city=${city}`);
    console.log("response", response);
    setWeather(response.data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Submit</button>

      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>{weather.temp} °C</p>
          <p>{weather.weather[0].description}</p>
          <p>{weather.weather[0].main}</p>
          <img
            src={`${VITE_API_URL_WEATHER}/img/wn/${weather.weather[0].icon}.png`}
            alt="Weather"
          />
        </div>
      )}
    </div>
  );
};

export default MainPage;
