import { RentalEvent } from "src/rental/rentalEvent.entity";
import { BaseEntity } from "typeorm";
import { FuelType } from "./enums/fuelType.enum";
import { VehicleType } from "./enums/vehicleType.enum";
export declare class Vehicle extends BaseEntity {
    id: number;
    vehicleType: VehicleType;
    brand: string;
    model: string;
    constructionYear: number;
    fuelType: FuelType;
    numberOfSeats: number;
    picture: string;
    pricePerDay: number;
    count: number;
    rentedBy: RentalEvent[];
}
