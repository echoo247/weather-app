export interface WeatherDto {
  weather: { id: number; main: string; description: string; icon: string }[];
  main: { temp: number };
  id: number;
  name: string;
  sys: { country: string };
}
