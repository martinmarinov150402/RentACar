import { Injectable } from '@nestjs/common';
import { CreateVehicleDTO } from './dto/createVehicle.dto';
import { Vehicle } from './vehicle.entity';
import { VehicleRepository } from './vehicle.repository';

@Injectable()
export class VehicleService {
  constructor(private vehicleRepository: VehicleRepository) { };
  async getVehicles():Promise<Vehicle[]>
  {
    return await this.vehicleRepository.getVehicles();
  }
  async createVehicle(createVehicleDTO:CreateVehicleDTO): Promise<Vehicle>
  {
    return await this.vehicleRepository.createVehicle(createVehicleDTO);
  }
}
