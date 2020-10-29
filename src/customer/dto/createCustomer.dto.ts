import { IsEmail, IsMobilePhone, IsNotEmpty } from "class-validator";

export class CreateCustomerDTO
{
  @IsNotEmpty()
  fullName: string;
  
  @IsEmail()
  email: string;
  
  @IsMobilePhone('bg-BG')
  telephone: string;
}