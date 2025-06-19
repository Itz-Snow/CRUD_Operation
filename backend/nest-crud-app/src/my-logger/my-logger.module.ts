import { Module } from '@nestjs/common';
import { MyLoggerService } from './my-logger.service';

@Module({
  providers: [MyLoggerService],
  exports: [MyLoggerService], 
  // Note: No controllers are defined in this module, as it is primarily a service module
})
export class MyLoggerModule {}
