"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalRepository = void 0;
const common_1 = require("@nestjs/common");
const customer_entity_1 = require("../customer/customer.entity");
const vehicle_entity_1 = require("../vehicle/vehicle.entity");
const typeorm_1 = require("typeorm");
const rentalEvent_entity_1 = require("./rentalEvent.entity");
let RentalRepository = class RentalRepository extends typeorm_1.Repository {
    async createRent(customer, vehicle, start, end) {
        if (vehicle.count == 0) {
            throw new common_1.BadRequestException("There aren't more cars from this id");
        }
        const rentalEvent = new rentalEvent_entity_1.RentalEvent();
        rentalEvent.customer = customer;
        rentalEvent.vehicle = vehicle;
        rentalEvent.startDateTime = start;
        rentalEvent.endDateTime = end;
        await rentalEvent.save();
        vehicle.count--;
        await vehicle.save();
        return rentalEvent;
    }
    async countRentsToCustomerFromDate(customer, start) {
        const query = this.createQueryBuilder('rentalevent');
        query.andWhere('rentalevent.customerId = :customerId', { customerId: customer.id });
        query.andWhere('rentalevent.startDateTime >= :start', { start });
        return await query.getCount();
    }
};
RentalRepository = __decorate([
    typeorm_1.EntityRepository(rentalEvent_entity_1.RentalEvent)
], RentalRepository);
exports.RentalRepository = RentalRepository;
//# sourceMappingURL=rental.repository.js.map