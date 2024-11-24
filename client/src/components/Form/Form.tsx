import { Dispatch, FC, FormEvent, SetStateAction } from "react";
import classes from "./Form.module.css";
import { Link } from "react-router-dom";

interface IFormProps {
  fetchWeather: (cityName: string) => Promise<void>;
  city: string;
  error: string;
  setCity: Dispatch<SetStateAction<string>>;
}

const Form: FC<IFormProps> = ({ city, setCity, error, fetchWeather }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <form
      className={classes.wrapperForm}
      onSubmit={handleSubmit}>
      <div className={classes.input}>
        <label>Enter the city</label>
        <input
          type="text"
          placeholder="Start entering the name of the city"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        {error && <span className={classes.error}>{error}</span>}
      </div>
      <button type="submit">Submit</button>

      <Link to="/list">Show history</Link>
    </form>
  );
};

export default Form;
