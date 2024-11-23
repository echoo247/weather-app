import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherModule } from './weather/weather.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://btihovic:rpSPnDaWeWh5zw86@cluster0.ywid4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    WeatherModule,
    HttpModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
