import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/request/create-category.dto';
import { UpdateCategoryDto } from './dto/request/update-category.dto';
import { CategoryRepository } from "@repositories/category.repository";
import { Category } from "@entities/category.entity";
import { QueryGetCategoryDto } from "@modules/category/dto/request/query-get-category.dto";
import { ProductRepository } from "@repositories/product.repository";

@Injectable()
export class CategoryService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly productRepository: ProductRepository
  ) {}

  createAndSave(createCategoryDto: CreateCategoryDto) {
    const draftCategory = this.categoryRepository.create(createCategoryDto)
    return draftCategory.save()
  }

  findWithPaginationService(
    query: QueryGetCategoryDto
  ) {
    return this.categoryRepository.findAndFilterWithPagination(query)
  }

  findOne(id: number) {
    return this._checkIDAndReturnCategory(id)
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this._checkIDAndReturnCategory(id);
    Object.assign(category, updateCategoryDto);
    return category.save()
  }

  async remove(id: number) {
    const category = await this._checkIDAndReturnCategory(id);

    const product = await this.productRepository.findOne({ where: { categoryId: id }  })
    if(product){
      throw new BadRequestException(`You can not remove already attached category`)
    }

    return category.remove();
  }

  private async _checkIDAndReturnCategory(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOneById(id);
    if(!category){
      throw new NotFoundException(`Category with ${id} not found`)
    }
    return category
  }
}
