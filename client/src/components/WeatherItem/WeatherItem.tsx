import WrapperImg from "../WrapperImg/WrapperImg.tsx";
import classes from "./WeatherItem.module.css";
import { FC } from "react";

interface WeatherItemProps {
  icon: string;
  main: string;
  name: string;
  country: string;
  temp: number;
  description: string;
}

const WeatherItem: FC<WeatherItemProps> = ({
  icon,
  temp,
  name,
  main,
  description,
  country,
}) => {
  return (
    <>
      <WrapperImg
        src={`${import.meta.env.VITE_API_URL_WEATHER}/img/wn/${icon}.png`}
        alt={main}
        width={280}
        height={280}
        className={classes.img}
      />

      <div className={classes.info}>
        <h3 className={classes.name}>
          {name}, {country}
        </h3>
        <h2 className={classes.temp}>{Math.round(temp)}°</h2>
        <p className={classes.description}>
          {description} ({main})
        </p>
      </div>
    </>
  );
};

export default WeatherItem;
