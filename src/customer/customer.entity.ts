import { RentalEvent } from "src/rental/rentalEvent.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer extends BaseEntity
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @OneToMany(type => RentalEvent, rentalEvent => rentalEvent.customer, { eager: true })
  rentalEvents: RentalEvent[];
  
}