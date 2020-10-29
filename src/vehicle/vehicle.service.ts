import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVehicleDTO } from './dto/createVehicle.dto';
import { Vehicle } from './vehicle.entity';
import { VehicleRepository } from './vehicle.repository';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(VehicleRepository)
    private vehicleRepository: VehicleRepository
  ) { };
  async getVehicle(vehid: number)
  {
    return await this.vehicleRepository.getVehicle(vehid);
  }
  async getVehicles():Promise<Vehicle[]>
  {
    return await this.vehicleRepository.getVehicles();
  }
  async createVehicle(createVehicleDTO:CreateVehicleDTO): Promise<Vehicle>
  {
    return await this.vehicleRepository.createVehicle(createVehicleDTO);
  }
  async deleteVehicle(id: number):Promise<void>
  {
    return await this.vehicleRepository.deleteVehicle(id);
  }
  async editVehicle(id: number, item: string, value: any):Promise<Vehicle>
  {
    return await this.vehicleRepository.editVehicle(id, item, value);
  }
}
