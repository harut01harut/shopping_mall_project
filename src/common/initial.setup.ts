import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

export function initialSetup(app: NestExpressApplication, configService: ConfigService) {

  app.setGlobalPrefix(configService.get('app.apiPrefix'));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
}
