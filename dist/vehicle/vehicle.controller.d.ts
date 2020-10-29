import { CreateVehicleDTO } from './dto/createVehicle.dto';
import { FuelType } from './enums/fuelType.enum';
import { VehicleType } from './enums/vehicleType.enum';
import { Vehicle } from './vehicle.entity';
import { VehicleService } from './vehicle.service';
export declare class VehicleController {
    private vehicleService;
    constructor(vehicleService: VehicleService);
    getVehicles(): Promise<Vehicle[]>;
    createVehicle(createVehicleDTO: CreateVehicleDTO): Promise<Vehicle>;
    deleteVehicle(id: number): Promise<void>;
    editVehicleType(id: number, value: VehicleType): Promise<Vehicle>;
    editVehicleBrand(id: number, value: string): Promise<Vehicle>;
    editVehicleModel(id: number, value: string): Promise<Vehicle>;
    editVehicleConstYear(id: number, value: number): Promise<Vehicle>;
    editVehicleFuelType(id: number, value: FuelType): Promise<Vehicle>;
    editVehicleNumOfSeats(id: number, value: number): Promise<Vehicle>;
    editVehiclePricePerDay(id: number, value: number): Promise<Vehicle>;
    editVehicleCount(id: number, value: number): Promise<Vehicle>;
}
