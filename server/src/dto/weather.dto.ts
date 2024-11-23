export interface WeatherDto {
  coord: { lon: number; lat: number };
  weather: { id: number; main: string; description: string; icon: string }[];
  main: { temp: number };
  id: number;
  name: string;
  cod: number;
  sys: { country: string };
}
