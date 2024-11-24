import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { IWeather } from "../../model/weather.types.ts";
import classes from "./MainPage.module.css";
import Form from "../../components/Form/Form.tsx";
import WeatherItem from "../../components/WeatherItem/WeatherItem.tsx";
import {
  getWeatherFromCache,
  saveWeatherToCache,
} from "../../utils/cacheWeather.ts";

const { VITE_API_URL } = import.meta.env;

const MainPage = () => {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const fetchWeather = async (cityName: string) => {
    if (!cityName.trim()) {
      setError("Please enter a city.");
      return;
    }

    const cachedWeather = getWeatherFromCache(cityName);
    if (cachedWeather) {
      setWeather(cachedWeather);
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response: AxiosResponse<IWeather> = await axios.get(
        `${VITE_API_URL}/weather?city=${cityName}`
      );
      setWeather(response.data);
      saveWeatherToCache(cityName, response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errorResponse = err.response;
        if (errorResponse) {
          const errorMessage = errorResponse.data?.message;
          setError(errorMessage || "An unknown error occurred");
        } else {
          setError("Network error");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("Kyiv");
  }, []);

  return (
    <div className={classes.main}>
      <div>
        {Boolean(loading || weather) && weather && (
          <WeatherItem
            main={weather.weather[0].main}
            icon={weather.weather[0].icon}
            description={weather.weather[0].description}
            country={weather.country}
            temp={weather.temp}
            name={weather.name}
          />
        )}
      </div>
      <Form
        city={city}
        error={error}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />
    </div>
  );
};

export default MainPage;
