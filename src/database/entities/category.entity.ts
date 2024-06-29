import {Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity} from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'categories' } )
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Product, product => product.category)
  products: Product[];
}
