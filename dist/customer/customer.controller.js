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
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const customer_service_1 = require("./customer.service");
const createCustomer_dto_1 = require("./dto/createCustomer.dto");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    ;
    async createCustomer(createCustmerDTO) {
        return await this.customerService.createCustomer(createCustmerDTO);
    }
    async findCustomer(email) {
        return await this.customerService.findCustomer(email);
    }
    async deleteCustomer(id) {
        return await this.customerService.deleteCustomer(id);
    }
    async editCustomerFN(id, value) {
        return await this.customerService.editCustomer(id, "fullName", value);
    }
    async editCustomerEmail(id, value) {
        return await this.customerService.editCustomer(id, "email", value);
    }
    async editCustomerTelephone(id, value) {
        return await this.customerService.editCustomer(id, "telephone", value);
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCustomer_dto_1.CreateCustomerDTO]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "createCustomer", null);
__decorate([
    common_1.Get('/:email'),
    __param(0, common_1.Param("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "findCustomer", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "deleteCustomer", null);
__decorate([
    common_1.Patch("/:id/fullName/:value"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)), __param(1, common_1.Param("value")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "editCustomerFN", null);
__decorate([
    common_1.Patch("/:id/email/:value"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)), __param(1, common_1.Param("value")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "editCustomerEmail", null);
__decorate([
    common_1.Patch("/:id/telephone/:value"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)), __param(1, common_1.Param("value")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "editCustomerTelephone", null);
CustomerController = __decorate([
    common_1.Controller('customer'),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map