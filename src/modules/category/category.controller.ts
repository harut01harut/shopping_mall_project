import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/request/create-category.dto';
import { UpdateCategoryDto } from './dto/request/update-category.dto';
import { QueryGetCategoryDto } from "@modules/category/dto/request/query-get-category.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('Categories')
@Controller('categories')
export class CategoryController {
  constructor( private readonly categoryService: CategoryService ) {}

  @Post()
  @HttpCode(201)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createAndSave(createCategoryDto);
  }

  @Get()
  async findAll(
    @Query() query: QueryGetCategoryDto
  ) {
    const [ categories,count] = await this.categoryService.findWithPaginationService(query)
    return { categories, count  }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto);
  }


  @Delete(':id')
  @ApiOperation({ description: 'You cannot delete categories which are already attached with products'  })
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
