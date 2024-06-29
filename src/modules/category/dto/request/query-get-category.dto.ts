import { IsOptional } from 'class-validator';
import { PaginationDto } from '@common/dto/pagination.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {Type} from "class-transformer";

export class QueryGetCategoryDto extends PaginationDto {

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

}
