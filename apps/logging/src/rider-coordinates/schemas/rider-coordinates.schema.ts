import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Query, Types } from 'mongoose';

export const RIDER_COORDINATES_MODEL = 'RiderCoordinate';
export const RIDER_COLLECTION = 'riders_coordinates';

export type RiderCoordinateDocument = HydratedDocument<RiderCoordinates>;

@Schema({
  collection: RIDER_COLLECTION,
  timestamps: true,
  versionKey: false,
})
export class RiderCoordinates {
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  long: number;

  @Prop({ required: true })
  rider: string;
}

export const RiderCoordinateSchema =
  SchemaFactory.createForClass(RiderCoordinates);
