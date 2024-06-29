import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { swaggerSetup } from "@common/swagger.setup";
import { initialSetup } from "@common/initial.setup";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {});
  const configService = app.get(ConfigService);

  initialSetup(app, configService);
  swaggerSetup(app);

  const APP_PORT = configService.get('app.port');
  await app.listen(APP_PORT, () => {
    console.log(`Application running on port ${APP_PORT}`, )
  });
}
bootstrap();
