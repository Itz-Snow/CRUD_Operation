import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS (Cross-Origin Resource Sharing) for all routes
  app.enableCors(); 
  // Set a global prefix for all routes, e.g., /api/users
  app.setGlobalPrefix('api'); 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
