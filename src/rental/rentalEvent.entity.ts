import { Customer } from "src/customer/customer.entity";
import { Vehicle } from "src/vehicle/vehicle.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";

@Entity()
export class RentalEvent extends BaseEntity
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDateTime: Date;
  
  @Column()
  endDateTime: Date;

@ManyToOne(type => Customer, customer => customer.rentalEvents)
  customer: Customer;

  @Column()
  customerId: number;

  @ManyToOne(type=>Vehicle,vehicle=>vehicle.rentedBy)
  vehicle: Vehicle;

}