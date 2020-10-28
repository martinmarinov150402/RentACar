import { CreateVehicleDTO } from './dto/createVehicle.dto';
import { Vehicle } from './vehicle.entity';
import { VehicleRepository } from './vehicle.repository';
export declare class VehicleService {
    private vehicleRepository;
    constructor(vehicleRepository: VehicleRepository);
    getVehicles(): Promise<Vehicle[]>;
    createVehicle(createVehicleDTO: CreateVehicleDTO): Promise<Vehicle>;
}
