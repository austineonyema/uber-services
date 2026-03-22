import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';

@Controller()
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get()
  getHello(): string {
    return this.riderService.getHello();
  }

  @Get()
  getRiderById(@Param('id') _id: string): string {
    return this.riderService.getHello();
  }
}
