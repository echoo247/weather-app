import classes from "./CityItem.module.css";
import { FC } from "react";
import WrapperImg from "../WrapperImg/WrapperImg.tsx";

interface CityItemProps {
  name: string;
  country: string;
  temp: number;
  description: string;
  icon: string;
}

const CityItem: FC<CityItemProps> = ({
  icon,
  country,
  temp,
  name,
  description,
}) => {
  return (
    <div className={classes.weatherCard}>
      <div className={classes.weatherInfo}>
        <span className={classes.title}>
          {name}, {country}
        </span>
        <span className={classes.description}>{description}</span>
      </div>
      <div className={classes.weatherDescription}>
        <span className={classes.temp}>{Math.round(temp)}°</span>

        <WrapperImg
          src={`${import.meta.env.VITE_API_URL_WEATHER}/img/wn/${icon}.png`}
          alt={description}
          width={50}
          height={50}
          className={classes.img}
        />
      </div>
    </div>
  );
};

export default CityItem;
