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

  //communicate with the rider microservice by using rider id for population

  // communication can be via tcp, rabbitmq, kafka, nats, redis (sync(tcp,http, nats core) or async (the rest) )

  async getRiderCoordinates(): Promise<RiderCoordinateDocument[]> {
    const coordinates = await this.RiderCoordinates.find().lean().exec();
    return coordinates;
  }

  async saveRiderCoordinates(createCoordinatesDTO: CreateCoordinatesDto) {
    const coordinates =
      await this.RiderCoordinates.create(createCoordinatesDTO);
    return coordinates;
  }
}
