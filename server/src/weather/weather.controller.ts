import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { InjectModel } from '@nestjs/mongoose';
import { Weather } from '../schemas/weather.schema';
import { Model } from 'mongoose';

@Controller('weather')
export class WeatherController {
  constructor(
    private readonly weatherService: WeatherService,
    @InjectModel(Weather.name) private weatherModel: Model<Weather>,
  ) {}

  @Get()
  async getWeather(@Query('city') city: string) {
    return this.weatherService.getWeather(city);
  }

  @Get('all')
  async getAllWeather(): Promise<Weather[]> {
    return await this.weatherService.getAllWeather();
  }
}
