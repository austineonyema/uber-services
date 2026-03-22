import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCoordinatesDto {
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  lat: number;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  long: number;

  @IsString()
  @IsNotEmpty()
  rider: string;
}
