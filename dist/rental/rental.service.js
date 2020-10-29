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
exports.RentalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customer_service_1 = require("../customer/customer.service");
const vehicle_service_1 = require("../vehicle/vehicle.service");
const rental_repository_1 = require("./rental.repository");
let RentalService = class RentalService {
    constructor(rentalRepository, customerService, vehicleService) {
        this.rentalRepository = rentalRepository;
        this.customerService = customerService;
        this.vehicleService = vehicleService;
    }
    ;
    async RentACar(carid, customerid, periodDays, confirmation) {
        let price;
        const vehicle = await this.vehicleService.getVehicle(carid);
        const customer = await this.customerService.getCustomerById(customerid);
        price = vehicle.pricePerDay * periodDays;
        if (periodDays > 10) {
            price = 90 * price / 100;
        }
        else if (periodDays > 5) {
            price = 93 * price / 100;
        }
        else if (periodDays > 3) {
            price = 95 * price / 100;
        }
        let bef60days = new Date();
        bef60days.setDate(bef60days.getDate() - 60);
        const prev60days = await this.rentalRepository.countRentsToCustomerFromDate(customer, bef60days);
        if (prev60days > 3) {
            price = 85 * price / 100;
        }
        if (confirmation) {
            const curdate = new Date();
            const enddate = new Date();
            enddate.setDate(enddate.getDate() + periodDays);
            await this.rentalRepository.createRent(customer, vehicle, curdate, enddate);
            return "Successfully rented car for price " + price.toString() + " .";
        }
        else {
            return "Price: " + price.toString() + " Are you sure?";
        }
    }
};
RentalService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(rental_repository_1.RentalRepository)),
    __param(1, common_1.Inject(common_1.forwardRef(() => customer_service_1.CustomerService))),
    __param(2, common_1.Inject(common_1.forwardRef(() => vehicle_service_1.VehicleService))),
    __metadata("design:paramtypes", [rental_repository_1.RentalRepository,
        customer_service_1.CustomerService,
        vehicle_service_1.VehicleService])
], RentalService);
exports.RentalService = RentalService;
//# sourceMappingURL=rental.service.js.map