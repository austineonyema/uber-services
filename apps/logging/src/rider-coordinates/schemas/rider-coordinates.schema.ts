import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export const RIDER_COORDINATES_MODEL = 'RiderCoordinate';
export const RIDER_COLLECTION = 'rider_coordinates';

export type RiderCoordinateDocument = HydratedDocument<RiderCoordinate>;

@Schema({
  collection: RIDER_COLLECTION,
  timestamps: true,
  versionKey: false,
})
export class RiderCoordinate {
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  long: number;

  @Prop({ required: true })
  rider: string;
}

export const RiderCoordinateSchema =
  SchemaFactory.createForClass(RiderCoordinate);
