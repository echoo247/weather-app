import useWeatherData from "../../hooks/useWeatherData";
import CityItem from "../../components/CityItem/CityItem.tsx";
import classes from "./ListPage.module.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/ArrowLeft.svg";

const ListPage = () => {
  const { weather, loading } = useWeatherData();

  return (
    <div className={classes.container}>
      <div className={classes.wrapperLink}>
        <Link to="/">
          <img
            src={arrow}
            alt="Back"
          />
        </Link>
        <h2>Weather History</h2>
      </div>

      <div className={classes.weatherList}>
        {weather.map(el => (
          <CityItem
            key={el._id}
            name={el.name}
            country={el.country}
            temp={el.temp}
            description={el.weather[0].description}
            icon={el.weather[0].icon}
          />
        ))}
      </div>

      {weather && !loading && (
        <p className={classes.endMessage}>No more data available</p>
      )}
      {loading && <p className={classes.loadingMessage}>Loading...</p>}
    </div>
  );
};

export default ListPage;
