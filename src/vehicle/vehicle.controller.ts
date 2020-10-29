import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { CreateVehicleDTO } from './dto/createVehicle.dto';
import { FuelType } from './enums/fuelType.enum';
import { VehicleType } from './enums/vehicleType.enum';
import { FuelTypeValidationPipe } from './pipes/fuelTypeValidation.pipe';
import { VehicleTypeValidationPipe } from './pipes/vehicleTypeValidation.pipe';
import { Vehicle } from './vehicle.entity';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private vehicleService: VehicleService) { };
  @Get("/")
  async getVehicles():Promise<Vehicle[]>
  {
    return await this.vehicleService.getVehicles();
  }
  @Post("/create")
  async createVehicle(@Body(ValidationPipe) createVehicleDTO:CreateVehicleDTO): Promise<Vehicle>
  {
    return await this.vehicleService.createVehicle(createVehicleDTO);
  }
  @Delete("/:id")
  async deleteVehicle(@Param("id", ParseIntPipe) id: number): Promise<void>
  {
    return await this.vehicleService.deleteVehicle(id);
  }
  @Patch("/:id/vehicleType/:value")
  async editVehicleType(@Param("id", ParseIntPipe) id: number, @Param("value",VehicleTypeValidationPipe) value:VehicleType):Promise<Vehicle>
  {
    return await this.vehicleService.editVehicle(id, "vehicleType", value);
  }
  @Patch("/:id/brand/:value")
  async editVehicleBrand(@Param("id", ParseIntPipe) id: number, @Param("value") value:string):Promise<Vehicle>
  {
    return await this.vehicleService.editVehicle(id, "brand", value);
  }
  @Patch("/:id/model/:value")
  async editVehicleModel(@Param("id", ParseIntPipe) id: number, @Param("value") value:string):Promise<Vehicle>
  {
    return await this.vehicleService.editVehicle(id, "model", value);
  }
  @Patch("/:id/constructionYear/:value")
  async editVehicleConstYear(@Param("id", ParseIntPipe) id: number, @Param("value",ParseIntPipe) value:number):Promise<Vehicle>
  {
    return await this.vehicleService.editVehicle(id, "constructionYear", value);
  }
  @Patch("/:id/fuelType/:value")
  async editVehicleFuelType(@Param("id", ParseIntPipe) id: number, @Param("value",FuelTypeValidationPipe) value:FuelType):Promise<Vehicle>
  {
    return await this.vehicleService.editVehicle(id, "fuelType", value);
  }
  @Patch("/:id/numberOfSeats/:value")
  async editVehicleNumOfSeats(@Param("id", ParseIntPipe) id: number, @Param("value",ParseIntPipe) value:number):Promise<Vehicle>
  {
    return await this.vehicleService.editVehicle(id, "numberOfSeats", value);
  }
  @Patch("/:id/pricePerDay/:value")
  async editVehiclePricePerDay(@Param("id", ParseIntPipe) id: number, @Param("value",ParseIntPipe) value:number):Promise<Vehicle>
  {
    return await this.vehicleService.editVehicle(id, "pricePerDay", value);
  }
  @Patch("/:id/count/:value")
  async editVehicleCount(@Param("id", ParseIntPipe) id: number, @Param("value",ParseIntPipe) value:number):Promise<Vehicle>
  {
    return await this.vehicleService.editVehicle(id, "count", value);
  }

}
