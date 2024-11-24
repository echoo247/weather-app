import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { IWeather } from "../model/weather.types.ts";

const useWeatherData = () => {
  const [weather, setWeather] = useState<IWeather[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeather = async () => {
    try {
      setLoading(true);

      const response: AxiosResponse<IWeather[]> = await axios.get(
        `${import.meta.env.VITE_API_URL}/weather/all`
      );

      const newWeather = response.data;
      setWeather(newWeather);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return { weather, loading };
};

export default useWeatherData;
