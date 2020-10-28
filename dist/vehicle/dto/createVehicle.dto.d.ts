import { VehicleType } from '../enums/vehicleType.enum';
import { FuelType } from '../enums/fuelType.enum';
export declare class CreateVehicleDTO {
    vehicleType: VehicleType;
    brand: string;
    model: string;
    constructionYear: number;
    fuelType: FuelType;
    numberOfSeats: number;
    picture: string;
    pricePerDay: number;
    count: number;
}
