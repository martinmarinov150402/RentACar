import { PipeTransform } from '@nestjs/common';
import { FuelType } from '../enums/fuelType.enum';
export declare class FuelTypeValidationPipe implements PipeTransform {
    readonly whitelist: FuelType[];
    transform(value: any): FuelType;
    private isWhitelist;
}
