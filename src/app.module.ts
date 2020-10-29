import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleController } from './vehicle/vehicle.controller';
import { Vehicle } from './vehicle/vehicle.entity';
import { VehicleService } from './vehicle/vehicle.service';
import { VehicleModule } from './vehicle/vehicle.module';
import { CustomerModule } from './customer/customer.module';
import { RentalModule } from './rental/rental.module';
import { Customer } from './customer/customer.entity';
import { RentalEvent } from './rental/rentalEvent.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: 'root',
      database: 'CarPark',
      entities: [Vehicle,Customer,RentalEvent],
      synchronize:true,
    }),
    VehicleModule,
    CustomerModule,
    RentalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
