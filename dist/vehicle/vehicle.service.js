"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vehicle_repository_1 = require("./vehicle.repository");
let VehicleService = class VehicleService {
    constructor(vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }
    ;
    async getVehicle(vehid) {
        return await this.vehicleRepository.getVehicle(vehid);
    }
    async getVehicles() {
        return await this.vehicleRepository.getVehicles();
    }
    async createVehicle(createVehicleDTO) {
        return await this.vehicleRepository.createVehicle(createVehicleDTO);
    }
    async deleteVehicle(id) {
        return await this.vehicleRepository.deleteVehicle(id);
    }
    async editVehicle(id, item, value) {
        return await this.vehicleRepository.editVehicle(id, item, value);
    }
};
VehicleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(vehicle_repository_1.VehicleRepository)),
    __metadata("design:paramtypes", [vehicle_repository_1.VehicleRepository])
], VehicleService);
exports.VehicleService = VehicleService;
//# sourceMappingURL=vehicle.service.js.map