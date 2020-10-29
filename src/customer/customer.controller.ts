import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { CreateCustomerDTO } from './dto/createCustomer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) { };
  @Post('/create')
  async createCustomer(@Body(ValidationPipe) createCustmerDTO:CreateCustomerDTO):Promise<Customer>
  {
    return await this.customerService.createCustomer(createCustmerDTO);
  }
  @Get('/:email')
  async findCustomer(@Param("email")email:string):Promise<Customer>
  {
    return await this.customerService.findCustomer(email); 
  }
  @Delete('/:id')
  async deleteCustomer(@Param("id",ParseIntPipe) id: number):Promise<void>
  {
    return await this.customerService.deleteCustomer(id);
  }
}
