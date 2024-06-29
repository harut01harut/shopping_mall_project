import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Category } from "./category.entity";

@Entity({ name: 'products' })
export class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    unique: true,
    length: 8
  })
  sku: string;

  @Column({
    type: "bigint",
  })
  price: number; // using pricing with cents so that's why I choose bigint type

  @Column()
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'categoryId', referencedColumnName: 'id' })
  category: Category;

}
