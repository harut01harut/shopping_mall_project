import { I_BaseRepository } from "./base-repository.interfaces";
import { Product } from "@entities/product.entity";

export interface I_ProductRepository extends I_BaseRepository<Product> {}
