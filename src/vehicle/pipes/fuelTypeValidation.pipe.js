import {PipeTransform} from '@nestjs/common'
import {FuelType} from '../enums/fuelType.enum'

export class FuelTypeValidationPipe implements PipeTransform
{
    readonly whitelist: FuelType[] = {
        FuelType.
    }
}