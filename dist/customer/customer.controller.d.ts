import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { CreateCustomerDTO } from './dto/createCustomer.dto';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    createCustomer(createCustmerDTO: CreateCustomerDTO): Promise<Customer>;
    findCustomer(email: string): Promise<Customer>;
    deleteCustomer(id: number): Promise<void>;
    editCustomerFN(id: number, value: string): Promise<Customer>;
    editCustomerEmail(id: number, value: string): Promise<Customer>;
    editCustomerTelephone(id: number, value: string): Promise<Customer>;
}
