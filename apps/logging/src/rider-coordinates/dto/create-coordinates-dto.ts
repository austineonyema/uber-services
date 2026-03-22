import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCoordinatesDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  long: number;

  @IsNotEmpty()
  rider: string;
}
