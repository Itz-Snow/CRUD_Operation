import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import {ThrottlerModule, ThrottlerGuard} from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';


@Module({
  imports: [
    DatabaseModule, 
    UsersModule, 
    ThrottlerModule.forRoot([{
      ttl: 60, // Time to live in seconds   
      limit: 10, // Maximum number of requests per ttl
    }]), MyLoggerModule
  ],
  controllers: [AppController],
  providers: [AppService, {
      provide: APP_GUARD,
      useClass: ThrottlerGuard, // Use the ThrottlerGuard to apply rate limiting globally
    }
  ],
})
export class AppModule {}
