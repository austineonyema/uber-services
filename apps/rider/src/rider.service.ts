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

  getRiderById(id: string): RiderClone {
    const rider = {
      _id: id,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
    };
    return rider;
  }
}
