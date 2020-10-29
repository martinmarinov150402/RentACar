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
const fuelType_enum_1 = require("./enums/fuelType.enum");
const vehicleType_enum_1 = require("./enums/vehicleType.enum");
const fuelTypeValidation_pipe_1 = require("./pipes/fuelTypeValidation.pipe");
const vehicleTypeValidation_pipe_1 = require("./pipes/vehicleTypeValidation.pipe");
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
    async deleteVehicle(id) {
        return await this.vehicleService.deleteVehicle(id);
    }
    async editVehicleType(id, value) {
        return await this.vehicleService.editVehicle(id, "vehicleType", value);
    }
    async editVehicleBrand(id, value) {
        return await this.vehicleService.editVehicle(id, "brand", value);
    }
    async editVehicleModel(id, value) {
        return await this.vehicleService.editVehicle(id, "model", value);
    }
    async editVehicleConstYear(id, value) {
        return await this.vehicleService.editVehicle(id, "constructionYear", value);
    }
    async editVehicleFuelType(id, value) {
        return await this.vehicleService.editVehicle(id, "fuelType", value);
    }
    async editVehicleNumOfSeats(id, value) {
        return await this.vehicleService.editVehicle(id, "numberOfSeats", value);
    }
    async editVehiclePricePerDay(id, value) {
        return await this.vehicleService.editVehicle(id, "pricePerDay", value);
    }
    async editVehicleCount(id, value) {
        return await this.vehicleService.editVehicle(id, "count", value);
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
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createVehicle_dto_1.CreateVehicleDTO]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "createVehicle", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "deleteVehicle", null);
__decorate([
    common_1.Patch("/:id/vehicleType/:value"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)), __param(1, common_1.Param("value", vehicleTypeValidation_pipe_1.VehicleTypeValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "editVehicleType", null);
__decorate([
    common_1.Patch("/:id/brand/:value"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)), __param(1, common_1.Param("value")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "editVehicleBrand", null);
__decorate([
    common_1.Patch("/:id/model/:value"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)), __param(1, common_1.Param("value")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "editVehicleModel", null);
__decorate([
    common_1.Patch("/:id/constructionYear/:value"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)), __param(1, common_1.Param("value", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "editVehicleConstYear", null);
__decorate([
    common_1.Patch("/:id/fuelType/:value"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)), __param(1, common_1.Param("value", fuelTypeValidation_pipe_1.FuelTypeValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "editVehicleFuelType", null);
__decorate([
    common_1.Patch("/:id/numberOfSeats/:value"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)), __param(1, common_1.Param("value", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "editVehicleNumOfSeats", null);
__decorate([
    common_1.Patch("/:id/pricePerDay/:value"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)), __param(1, common_1.Param("value", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "editVehiclePricePerDay", null);
__decorate([
    common_1.Patch("/:id/count/:value"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)), __param(1, common_1.Param("value", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "editVehicleCount", null);
VehicleController = __decorate([
    common_1.Controller('vehicle'),
    __metadata("design:paramtypes", [vehicle_service_1.VehicleService])
], VehicleController);
exports.VehicleController = VehicleController;
//# sourceMappingURL=vehicle.controller.js.map