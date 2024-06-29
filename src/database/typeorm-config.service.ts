import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import * as path from 'path';
// import { EntitySubscriber } from '@common/shared/services/entity-subscriber';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.configService.get('postgres.type'),
      host: this.configService.get('postgres.host'),
      port: this.configService.get('postgres.port'),
      username: this.configService.get('postgres.username'),
      password: this.configService.get('postgres.password'),
      database: this.configService.get('postgres.name'),
      synchronize: this.configService.get('postgres.synchronize'),
      dropSchema: false,
      keepConnectionAlive: true,
      logging: false,
      entities: [path.join(__dirname, '/../**/*.entity{.ts,.js}')],
      migrations: [path.join(__dirname, '/migrations/**/*{.ts,.js}')],
      cli: {
        entitiesDir: 'src',
        migrationsDir: 'src/database/migrations',
        subscribersDir: 'subscriber',
      },
      extra: {
        max: this.configService.get('postgres.maxConnections'),
      },
    } as TypeOrmModuleOptions;
  }
}
