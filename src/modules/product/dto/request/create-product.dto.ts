import {IsNotEmpty, IsNumber, IsOptional, IsString, Length, MaxLength, Min} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import {Optional} from "@nestjs/common";

export class CreateProductDto {

  @ApiProperty({ example: 'Product Description' })
  @MaxLength(30)
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Product Description' })
  @MaxLength(120)
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'aWder124' })
  @Length(8)
  @IsString()
  @IsOptional()
  sku: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

}
