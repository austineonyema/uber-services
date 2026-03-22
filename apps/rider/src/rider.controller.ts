import { Controller, Get, Param } from '@nestjs/common';
import { type RiderClone, RiderService } from './rider.service';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get()
  getHello(): string {
    return this.riderService.getHello();
  }

  @Get(':id')
  getRiderById(@Param('id') id: string): RiderClone {
    return this.riderService.getRiderById(id);
  }
}
