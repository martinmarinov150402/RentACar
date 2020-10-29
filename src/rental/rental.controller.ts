import { Controller, Param, ParseBoolPipe, ParseIntPipe, Post } from '@nestjs/common';
import { RentalService } from './rental.service';

@Controller('rental')
export class RentalController {
  constructor(
    private rentalService: RentalService,
  ) { };
  @Post('/:customerid/:carid/:period/:confirmation')
  async rentACar(@Param("customerid", ParseIntPipe) customerid:number,@Param("carid",ParseIntPipe) carid:number,@Param("period",ParseIntPipe) period:number,@Param("confirmation",ParseBoolPipe) confirmation:boolean)
  {
    return await this.rentalService.RentACar(carid, customerid, period,confirmation);
  }
}

