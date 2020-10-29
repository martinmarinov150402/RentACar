import { Repository } from "typeorm";
import { Customer } from "./customer.entity";
export declare class CustomerRepository extends Repository<Customer> {
    createCustomer(fullName: string, email: string, telephone: string): Promise<Customer>;
    editCustomer(id: number, element: string, value: string): Promise<Customer>;
    deleteCustomer(id: number): Promise<void>;
    FindCustomer(email: string): Promise<Customer>;
    getCustomerById(id: number): Promise<Customer>;
}
