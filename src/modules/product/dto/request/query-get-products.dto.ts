import { IsOptional } from 'class-validator';
import { PaginationDto } from '@common/dto/pagination.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from "class-transformer";

export class QueryGetProductsDto extends PaginationDto {

  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional({
    name: 'id',
    required: false,
    description: 'filtering by id',
  })
  id: number;

  @IsOptional()
  @ApiPropertyOptional({
    name: 'title',
    required: false,
    description: 'filtering by title',
  })
  title: string;

  @IsOptional()
  @ApiPropertyOptional({
    name: 'sku',
    required: false,
    description: 'filtering by sku',
  })
  sku: string;

  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional({
    name: 'categoryId',
    required: false,
    description: 'picking category will return products under that category',
  })
  categoryId: number;
}
