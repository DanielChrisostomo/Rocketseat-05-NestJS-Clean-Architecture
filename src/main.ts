import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false,
  });

  await app.listen(process.env.PORT ?? 3333).then(() => console.log("Server Running 🚀!"));
}
bootstrap();
