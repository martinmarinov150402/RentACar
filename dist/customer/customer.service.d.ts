import { Customer } from './customer.entity';
import { CustomerRepository } from './customer.repository';
import { CreateCustomerDTO } from './dto/createCustomer.dto';
export declare class CustomerService {
    private customerRepository;
    constructor(customerRepository: CustomerRepository);
    createCustomer(createCustomerDTO: CreateCustomerDTO): Promise<Customer>;
    findCustomer(email: string): Promise<Customer>;
    deleteCustomer(id: number): Promise<void>;
    getCustomerById(id: number): Promise<Customer>;
    editCustomer(id: number, property: string, value: string): Promise<Customer>;
}
