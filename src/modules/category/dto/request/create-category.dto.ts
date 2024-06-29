import { IsNotEmpty, IsString, MaxLength} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {

  @ApiProperty({ example: 'Category title' })
  @MaxLength(30)
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Category description' })
  @MaxLength(120)
  @IsString()
  @IsNotEmpty()
  description: string;

}
