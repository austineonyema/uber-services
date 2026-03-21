import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Query, Types } from 'mongoose';
// import { TEAM_ROLES, USER_ROLES, USER_STATUSES } from 'src/enums';
// import type { TeamRole, UserRole, UserStatus } from 'src/enums';
// import { ORGANIZATION_MODEL } from 'src/organizations/schemas/organization.schema';
// import { TEAM_MODEL } from 'src/teams/schemas/team.schema';
// import bcrypt from 'bcryptjs';

export const RIDER_COORDINATES_MODEL = 'RiderCoordinates';
export const RIDER_COLLECTION = 'riders';

export type RiderCoordinateDocument = HydratedDocument<RiderCoordinates>;

@Schema({
  collection: RIDER_COLLECTION,
  timestamps: true,
  versionKey: false,
})
export class User {
  //   @Prop({ type: Types.ObjectId, ref: ORGANIZATION_MODEL, required: false })
  //   organizationId?: Types.ObjectId;
  //   createdAt: Date;
  //   updatedAt: Date;
}

export const RiderCoordinatesSchema =
  SchemaFactory.createForClass(RiderCoordinates);
