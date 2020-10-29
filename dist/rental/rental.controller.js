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
exports.RentalController = void 0;
const common_1 = require("@nestjs/common");
const rental_service_1 = require("./rental.service");
let RentalController = class RentalController {
    constructor(rentalService) {
        this.rentalService = rentalService;
    }
    ;
    async rentACar(customerid, carid, period, confirmation) {
        return await this.rentalService.RentACar(carid, customerid, period, confirmation);
    }
};
__decorate([
    common_1.Post('/:customerid/:carid/:period/:confirmation'),
    __param(0, common_1.Param("customerid", common_1.ParseIntPipe)), __param(1, common_1.Param("carid", common_1.ParseIntPipe)), __param(2, common_1.Param("period", common_1.ParseIntPipe)), __param(3, common_1.Param("confirmation", common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Boolean]),
    __metadata("design:returntype", Promise)
], RentalController.prototype, "rentACar", null);
RentalController = __decorate([
    common_1.Controller('rental'),
    __metadata("design:paramtypes", [rental_service_1.RentalService])
], RentalController);
exports.RentalController = RentalController;
//# sourceMappingURL=rental.controller.js.map