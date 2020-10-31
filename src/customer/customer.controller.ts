import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
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
  @Patch("/:id/fullName/:value")
  async editCustomerFN(@Param("id", ParseIntPipe) id: number, @Param("value") value: string):Promise<Customer>
  {
    return await this.customerService.editCustomer(id, "fullName", value);
  }
  @Patch("/:id/email/:value")
  async editCustomerEmail(@Param("id", ParseIntPipe) id: number, @Param("value") value: string):Promise<Customer>
  {
    return await this.customerService.editCustomer(id, "email", value);
  }
  @Patch("/:id/telephone/:value")
  async editCustomerTelephone(@Param("id", ParseIntPipe) id: number, @Param("value") value: string):Promise<Customer>
  {
    return await this.customerService.editCustomer(id, "telephone", value);
  }
}
