import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

// This module provides the DatabaseService which can be used to interact with the database.
@Module({
  providers: [DatabaseService],
  exports: [DatabaseService]
})
export class DatabaseModule {}
