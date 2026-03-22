import { Body, Controller, Get, Post } from '@nestjs/common';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(
    private readonly riderCoordinatesService: RiderCoordinatesService,
  ) {}

  @Get()
  getRiderCoordinates() {
    return 'Hello, I am from the rider coordinates';
  }

  @Post()
  async saveRiderCoordinates(
    @Body() createCoordinatesDTO: CreateCoordinatesDto,
  ) {
    return await this.riderCoordinatesService.saveRiderCoordinates(
      createCoordinatesDTO,
    );
  }
}
