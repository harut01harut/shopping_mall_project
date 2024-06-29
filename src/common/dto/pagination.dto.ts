import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import { SORT_ORDER } from '@common/enums/sort-order.enum';

export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  @Min(1)
  @ApiPropertyOptional({
    name: 'page',
    required: false,
    example: 1,
    description: 'Defines the page to start the pagination',
  })
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  @ApiPropertyOptional({
    name: 'perPage',
    required: false,
    example: 10,
    description: 'Defines documents in each page',
  })
  perPage: number = 10;

  @IsOptional()
  @ApiPropertyOptional({
    name: 'sortField',
    required: false,
    example: 'id',
    description: 'Defines the field to sort',
  })
  sortField: string = 'id';

  @IsOptional()
  @IsEnum(SORT_ORDER)
  @ApiPropertyOptional({
    name: 'sortOrder',
    enum: SORT_ORDER,
    required: false,
    example: SORT_ORDER.ASC,
    description: 'Defines sort order ascending or descending',
  })
  sortOrder: SORT_ORDER = SORT_ORDER.DESC;
}
