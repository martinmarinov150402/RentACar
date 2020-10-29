"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleRepository = void 0;
const typeorm_1 = require("typeorm");
const vehicle_entity_1 = require("./vehicle.entity");
let VehicleRepository = class VehicleRepository extends typeorm_1.Repository {
    async createVehicle(createVehicleDTO) {
        const veh = new vehicle_entity_1.Vehicle();
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
    async getVehicles() {
        const query = this.createQueryBuilder('vehicles');
        const result = await query.getMany();
        return result;
    }
    async getVehicle(vehicleId) {
        const query = this.createQueryBuilder('vehicle');
        query.andWhere("vehicle.id = :vehicleId", { vehicleId });
        return await query.getOne();
    }
    async deleteVehicle(vehicleId) {
        await this.delete({ id: vehicleId });
    }
    async editVehicle(id, item, value) {
        const query = this.createQueryBuilder('vehicle');
        query.andWhere('vehicle.id = :id', { id });
        const vehicle = await query.getOne();
        vehicle[item] = value;
        await vehicle.save();
        return vehicle;
    }
};
VehicleRepository = __decorate([
    typeorm_1.EntityRepository(vehicle_entity_1.Vehicle)
], VehicleRepository);
exports.VehicleRepository = VehicleRepository;
//# sourceMappingURL=vehicle.repository.js.map