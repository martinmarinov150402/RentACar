import { Customer } from "src/customer/customer.entity";
import { Vehicle } from "src/vehicle/vehicle.entity";
import { BaseEntity } from "typeorm";
export declare class RentalEvent extends BaseEntity {
    id: number;
    startDateTime: Date;
    endDateTime: Date;
    customer: Customer;
    customerId: number;
    vehicle: Vehicle;
}
