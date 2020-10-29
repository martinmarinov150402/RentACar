import { RentalService } from './rental.service';
export declare class RentalController {
    private rentalService;
    constructor(rentalService: RentalService);
    rentACar(customerid: number, carid: number, period: number, confirmation: boolean): Promise<string>;
}
