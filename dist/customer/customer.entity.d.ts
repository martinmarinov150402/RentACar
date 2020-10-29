import { RentalEvent } from "src/rental/rentalEvent.entity";
import { BaseEntity } from "typeorm";
export declare class Customer extends BaseEntity {
    id: number;
    fullName: string;
    email: string;
    telephone: string;
    rentalEvents: RentalEvent[];
}
