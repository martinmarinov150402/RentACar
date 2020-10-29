import {BadRequestException, PipeTransform} from '@nestjs/common'
import {FuelType} from '../enums/fuelType.enum'

export class FuelTypeValidationPipe implements PipeTransform
{
    readonly whitelist: FuelType[] = [
        FuelType.DIESEL,
        FuelType.ELECTRIC,
        FuelType.HYBRID,
        FuelType.PETROL,
    ];
    transform(value: any): FuelType
    {
        if (this.isWhitelist(value)) {
            throw new BadRequestException("Invalid fuel type");    
        }
        return value;
        
    }
    private isWhitelist(value: any): value is FuelType
    {
        return this.whitelist.indexOf(value) !== -1;
    }
}