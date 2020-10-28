import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateVehicleDTO } from './dto/createVehicle.dto';
import { Vehicle } from './vehicle.entity';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private vehicleService: VehicleService) { };
  @Get("/")
  async getVehicles():Promise<Vehicle[]>
  {
    return await this.vehicleService.getVehicles();
  }
  @Post("/create")
  async createVehicle(@Body() createVehicleDTO:CreateVehicleDTO): Promise<Vehicle>
  {
    return await this.vehicleService.createVehicle(createVehicleDTO);
  }

}
