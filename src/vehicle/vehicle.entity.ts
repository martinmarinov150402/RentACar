import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm"

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
}