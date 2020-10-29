import { BadRequestException } from "@nestjs/common";
import { Customer } from "src/customer/customer.entity";
import { Vehicle } from "src/vehicle/vehicle.entity";
import { EntityRepository, Repository } from "typeorm";
import { RentalEvent } from "./rentalEvent.entity";

@EntityRepository(RentalEvent)
export class RentalRepository extends Repository<RentalEvent>
{
  async createRent(customer: Customer, vehicle: Vehicle, start: Date, end: Date):Promise<RentalEvent>
  {
    if (vehicle.count == 0)
    {
      throw new BadRequestException("There aren't more cars from this id")  
    }
    const rentalEvent = new RentalEvent();
    rentalEvent.customer = customer;
    rentalEvent.vehicle = vehicle;
    rentalEvent.startDateTime = start;
    rentalEvent.endDateTime = end;
    await rentalEvent.save();
    vehicle.count--;
    await vehicle.save();
    return rentalEvent;
  }
  async countRentsToCustomerFromDate(customer: Customer, start: Date):Promise<number>
  {
    const query = this.createQueryBuilder('rentalevent');
    query.andWhere('rentalevent.customerId = :customerId', { customerId:customer.id });
    query.andWhere('rentalevent.startDateTime >= :start', { start });
    return await query.getCount();
  }
}