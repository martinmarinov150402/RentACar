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
    await veh.save();
    return veh;
  }
  async getVehicles()
  {
  /*const result = await this.find();*/
    const query = this.createQueryBuilder('vehicles');
    const  result = await query.getMany()
    //const result = await this.find();
    return result;
  }
  async getVehicle(vehicleId: number): Promise<Vehicle>
  {
    const query = this.createQueryBuilder('vehicle');
    query.andWhere("vehicle.id = :vehicleId", { vehicleId });
    return await query.getOne();
  }
  async deleteVehicle(vehicleId:number):Promise<void>
  {
    await this.delete({ id: vehicleId });

  }
  async editVehicle(id: number, item: string, value: any):Promise<Vehicle>
  {
    const query = this.createQueryBuilder('vehicle');
    query.andWhere('vehicle.id = :id', { id });
    const vehicle = await query.getOne();
    vehicle[item] = value;
    await vehicle.save();
    return vehicle;
  }
}