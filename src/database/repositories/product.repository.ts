import { InjectRepository } from "@nestjs/typeorm";
import { BaseAbstractRepository } from "./base.repository";
import { Repository} from "typeorm";
import { Product } from "@entities/product.entity"
import { I_ProductRepository } from "./interfaces/product.interface";

export class ProductRepository extends BaseAbstractRepository<Product> implements I_ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {
    super(productRepository)
  }
}
