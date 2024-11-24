export interface IWeather {
  _id: string;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
    _id: string;
  }[];
  temp: number;
  id: number;
  name: string;
  country: string;
}
