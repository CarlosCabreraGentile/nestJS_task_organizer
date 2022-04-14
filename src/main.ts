import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * this tells whenever nestJS encounterany of those validation decorator's,
   * it will know to execute validation 
   * by save us from a lot of code at the controller level
   */
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
