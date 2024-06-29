import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from "@repositories/product.repository";
import { QueryGetProductsDto } from "@modules/product/dto/request/query-get-products.dto";
import { Product } from "@entities/product.entity";
import { CategoryRepository } from "@repositories/category.repository";
import { CreateProductDto } from './dto/request/create-product.dto';
import { UpdateProductDto } from './dto/request/update-product.dto';
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";

@Injectable()
export class ProductService {

  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository,
  ) { }

  async createAndSave(createProductDto: CreateProductDto) {
    const { sku, categoryId } = createProductDto

    if(sku){
      await this._checkSkuIsUnique(createProductDto.sku);
    } else {
      createProductDto.sku = this._randomStringGenerator(8);
      // here we can also check if we want
    }

    await this._checkCategoryExistence(categoryId)

    const draftProduct = this.productRepository.create(createProductDto)
    return draftProduct.save()
  }

  findWithPaginationService(
    query: QueryGetProductsDto
  ){
    return this.productRepository.findAndFilterWithPagination(query);
  }

  findOne(id: number) {
    return this._checkIDAndReturnProduct(id, { relations: ['category'] })
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this._checkIDAndReturnProduct(id);
    const { sku, categoryId } = updateProductDto

    if(sku){
      await this._checkSkuIsUnique(updateProductDto.sku);
    }

    if(categoryId) {
      await this._checkCategoryExistence(categoryId);
    }

    Object.assign(product, updateProductDto);

    return product.save()
  }

  async remove(id: number) {
    const product = await this._checkIDAndReturnProduct(id);

    return product.remove()
  }

  private async _checkIDAndReturnProduct(id: number, options?: {}): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id },
      ...options
    });

    if(!product){
      throw new NotFoundException(`Product with ${id} not found`)
    }
    return product
  }

  private async _checkCategoryExistence(id: number): Promise<void> {
    const category = await this.categoryRepository.findOneById(id);
    if(!category) {
      throw new BadRequestException(`Category with ${id} not found for attaching`)
    }
  }

  private async _checkSkuIsUnique(sku: string): Promise<void> {
    const isExist = await this.productRepository.findOne({ where: { sku } })
    if(isExist) {
      throw new BadRequestException('SKU is not unique')
    }
  }

  private _randomStringGenerator(length): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
