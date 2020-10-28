import { EntityRepository, Repository } from "typeorm";
import { CreateVehicleDTO } from "./dto/createVehicle.dto";
import { Vehicle } from "./vehicle.entity";

@EntityRepository(Vehicle)

export class VehicleRepository extends Repository<Vehicle>
{
  async createVehicle(createVehicleDTO:CreateVehicleDTO)
  {
    const veh = new Vehicle();
    const { vehicleType, brand, model, constructionYear, fuelType, numberOfSeats, picture, pricePerDay, count } = createVehicleDTO;
    veh.vehicleType = vehicleType;
    veh.brand = brand;
    veh.model = model;
    veh.constructionYear = constructionYear;
    veh.fuelType = fuelType;
    veh.numberOfSeats = numberOfSeats;
    veh.picture = picture;
    veh.pricePerDay = pricePerDay;
    veh.count = count;
    console.log("TUKASUM");
    await veh.save();
    return veh;
  }
  async getVehicles()
  {
    const result = await this.find();
    return result;
  }
}