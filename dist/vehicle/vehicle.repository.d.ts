import { Repository } from "typeorm";
import { CreateVehicleDTO } from "./dto/createVehicle.dto";
import { Vehicle } from "./vehicle.entity";
export declare class VehicleRepository extends Repository<Vehicle> {
    createVehicle(createVehicleDTO: CreateVehicleDTO): Promise<Vehicle>;
    getVehicles(): Promise<Vehicle[]>;
}
