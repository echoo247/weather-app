import { IWeather } from "../model/weather.types.ts";

const CACHE_EXPIRY_MS = 60 * 60 * 1000;

export const getWeatherFromCache = (cityName: string) => {
  const cacheKey = `weather_${cityName.toLowerCase()}`;
  const cachedWeather = localStorage.getItem(cacheKey);

  if (cachedWeather) {
    const parsedCache = JSON.parse(cachedWeather);

    if (Date.now() - parsedCache.timestamp < CACHE_EXPIRY_MS) {
      return parsedCache.data;
    } else {
      localStorage.removeItem(cacheKey);
    }
  }

  return null;
};

export const saveWeatherToCache = (cityName: string, data: IWeather) => {
  const cacheKey = `weather_${cityName.toLowerCase()}`;
  localStorage.setItem(
    cacheKey,
    JSON.stringify({ data, timestamp: Date.now() })
  );
};

export const removeExpiredCache = () => {
  const allKeys = Object.keys(localStorage);

  allKeys.forEach(key => {
    if (key.startsWith("weather_")) {
      const cachedData = localStorage.getItem(key);
      if (cachedData) {
        const parsedCache = JSON.parse(cachedData);
        if (Date.now() - parsedCache.timestamp > CACHE_EXPIRY_MS) {
          localStorage.removeItem(key);
        }
      }
    }
  });
};

setInterval(removeExpiredCache, 60 * 60 * 1000);
