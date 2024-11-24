import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Weather } from '../schemas/weather.schema';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { WeatherDto } from '../dto';

@Injectable()
export class WeatherService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Weather.name) private weatherModel: Model<Weather>,
  ) {}

  async getWeather(city: string): Promise<any> {
    try {
      const resWeather: AxiosResponse<WeatherDto> = await this.httpService
        .get(
          `${process.env.API_URL_WEATHER}/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`,
        )
        .toPromise();

      const weatherData = resWeather.data;
      const weatherToSave = new this.weatherModel({
        weather: weatherData.weather,
        id: weatherData.id,
        name: weatherData.name,
        country: weatherData.sys.country,
        temp: weatherData.main.temp,
      });

      await weatherToSave.save();
      return weatherToSave;
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        throw new HttpException(
          err.response.data.message && 'city not found',
          HttpStatus.NOT_FOUND,
        );
      } else {
        console.log(err);
        throw new HttpException(
          'Something went wrong',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async getAllWeather(): Promise<Weather[]> {
    return this.weatherModel.find().sort({ createdAt: -1 }).limit(100).exec();
  }
}
