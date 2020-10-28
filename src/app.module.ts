import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleController } from './vehicle/vehicle.controller';
import { Vehicle } from './vehicle/vehicle.entity';
import { VehicleService } from './vehicle/vehicle.service';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: 'root',
      database: 'CarPark',
      entities: [Vehicle],
      synchronize:true,
    }),
    VehicleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
