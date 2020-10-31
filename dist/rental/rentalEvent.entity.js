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
exports.RentalEvent = void 0;
const customer_entity_1 = require("../customer/customer.entity");
const vehicle_entity_1 = require("../vehicle/vehicle.entity");
const typeorm_1 = require("typeorm");
let RentalEvent = class RentalEvent extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RentalEvent.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], RentalEvent.prototype, "startDateTime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], RentalEvent.prototype, "endDateTime", void 0);
__decorate([
    typeorm_1.ManyToOne(type => customer_entity_1.Customer, customer => customer.rentalEvents, { onDelete: 'CASCADE' }),
    __metadata("design:type", customer_entity_1.Customer)
], RentalEvent.prototype, "customer", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], RentalEvent.prototype, "customerId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => vehicle_entity_1.Vehicle, vehicle => vehicle.rentedBy, { onDelete: 'CASCADE' }),
    __metadata("design:type", vehicle_entity_1.Vehicle)
], RentalEvent.prototype, "vehicle", void 0);
RentalEvent = __decorate([
    typeorm_1.Entity()
], RentalEvent);
exports.RentalEvent = RentalEvent;
//# sourceMappingURL=rentalEvent.entity.js.map