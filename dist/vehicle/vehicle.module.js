"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customer_module_1 = require("../customer/customer.module");
const rental_module_1 = require("../rental/rental.module");
const vehicle_controller_1 = require("./vehicle.controller");
const vehicle_repository_1 = require("./vehicle.repository");
const vehicle_service_1 = require("./vehicle.service");
let VehicleModule = class VehicleModule {
};
VehicleModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([vehicle_repository_1.VehicleRepository]),
        ],
        controllers: [vehicle_controller_1.VehicleController],
        providers: [vehicle_service_1.VehicleService],
        exports: [vehicle_service_1.VehicleService],
    })
], VehicleModule);
exports.VehicleModule = VehicleModule;
//# sourceMappingURL=vehicle.module.js.map