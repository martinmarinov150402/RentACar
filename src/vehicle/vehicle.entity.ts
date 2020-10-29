import { Customer } from "src/customer/customer.entity";
import { RentalEvent } from "src/rental/rentalEvent.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { FuelType } from "./enums/fuelType.enum";
import { VehicleType } from "./enums/vehicleType.enum";

@Entity()
export class Vehicle extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vehicleType: VehicleType;
    
    @Column()
    brand: string;
    
    @Column()
    model: string;

    @Column()
    constructionYear: number;
    
    @Column()
    fuelType: FuelType;

    @Column()
    numberOfSeats: number;

    @Column()
    picture: string;

    @Column()
    pricePerDay: number;

    @Column()
    count: number;

    @OneToMany(type=>RentalEvent,re=>re.vehicle,{eager:true})
    rentedBy: RentalEvent[];
}