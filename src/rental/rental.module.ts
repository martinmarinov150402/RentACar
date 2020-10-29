import { forwardRef, Module } from '@nestjs/common';
import { RentalService } from './rental.service';
import { RentalController } from './rental.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerRepository } from 'src/customer/customer.repository';
import { VehicleModule } from 'src/vehicle/vehicle.module';
import { CustomerModule } from 'src/customer/customer.module';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { CustomerService } from 'src/customer/customer.service';
import { RentalRepository } from './rental.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([RentalRepository]),
    forwardRef(() => CustomerModule),
    forwardRef(() => VehicleModule),
  ],
  providers: [RentalService],
  controllers: [RentalController]
})
export class RentalModule {}
