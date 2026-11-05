import { IsString, IsNumber, IsOptional,Min,Max, IsEnum} from 'class-validator';
import { carStatus } from '../entities/car.entity.js';
export class CreateCarDto {
    @IsString()
    plate: string;

    @IsString()
    brand: string;

    @IsString()
    model: string;

    @IsNumber()
    @Min(1990)
    @Max(2027)
    year: number;

    @IsNumber()
    @Min(0)
    price: number;

    @IsEnum(carStatus)
    status: carStatus;
    
    @IsOptional()
    dealershipId: number | null;
}
