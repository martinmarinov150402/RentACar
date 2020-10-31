"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRepository = void 0;
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("./customer.entity");
let CustomerRepository = class CustomerRepository extends typeorm_1.Repository {
    async createCustomer(fullName, email, telephone) {
        const customer = new customer_entity_1.Customer();
        customer.fullName = fullName;
        customer.email = email;
        customer.telephone = telephone;
        await customer.save();
        return customer;
    }
    async deleteCustomer(id) {
        await this.delete({ id });
    }
    async FindCustomer(email) {
        const result = await this.findOne({ email });
        return result;
    }
    async getCustomerById(id) {
        const query = this.createQueryBuilder('customer');
        query.andWhere("customer.id = :id", { id });
        return await query.getOne();
    }
    async editCustomer(id, property, value) {
        const query = this.createQueryBuilder('customer');
        query.andWhere("customer.id = :id", { id });
        const customer = await query.getOne();
        customer[property] = value;
        await customer.save();
        return customer;
    }
};
CustomerRepository = __decorate([
    typeorm_1.EntityRepository(customer_entity_1.Customer)
], CustomerRepository);
exports.CustomerRepository = CustomerRepository;
//# sourceMappingURL=customer.repository.js.map