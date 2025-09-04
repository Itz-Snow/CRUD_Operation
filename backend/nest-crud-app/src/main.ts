import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  // Enable CORS (Cross-Origin Resource Sharing) for all routes
  app.enableCors();

  // Set a global prefix for all routes, e.g., /api/users
  app.setGlobalPrefix('api');

  // ✅ Render requires binding to process.env.PORT and 0.0.0.0
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0'); 

  console.log(`🚀 Server running on port ${port}`);
}
bootstrap();
