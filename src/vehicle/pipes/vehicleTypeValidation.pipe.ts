import {BadRequestException, PipeTransform} from '@nestjs/common'
import { VehicleType } from '../enums/vehicleType.enum'

export class VehicleTypeValidationPipe implements PipeTransform
{
  readonly whitelist: VehicleType[] = [
    VehicleType.CARGO,
    VehicleType.ECONOMY,
    VehicleType.ESTATE,
    VehicleType.LUXURY,
    VehicleType.SUV,
  ];
  transform(value: any): VehicleType
  {
    if (!this.isWhitelist(value)) {
      throw new BadRequestException('Invalid Vehicle type'); 
    }
    return value;
  }
  private isWhitelist(value: any): value is VehicleType
  {
    return this.whitelist.indexOf(value) !== -1;
  }
}
