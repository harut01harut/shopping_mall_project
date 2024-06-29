import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { categoriesConstant } from '@seeds/seeding-data/1_categories.constant';
import { CategoryRepository } from "@repositories/category.repository";
import { In } from "typeorm";

@Injectable()
export class CategoriesSeeder implements Seeder {
  constructor(
    private readonly categoryRepo: CategoryRepository,
  ) {}

  async seed(): Promise<any> {
    const ids = categoriesConstant.map((ctg) => ctg.id);
    const dbResult = await this.categoryRepo.findAll({
      where : {
        id: In(ids)
      }
    });
    const arr = [];

    if (dbResult.length !== categoriesConstant.length) {
      categoriesConstant.forEach((ctg) => {
        if (!dbResult.find((item) => item.id === ctg.id)) {
          arr.push(this.categoryRepo.create(ctg));
        }
      });
      await this.categoryRepo.saveMany(arr);
    }
  }

  async drop(): Promise<any> {
  }
}
