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
exports.Vehicle = void 0;
const customer_entity_1 = require("../customer/customer.entity");
const rentalEvent_entity_1 = require("../rental/rentalEvent.entity");
const typeorm_1 = require("typeorm");
const fuelType_enum_1 = require("./enums/fuelType.enum");
const vehicleType_enum_1 = require("./enums/vehicleType.enum");
let Vehicle = class Vehicle extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Vehicle.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Vehicle.prototype, "vehicleType", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Vehicle.prototype, "brand", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Vehicle.prototype, "model", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Vehicle.prototype, "constructionYear", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Vehicle.prototype, "fuelType", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Vehicle.prototype, "numberOfSeats", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Vehicle.prototype, "picture", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Vehicle.prototype, "pricePerDay", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Vehicle.prototype, "count", void 0);
__decorate([
    typeorm_1.OneToMany(type => rentalEvent_entity_1.RentalEvent, re => re.vehicle, { eager: true }),
    __metadata("design:type", Array)
], Vehicle.prototype, "rentedBy", void 0);
Vehicle = __decorate([
    typeorm_1.Entity()
], Vehicle);
exports.Vehicle = Vehicle;
//# sourceMappingURL=vehicle.entity.js.map