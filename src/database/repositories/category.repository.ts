import { InjectRepository } from "@nestjs/typeorm";
import { BaseAbstractRepository } from "./base.repository";
import { Repository} from "typeorm";
import { Category } from "@entities/category.entity"
import { I_CategoryRepository } from "./interfaces/category.interface";

export class CategoryRepository extends BaseAbstractRepository<Category> implements I_CategoryRepository {
  constructor(
    @InjectRepository(Category)
    private readonly CategoryRepository: Repository<Category>
  ) {
    super(CategoryRepository)
  }
}
