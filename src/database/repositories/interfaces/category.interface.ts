import { I_BaseRepository } from "./base-repository.interfaces";
import { Category } from "@entities/category.entity";

export interface I_CategoryRepository extends I_BaseRepository<Category> {}
