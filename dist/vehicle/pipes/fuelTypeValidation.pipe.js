"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuelTypeValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const fuelType_enum_1 = require("../enums/fuelType.enum");
class FuelTypeValidationPipe {
    constructor() {
        this.whitelist = [
            fuelType_enum_1.FuelType.DIESEL,
            fuelType_enum_1.FuelType.ELECTRIC,
            fuelType_enum_1.FuelType.HYBRID,
            fuelType_enum_1.FuelType.PETROL,
        ];
    }
    transform(value) {
        if (this.isWhitelist(value)) {
            throw new common_1.BadRequestException("Invalid fuel type");
        }
        return value;
    }
    isWhitelist(value) {
        return this.whitelist.indexOf(value) !== -1;
    }
}
exports.FuelTypeValidationPipe = FuelTypeValidationPipe;
//# sourceMappingURL=fuelTypeValidation.pipe.js.map