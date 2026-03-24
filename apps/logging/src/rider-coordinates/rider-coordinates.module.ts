import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RiderCoordinate,
  RiderCoordinateSchema,
} from './schemas/rider-coordinates.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: RiderCoordinate.name,
        schema: RiderCoordinateSchema,
      },
    ]),
    ClientsModule.registerAsync([
      {
        name: 'RIDER_SERVICE',
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: config.get<string>('RIDER_SERVICE_HOST', 'localhost'),
            port: config.get<number>('RIDER_SERVICE_PORT', 3001),
          },
        }),
      },
    ]),
  ],
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService],
})
export class RiderCoordinatesModule {}
