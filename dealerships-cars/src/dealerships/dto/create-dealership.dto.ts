import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
export class CreateDealershipDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsOptional()
    @IsNumber()
    active?: boolean;
}
