import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerService } from 'src/customer/customer.service';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { RentalRepository } from './rental.repository';

@Injectable()
export class RentalService {
  constructor(
    @InjectRepository(RentalRepository)
    private rentalRepository: RentalRepository,
    @Inject(forwardRef(()=>CustomerService))
    private customerService: CustomerService,
    @Inject(forwardRef(()=>VehicleService))
    private vehicleService: VehicleService,
  
  ) { };

  async RentACar(carid: number, customerid: number, periodDays:number,confirmation: boolean)
  {
    let price: number;
    const vehicle = await this.vehicleService.getVehicle(carid);
    const customer = await this.customerService.getCustomerById(customerid);
    price = vehicle.pricePerDay*periodDays;
    if (periodDays > 10)
    {
      price = 90 * price / 100;
    }
    else if (periodDays > 5)
    {
      price = 93 * price / 100;
    }
    else if (periodDays > 3)
    {
      price = 95 * price / 100;
    }
    let bef60days = new Date();
    bef60days.setDate(bef60days.getDate() - 60);
    const prev60days = await this.rentalRepository.countRentsToCustomerFromDate(customer, bef60days);
    if (prev60days > 3)
    {
      price = 85 * price / 100;  
    }
    if (confirmation)
    {
      const curdate = new Date();
      const enddate = new Date();
      enddate.setDate(enddate.getDate() + periodDays);
      await this.rentalRepository.createRent(customer, vehicle, curdate, enddate); 
      return "Successfully rented car for price " + price.toString()+ " .";
    }
    else
    {
      return "Price: " + price.toString() + " Are you sure?";
    }
  }
}

