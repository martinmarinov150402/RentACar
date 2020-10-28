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
        console.log("TUKASUM");
        await veh.save();
        return veh;
    }
    async getVehicles() {
        const result = await this.find();
        return result;
    }
};
VehicleRepository = __decorate([
    typeorm_1.EntityRepository(vehicle_entity_1.Vehicle)
], VehicleRepository);
exports.VehicleRepository = VehicleRepository;
//# sourceMappingURL=vehicle.repository.js.map