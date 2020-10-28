import { CreateVehicleDTO } from './dto/createVehicle.dto';
import { Vehicle } from './vehicle.entity';
import { VehicleService } from './vehicle.service';
export declare class VehicleController {
    private vehicleService;
    constructor(vehicleService: VehicleService);
    getVehicles(): Promise<Vehicle[]>;
    createVehicle(createVehicleDTO: CreateVehicleDTO): Promise<Vehicle>;
}
