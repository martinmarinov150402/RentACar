import { Customer } from "src/customer/customer.entity";
import { Vehicle } from "src/vehicle/vehicle.entity";
import { Repository } from "typeorm";
import { RentalEvent } from "./rentalEvent.entity";
export declare class RentalRepository extends Repository<RentalEvent> {
    createRent(customer: Customer, vehicle: Vehicle, start: Date, end: Date): Promise<RentalEvent>;
    countRentsToCustomerFromDate(customer: Customer, start: Date): Promise<number>;
}
