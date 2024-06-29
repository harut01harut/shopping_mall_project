import { seeder } from 'nestjs-seeder';
import { ConfigModule } from '@nestjs/config';
import {
  configApp,
  configPostgres,
} from '@config/index';
import { DatabaseModule } from '../database.module';
import { CategoriesSeeder } from '@seeds/factory/1_categories.seeder';

seeder({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        configApp,
        configPostgres,
      ],
      envFilePath: ['.env'],
    }),
    DatabaseModule,
  ],
}).run([
  CategoriesSeeder
]);
