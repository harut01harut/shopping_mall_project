import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { TypeOrmConfigService } from './typeorm-config.service';
import { entities } from '@entities/index.entities';
import { ProductRepository } from "@repositories/product.repository";
import { CategoryRepository } from "@repositories/category.repository";

const dynamicEntities = TypeOrmModule.forFeature([...entities]);
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
      inject: [ConfigService],
      dataSourceFactory: async (options) => {
        return await new DataSource(options).initialize();
      },
    }),
    dynamicEntities,
  ],
  exports: [
    dynamicEntities,
    ProductRepository,
    CategoryRepository
  ],
  providers: [
    ProductRepository,
    CategoryRepository
  ]
})
export class DatabaseModule {}
