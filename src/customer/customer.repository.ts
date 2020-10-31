import { EntityRepository, Repository } from "typeorm";
import { Customer } from "./customer.entity";

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {
  async createCustomer(fullName: string, email: string, telephone: string):Promise<Customer>
  {
    const customer = new Customer(); 
    customer.fullName = fullName;
    customer.email = email;
    customer.telephone = telephone;
    await customer.save();
    return customer;
  }
  async deleteCustomer(id:number):Promise<void>
  {
    await this.delete({ id });
  }
  async FindCustomer(email: string):Promise<Customer>
  {
    const result = await this.findOne({ email });
    return result;
  }
  async getCustomerById(id: number): Promise<Customer>
  {
    const query = this.createQueryBuilder('customer');
    query.andWhere("customer.id = :id", { id });
    return await query.getOne();
  }
  async editCustomer(id: number, property: string, value: string):Promise<Customer>
  {
    const query = this.createQueryBuilder('customer');
    query.andWhere("customer.id = :id", { id });
    const customer = await query.getOne();
    customer[property] = value;
    await customer.save(); 
    return customer;
  }
}