import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create an instance of HttpAdapterHost to access the underlying HTTP adapter
  // Register the AllExceptionsFilter globally to catch all exceptions
  const { httpAdapter } = app.get(HttpAdapterHost)
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter))

  // Enable CORS (Cross-Origin Resource Sharing) for all routes
  app.enableCors(); 

  // Set a global prefix for all routes, e.g., /api/users
  app.setGlobalPrefix('api'); 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
