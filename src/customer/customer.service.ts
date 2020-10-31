import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RentalService } from 'src/rental/rental.service';
import { Customer } from './customer.entity';
import { CustomerRepository } from './customer.repository';
import { CreateCustomerDTO } from './dto/createCustomer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerRepository)
    private customerRepository: CustomerRepository,
    /*@Inject(forwardRef(() => RentalService))
    private rentalService: RentalService,*/
  ) { };
  async createCustomer(createCustomerDTO:CreateCustomerDTO):Promise<Customer>
  {
    const { fullName, email, telephone } = createCustomerDTO;
    return await this.customerRepository.createCustomer(fullName, email, telephone);
  }
  async findCustomer(email: string):Promise<Customer>
  {
    return await this.customerRepository.FindCustomer(email);
  }
  async deleteCustomer(id: number):Promise<void>
  {
    return await this.customerRepository.deleteCustomer(id);
  }
  async getCustomerById(id: number): Promise<Customer>
  {
    return await this.customerRepository.getCustomerById(id);
  }
  async editCustomer(id: number, property: string, value: string)
  {
    return await this.customerRepository.editCustomer(id, property, value);
  }
}
