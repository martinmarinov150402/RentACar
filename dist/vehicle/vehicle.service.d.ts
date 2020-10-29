import { CreateVehicleDTO } from './dto/createVehicle.dto';
import { Vehicle } from './vehicle.entity';
import { VehicleRepository } from './vehicle.repository';
export declare class VehicleService {
    private vehicleRepository;
    constructor(vehicleRepository: VehicleRepository);
    getVehicle(vehid: number): Promise<Vehicle>;
    getVehicles(): Promise<Vehicle[]>;
    createVehicle(createVehicleDTO: CreateVehicleDTO): Promise<Vehicle>;
    deleteVehicle(id: number): Promise<void>;
    editVehicle(id: number, item: string, value: any): Promise<Vehicle>;
}
