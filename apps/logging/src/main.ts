import { NestFactory } from '@nestjs/core';
import { LoggingModule } from './logging.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(LoggingModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(Number(process.env.PORT) || 3002, '0.0.0.0');
}
void bootstrap();
