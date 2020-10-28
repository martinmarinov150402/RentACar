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
exports.VehicleController = void 0;
const common_1 = require("@nestjs/common");
const createVehicle_dto_1 = require("./dto/createVehicle.dto");
const vehicle_service_1 = require("./vehicle.service");
let VehicleController = class VehicleController {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
    }
    ;
    async getVehicles() {
        return await this.vehicleService.getVehicles();
    }
    async createVehicle(createVehicleDTO) {
        return await this.vehicleService.createVehicle(createVehicleDTO);
    }
};
__decorate([
    common_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "getVehicles", null);
__decorate([
    common_1.Post("/create"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createVehicle_dto_1.CreateVehicleDTO]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "createVehicle", null);
VehicleController = __decorate([
    common_1.Controller('vehicle'),
    __metadata("design:paramtypes", [vehicle_service_1.VehicleService])
], VehicleController);
exports.VehicleController = VehicleController;
//# sourceMappingURL=vehicle.controller.js.map