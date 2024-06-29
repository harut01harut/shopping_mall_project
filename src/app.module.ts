import { Module } from '@nestjs/common';
import { GlobalModule } from "@modules/global.module";
import { ConfigModule } from "@nestjs/config";
import { ProductModule } from '@modules/product/product.module';
import { CategoryModule } from '@modules/category/category.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import {
  configApp,
  configPostgres
} from "@common/config";

@Module({
  imports: [
    GlobalModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        configApp,
        configPostgres,
      ],
      envFilePath: ['.env'],
    }),
    ProductModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
