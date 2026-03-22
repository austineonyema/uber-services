import { Injectable } from '@nestjs/common';
import {
  RiderCoordinate,
  RiderCoordinateDocument,
} from './schemas/rider-coordinates.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private readonly RiderCoordinates: Model<RiderCoordinateDocument>,
  ) {}

  async saveRiderCoordinates(createCoordinatesDTO: CreateCoordinatesDto) {
    const coordinates =
      await this.RiderCoordinates.create(createCoordinatesDTO);
    return coordinates;
  }
}
