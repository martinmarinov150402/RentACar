import { PipeTransform } from '@nestjs/common';
import { VehicleType } from '../enums/vehicleType.enum';
export declare class VehicleTypeValidationPipe implements PipeTransform {
    readonly whitelist: VehicleType[];
    transform(value: any): VehicleType;
    private isWhitelist;
}
