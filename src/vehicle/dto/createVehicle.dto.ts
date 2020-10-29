import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsNumberString } from "class-validator";
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
  @IsNumberString()
  constructionYear: number;

  @IsNotEmpty()
  @IsEnum(FuelType, {message: 'Not valid fuel type'})
  fuelType: FuelType;

  @IsNotEmpty()
  @IsNumberString()
  numberOfSeats: number;

  @IsNotEmpty()
  picture: string;

  @IsNotEmpty()
  @IsNumberString()
  pricePerDay: number;
  
  @IsNotEmpty()
  @IsNumberString()
  count: number;
  
}