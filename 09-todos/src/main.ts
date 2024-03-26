import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new TransformInterceptor());

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: process.env.NODE_ENV === 'production',
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);
}

bootstrap();
