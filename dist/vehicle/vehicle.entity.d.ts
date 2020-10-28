import { BaseEntity } from "typeorm";
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
}
