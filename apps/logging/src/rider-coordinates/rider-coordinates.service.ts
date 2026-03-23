import { Inject, Injectable } from '@nestjs/common';
import {
  RiderCoordinate,
  RiderCoordinateDocument,
} from './schemas/rider-coordinates.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { RiderClone } from 'apps/rider/src/rider.service';
@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private readonly RiderCoordinates: Model<RiderCoordinateDocument>,
    @Inject('RIDER_SERVICE') private client: ClientProxy,
  ) {}

  //communicate with the rider microservice by using rider id for population

  // communication can be via tcp, rabbitmq, kafka, nats, redis (sync(tcp,http, nats core) or async (rabbitmq,kafka,etc) )

  async getRiderCoordinates(): Promise<RiderCoordinateDocument[]> {
    const coordinates = await this.RiderCoordinates.find().lean().exec();
    return coordinates;
  }

  async getRiderCoordinatesById(riderId: string) {
    const coordinates = await this.RiderCoordinates.find({ rider: riderId })
      .lean()
      .exec();

    const pattern = { cmd: 'get-rider' };
    const payload = { _id: riderId };
    const rider = await firstValueFrom(
      this.client.send<RiderClone>(pattern, payload),
    );
    // {
    //   _id: riderId,
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   email: 'johndoe@gmail.com',
    // };
    return { coordinates, rider };
  }

  async saveRiderCoordinates(
    createCoordinatesDTO: CreateCoordinatesDto,
  ): Promise<RiderCoordinateDocument> {
    const coordinates =
      await this.RiderCoordinates.create(createCoordinatesDTO);
    return coordinates;
  }
}
