import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
   
    @IsPositive()
    @Type(() => Number)
    limit: number;

  
    @IsPositive()
    @Type(() => Number)
    offset: number;
}
