import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";
import { VehicleType } from '../enums/vehicleType.enum';
import { FuelType } from '../enums/fuelType.enum';

export class CreateVehicleDTO 
{
  @IsNotEmpty()
  @IsEnum(VehicleType, { message: 'Not valid vehicle type'})
  vehicleType: VehicleType;

  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  model: string;

  @IsNotEmpty()
  @IsNumber()
  constructionYear: number;

  @IsNotEmpty()
  @IsEnum(FuelType, {message: 'Not valid fuel type'})
  fuelType: FuelType;

  @IsNotEmpty()
  @IsNumber()
  numberOfSeats: number;

  @IsNotEmpty()
  picture: string;

  @IsNotEmpty()
  @IsNumber()
  pricePerDay: number;
  
  @IsNotEmpty()
  @IsNumber()
  count: number;
  
}