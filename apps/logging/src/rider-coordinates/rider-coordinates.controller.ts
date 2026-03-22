import { Body, Controller, Get, Post } from '@nestjs/common';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { RiderCoordinateDocument } from './schemas/rider-coordinates.schema';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(
    private readonly riderCoordinatesService: RiderCoordinatesService,
  ) {}

  @Get()
  async getRiderCoordinates(): Promise<RiderCoordinateDocument[]> {
    return await this.riderCoordinatesService.getRiderCoordinates();
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
