import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsNumber, IsArray } from 'class-validator';

@Schema({ timestamps: true })
export class Weather extends Document {
  @IsArray()
  @Prop({
    type: [
      {
        id: { type: Number, required: true },
        main: { type: String, required: true },
        description: { type: String, required: true },
        icon: { type: String, required: true },
      },
    ],
    required: true,
  })
  weather: { id: number; main: string; description: string; icon: string }[];

  @IsNumber()
  @Prop({ required: true })
  id: number;

  @IsString()
  @Prop({ required: true })
  name: string;

  @IsString()
  @Prop({ required: true })
  country: string;

  @IsNumber()
  @Prop({ required: true })
  temp: number;
}

export const WeatherSchema = SchemaFactory.createForClass(Weather);
