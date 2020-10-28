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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVehicleDTO = void 0;
const class_validator_1 = require("class-validator");
const vehicleType_enum_1 = require("../enums/vehicleType.enum");
const fuelType_enum_1 = require("../enums/fuelType.enum");
class CreateVehicleDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(vehicleType_enum_1.VehicleType, { message: 'Not valid vehicle type' }),
    __metadata("design:type", String)
], CreateVehicleDTO.prototype, "vehicleType", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateVehicleDTO.prototype, "brand", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateVehicleDTO.prototype, "model", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateVehicleDTO.prototype, "constructionYear", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(fuelType_enum_1.FuelType, { message: 'Not valid fuel type' }),
    __metadata("design:type", String)
], CreateVehicleDTO.prototype, "fuelType", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateVehicleDTO.prototype, "numberOfSeats", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateVehicleDTO.prototype, "picture", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateVehicleDTO.prototype, "pricePerDay", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateVehicleDTO.prototype, "count", void 0);
exports.CreateVehicleDTO = CreateVehicleDTO;
//# sourceMappingURL=createVehicle.dto.js.map