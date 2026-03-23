import { Injectable } from '@nestjs/common';

export type RiderClone = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
};
@Injectable()
export class RiderService {
  getHello(): string {
    return 'Hello World!';
  }

  async getRiderById(data: RiderClone): Promise<RiderClone> {
    const rider = {
      _id: data._id,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
    };
    return Promise.resolve(rider);
  }
}
