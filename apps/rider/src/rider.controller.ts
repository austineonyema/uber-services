import { Controller, Get } from '@nestjs/common';
import { type RiderClone, RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get()
  getHello(): string {
    return this.riderService.getHello();
  }

  @MessagePattern({ cmd: 'get-rider' })
  async getRiderById(data: RiderClone): Promise<RiderClone> {
    return await this.riderService.getRiderById(data);
  }
}
