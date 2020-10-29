import { CustomerService } from 'src/customer/customer.service';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { RentalRepository } from './rental.repository';
export declare class RentalService {
    private rentalRepository;
    private customerService;
    private vehicleService;
    constructor(rentalRepository: RentalRepository, customerService: CustomerService, vehicleService: VehicleService);
    RentACar(carid: number, customerid: number, periodDays: number, confirmation: boolean): Promise<string>;
}
