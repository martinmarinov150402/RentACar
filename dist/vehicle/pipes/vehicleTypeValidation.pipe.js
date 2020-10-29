"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleTypeValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const vehicleType_enum_1 = require("../enums/vehicleType.enum");
class VehicleTypeValidationPipe {
    constructor() {
        this.whitelist = [
            vehicleType_enum_1.VehicleType.CARGO,
            vehicleType_enum_1.VehicleType.ECONOMY,
            vehicleType_enum_1.VehicleType.ESTATE,
            vehicleType_enum_1.VehicleType.LUXURY,
            vehicleType_enum_1.VehicleType.SUV,
        ];
    }
    transform(value) {
        if (!this.isWhitelist(value)) {
            throw new common_1.BadRequestException('Invalid Vehicle type');
        }
        return value;
    }
    isWhitelist(value) {
        return this.whitelist.indexOf(value) !== -1;
    }
}
exports.VehicleTypeValidationPipe = VehicleTypeValidationPipe;
//# sourceMappingURL=vehicleTypeValidation.pipe.js.map